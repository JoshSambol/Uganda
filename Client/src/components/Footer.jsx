import { Text, Group } from '@mantine/core';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div 
            style={{ 
                fontSize: '1.5rem',
                width: '100vw',
                padding: '2rem 1rem',
                borderTop: '1px solid #1e3c72',
                backgroundColor: '#1e3c72',
                marginTop: 'auto',
                marginLeft: 'calc(-50vw + 50%)',
                marginRight: 'calc(-50vw + 50%)'
            }}
        >
            <Group justify="center">
                <Text 
                    size="sm" 
                    style={{ 
                        color: 'white',
                        textAlign: 'center'
                    }}
                >
                    © {currentYear}{' '}
                    <a 
                        href="https://www.JoshuaSambol.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ 
                            color: 'white',
                            textDecoration: 'underline',
                            fontWeight: 900
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.opacity = '0.8';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.opacity = '1';
                        }}
                    >
                        Joshua Sambol
                    </a>
                </Text>
            </Group>
        </div>
    );
};

export default Footer;
