import { Group, ActionIcon, Text, Button, Container, Stack, Burger, Drawer } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconMenu2 } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'motion/react';
import { Title, Card } from '@mantine/core';
import heroImage16x9 from '../assets/16-9.png';
import heroImage9x16 from '../assets/9-16.png';

const Nav = () => {
    const navigate = useNavigate();
    const [opened, setOpened] = useState(false);

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Donate', path: '/donate' },
        { label: 'Contact', path: '/contact' }
    ];

    const handleNavClick = (path) => {
        navigate(path);
        setOpened(false); // Close mobile menu when item is clicked
    };

    return (
        <>
            <Container 
                style={{ 
                    position: 'fixed', 
                    top: 0, 
                    left: 0, 
                    right: 0, 
                    zIndex: 1000, 
                    backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                    backdropFilter: 'blur(10px)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                    padding: '1rem',
                    minWidth: '100vw'
                }}
            >
                <Group justify="space-between" align="center">
                    <Text 
                        size="lg" 
                        fw={600} 
                        style={{ cursor: 'pointer' }}
                        onClick={() => navigate('/')}
                    >
                        Friends of the Abayudaya
                    </Text>
                    
                    {/* Desktop Navigation */}
                    <Group gap="md" className="desktop-nav">
                        {navItems.map((item) => (
                            <Button 
                                key={item.label}
                                variant="subtle" 
                                p={'sm'}
                                onClick={() => handleNavClick(item.path)}
                                style={{ color: '#1e3c72'}}
                            >
                                {item.label}
                            </Button>
                        ))}

                    </Group>
                    {/* Mobile Hamburger Menu */}
                    <Burger
                        opened={opened}
                        onClick={() => setOpened(!opened)}
                        size="sm"
                        color="#1e3c72"
                        className="mobile-nav"
                    />
                </Group>
            </Container>

            {/* Mobile Drawer */}
            <Drawer
                opened={opened}
                onClose={() => setOpened(false)}
                position="right"
                size="xs"
                overlayProps={{ opacity: 0.5, blur: 4 }}
                title="Menu"
                styles={{
                    title: { color: '#1e3c72', fontWeight: 600 },
                    header: { backgroundColor: 'rgba(255, 255, 255, 0.95)' },
                    body: { backgroundColor: 'rgba(255, 255, 255, 0.95)' }
                }}
            >
                <Stack gap="md" mt="xl">
                    {navItems.map((item) => (
                        <Button 
                            key={item.label}
                            variant="subtle" 
                            fullWidth
                            onClick={() => handleNavClick(item.path)}
                            style={{ 
                                color: '#1e3c72',
                                textAlign: 'left',
                                justifyContent: 'flex-start',
                                padding: 0,
                                fontSize: '1.1rem'
                            }}
                        >
                            {item.label}
                        </Button>
                    ))}
                    
                    <div style={{ marginTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '1rem' }}>
                        <Text size="sm" c="dimmed" mb="md"><a href="https://www.JoshuaSambol.com" target="_blank" rel="noopener noreferrer">Joshua Sambol</a> | Website Manager</Text>
                    </div>
                </Stack>
            </Drawer>

            <style jsx>{`
                .desktop-nav {
                    display: none;
                }
                
                .mobile-nav {
                    display: block;
                }
                
                @media (min-width: 768px) {
                    .desktop-nav {
                        display: flex !important;
                    }
                    
                    .mobile-nav {
                        display: none !important;
                    }
                }
            `}</style>
        </>
    );
};

export default Nav;