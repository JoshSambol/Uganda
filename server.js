const express = require('express');
const axios = require('axios');
const cors = require('cors');
const puppeteer = require('puppeteer');

const app = express();
const PORT = 3001;

// Enable CORS for all origins
app.use(cors());

// Global browser instance
let browser = null;

// Initialize Puppeteer browser
async function initBrowser() {
    try {
        browser = await puppeteer.launch({
            headless: true,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-accelerated-2d-canvas',
                '--no-first-run',
                '--no-zygote',
                '--disable-gpu',
                '--disable-background-timer-throttling',
                '--disable-backgrounding-occluded-windows',
                '--disable-renderer-backgrounding'
            ]
        });
        console.log('Puppeteer browser initialized successfully');
    } catch (error) {
        console.error('Failed to initialize Puppeteer browser:', error);
    }
}

// Proxy endpoint using Puppeteer
app.get('/proxy', async (req, res) => {
    try {
        const { url } = req.query;
        
        if (!url) {
            return res.status(400).json({ error: 'URL parameter is required' });
        }

        if (!browser) {
            return res.status(500).json({ error: 'Browser not initialized' });
        }

        console.log(`Loading URL with Puppeteer: ${url}`);

        // Create a new page
        const page = await browser.newPage();

        // Set a realistic viewport
        await page.setViewport({ width: 1280, height: 720 });

        // Set user agent to a modern Chrome browser
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36');

        // Set extra headers to look more like a real browser
        await page.setExtraHTTPHeaders({
            'Accept-Language': 'en-US,en;q=0.9',
            'Accept-Encoding': 'gzip, deflate, br',
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
        });

        // Navigate to the URL and wait for the page to load
        await page.goto(url, { 
            waitUntil: 'networkidle2',
            timeout: 30000 
        });

        // Wait a bit more for any dynamic content to load
        await page.waitForTimeout(2000);

        // Inject script to fix common issues
        await page.evaluateOnNewDocument(() => {
            // Fix for environment detection issues
            window.getEnvironment = function() {
                return 'production';
            };
            
            // Fix for googleAnalyticIDs
            window.googleAnalyticIDs = window.googleAnalyticIDs || {};
            
            // Fix for moment.js date issues
            if (typeof moment !== 'undefined') {
                moment.suppressDeprecationWarnings = true;
            }
            
            // Suppress console warnings and errors
            console.warn = function() {};
            console.error = function() {};
            
            // Remove any iframe blocking scripts
            const scripts = document.querySelectorAll('script');
            scripts.forEach(script => {
                if (script.textContent.includes('X-Frame-Options') || 
                    script.textContent.includes('frame-ancestors') ||
                    script.textContent.includes('top.location')) {
                    script.remove();
                }
            });
        });

        // Get the final HTML content
        const htmlContent = await page.content();

        // Close the page
        await page.close();

        // Remove headers that would block iframe embedding
        res.removeHeader?.('X-Frame-Options');
        res.removeHeader?.('Content-Security-Policy');
        res.removeHeader?.('X-Content-Type-Options');

        // Set headers to allow iframe embedding
        res.setHeader('X-Frame-Options', 'ALLOWALL');
        res.setHeader('Content-Security-Policy', "default-src * data: blob: 'unsafe-inline' 'unsafe-eval'; frame-ancestors 'self' *");
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        
        // Return the rendered HTML content
        res.send(htmlContent);

    } catch (error) {
        console.error('Puppeteer proxy error:', error.message);
        
        res.status(500).json({ 
            error: 'Failed to render page',
            message: error.message
        });
    }
});

// Fallback proxy endpoint using Axios (for non-JavaScript pages)
app.get('/proxy-fallback', async (req, res) => {
    try {
        const { url } = req.query;
        
        if (!url) {
            return res.status(400).json({ error: 'URL parameter is required' });
        }

        const response = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.9',
                'Accept-Encoding': 'gzip, deflate, br',
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache'
            }
        });

        // Remove headers that would block iframe embedding
        res.removeHeader?.('X-Frame-Options');
        res.removeHeader?.('Content-Security-Policy');
        res.removeHeader?.('X-Content-Type-Options');

        // Set headers to allow iframe embedding
        res.setHeader('X-Frame-Options', 'ALLOWALL');
        res.setHeader('Content-Security-Policy', "default-src * data: blob: 'unsafe-inline' 'unsafe-eval'; frame-ancestors 'self' *");
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        
        res.send(response.data);

    } catch (error) {
        console.error('Fallback proxy error:', error.message);
        res.status(500).json({ error: 'Failed to fetch content' });
    }
});

// Asset proxy endpoint for CSS, JS, and other assets
app.get('/proxy-asset', async (req, res) => {
    try {
        const { url } = req.query;
        
        if (!url) {
            return res.status(400).json({ error: 'URL parameter is required' });
        }

        const response = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
                'Accept': '*/*',
                'Accept-Language': 'en-US,en;q=0.9',
                'Accept-Encoding': 'gzip, deflate, br'
            },
            responseType: 'arraybuffer'
        });

        // Set appropriate content type based on file extension
        const urlObj = new URL(url);
        const path = urlObj.pathname;
        
        if (path.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css');
        } else if (path.endsWith('.js')) {
            res.setHeader('Content-Type', 'application/javascript');
        } else if (path.endsWith('.png')) {
            res.setHeader('Content-Type', 'image/png');
        } else if (path.endsWith('.jpg') || path.endsWith('.jpeg')) {
            res.setHeader('Content-Type', 'image/jpeg');
        } else if (path.endsWith('.gif')) {
            res.setHeader('Content-Type', 'image/gif');
        } else if (path.endsWith('.svg')) {
            res.setHeader('Content-Type', 'image/svg+xml');
        } else if (path.endsWith('.woff')) {
            res.setHeader('Content-Type', 'font/woff');
        } else if (path.endsWith('.woff2')) {
            res.setHeader('Content-Type', 'font/woff2');
        } else {
            res.setHeader('Content-Type', 'application/octet-stream');
        }

        res.send(response.data);

    } catch (error) {
        console.error('Asset proxy error:', error.message);
        res.status(500).json({ error: 'Failed to fetch asset' });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        message: 'Proxy server is running',
        puppeteer: browser ? 'initialized' : 'not initialized'
    });
});

// Graceful shutdown
process.on('SIGINT', async () => {
    console.log('Shutting down server...');
    if (browser) {
        await browser.close();
    }
    process.exit(0);
});

// Start the server
app.listen(PORT, async () => {
    console.log(`Proxy server running on http://localhost:${PORT}`);
    console.log(`Puppeteer proxy: http://localhost:${PORT}/proxy?url=<target_url>`);
    console.log(`Fallback proxy: http://localhost:${PORT}/proxy-fallback?url=<target_url>`);
    console.log(`Asset proxy: http://localhost:${PORT}/proxy-asset?url=<asset_url>`);
    console.log(`Health check: http://localhost:${PORT}/health`);
    
    // Initialize Puppeteer browser
    await initBrowser();
});

module.exports = app; 