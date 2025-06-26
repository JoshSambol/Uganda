import { Container, Title, Text, Button, Group, Stack, Card, Badge, Divider, Alert } from '@mantine/core';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { IconHeart, IconExternalLink, IconAlertCircle, IconCreditCard, IconShieldCheck } from '@tabler/icons-react';
import jcfgmLogo from '../assets/JCFGM logo.png';
// import { useState, useEffect } from 'react';

const Donate = () => {
    const navigate = useNavigate();
    // const [iframeError, setIframeError] = useState(false);
    // const [iframeLoading, setIframeLoading] = useState(true);

    // const handleIframeLoad = () => {
    //     setIframeLoading(false);
    // };

    // const handleIframeError = () => {
    //     setIframeError(true);
    //     setIframeLoading(false);
    // };

    return (
        <Container className='donate-container' size="xl" style={{ 
            paddingLeft: '1rem', 
            paddingRight: '1rem', 
            paddingTop: '100px', 
            paddingBottom: '4rem', 
            minWidth: '100vw', 
            background: 'linear-gradient(135deg,rgba(52, 114, 228, 0.54) 0%,rgba(152, 190, 255, 0.35) 50%,rgb(255, 255, 255) 100%)' 
        }}>
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ textAlign: 'center', marginBottom: '3rem' }}
            >
                <Title size="3rem" mb="md" style={{ color: '#1e3c72', fontWeight: 700 }}>
                    Donate to Keep Jewish Education Alive
                </Title>
                <Text size="xl" style={{ maxWidth: '800px', margin: '0 auto', color: '#666' }}>
                    Your generous support directly impacts the lives of Jewish students in Uganda, ensuring their access to quality education and the preservation of their cultural heritage.
                </Text>
            </motion.div>

            {/* Donation Form Container */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <Card shadow="lg" padding="xl" radius="md" style={{ 
                    backgroundColor: 'white',
                    minHeight: '300px',
                    position: 'relative',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                <Title order={2} mb="xl" style={{ color: '#1e3c72', textAlign: 'center' }}>Donate via credit/debit card</Title>
                    
                    {/* Custom Donation Card */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        style={{ cursor: 'pointer' }}
                        onClick={() => window.open('https://jcfgm.donorsphere.org/donate/4e77f079-8adf-4b59-93a3-14d847218d82', '_blank')}
                    >
                        <Card 
                            shadow="lg" 
                            padding="xl" 
                            radius="lg" 
                            style={{ 
                                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                                border: '2px solid #e1e5e9',
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            {/* Background Pattern */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                width: '150px',
                                height: '150px',
                                background: 'linear-gradient(135deg, rgba(30, 60, 114, 0.05) 0%, rgba(74, 144, 226, 0.05) 100%)',
                                borderRadius: '50%',
                                transform: 'translate(50px, -50px)',
                                zIndex: 0
                            }} />
                            
                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <Group justify="space-between" align="center" mb="lg">
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <img 
                                            src={jcfgmLogo} 
                                            alt="JCFGM Logo" 
                                            style={{ 
                                                width: '60px', 
                                                height: '60px', 
                                                objectFit: 'contain',
                                                borderRadius: '8px'
                                            }} 
                                        />
                                        <div>
                                            <Title order={3} style={{ color: '#1e3c72', margin: 0 }}>
                                                Secure Online Donation
                                            </Title>
                                            <Text size="sm" c="dimmed" style={{ margin: 0 }}>
                                                Jewish Community Foundation of Greater Mercer
                                            </Text>
                                        </div>
                                    </div>
                                    <IconExternalLink size={24} style={{ color: '#1e3c72' }} />
                                </Group>
                                
                                <Divider mb="lg" />
                                
                                <Group gap="xl" wrap="wrap">
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <IconCreditCard size={20} style={{ color: '#1e3c72' }} />
                                        <Text size="sm" fw={500}>Credit/Debit Cards Accepted</Text>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <IconShieldCheck size={20} style={{ color: '#1e3c72' }} />
                                        <Text size="sm" fw={500}>SSL Secured</Text>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <IconHeart size={20} style={{ color: '#1e3c72' }} />
                                        <Text size="sm" fw={500}>Tax Deductible</Text>
                                    </div>
                                </Group>
                                
                                <Text size="sm" c="dimmed" mt="md" style={{ fontStyle: 'italic' }}>
                                    Click to access our secure donation portal powered by DonorSphere
                                </Text>
                            </div>
                        </Card>
                    </motion.div>
                    
                    <Text size="sm" c="dimmed" style={{ textAlign: 'center', marginTop: '1rem' }}>
                        <b>Having trouble?  </b> Please visit <a href="https://jcfgm.donorsphere.org/donate/4e77f079-8adf-4b59-93a3-14d847218d82" target="_blank" rel="noopener noreferrer">donorsphere</a> directly.
                    </Text>
                </Card>
            </motion.div>

            {/* Additional Information */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ marginTop: '3rem' }}
            >
                <Group justify="center" gap="lg" wrap="wrap">
                    <Card shadow="sm" padding="lg" radius="md" style={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(10px)',
                        minWidth: '250px',
                        textAlign: 'center'
                    }}>
                        <IconShieldCheck size={40} style={{ margin: '0 auto 1rem', display: 'block', color: '#1e3c72' }} />
                        <Title order={4} mb="xs" style={{ color: '#1e3c72' }}>
                            Secure Donations
                        </Title>
                        <Text size="sm" c="dimmed">
                            All donations are processed securely through our trusted partners.
                        </Text>
                    </Card>

                    
                    <Card shadow="sm" padding="lg" radius="md" style={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(10px)',
                        minWidth: '250px',
                        textAlign: 'center'
                    }}>
                        <IconHeart size={40} style={{ margin: '0 auto 1rem', display: 'block', color: '#1e3c72' }} />
                        <Title order={4} mb="xs" style={{ color: '#1e3c72' }}>
                            Direct Impact
                        </Title>
                        <Text size="sm" c="dimmed">
                            100% of your donation goes directly to supporting Jewish education in Uganda.
                        </Text>
                    </Card>
                </Group>
            </motion.div>

            {/* How to Donate Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{ marginTop: '4rem' }}
            >
                <Title order={2} mb="xl" style={{ color: '#1e3c72', textAlign: 'center' }}>
                    Other Ways to Donate
                </Title>
                
                <Stack gap="xl">
                    {/* Check Donations */}
                    <Card shadow="sm" padding="xl" radius="md" style={{ backgroundColor: 'white' }}>
                        <Title order={3} mb="lg" style={{ color: '#1e3c72' }}>
                            Check Donations
                        </Title>
                        <Stack gap="md">
                            <Text>
                                <strong>Make checks payable to:</strong> Jewish Community Foundation of Greater Mercer
                            </Text>
                            <Text>
                                <strong>Important:</strong> Please indicate in a letter sent along with the check or in the check memo line that the monies are to be directed to <strong>The Friends of the Abayudaya Fund</strong> at the Jewish Community Foundation.
                            </Text>
                            <Card shadow="xs" padding="md" radius="sm" style={{ backgroundColor: '#f8f9fa' }}>
                                <Text fw={600} mb="xs">Mailing Address:</Text>
                                <Text>Jewish Community Foundation of Greater Mercer</Text>
                                <Text>457 Nassau Street, Suite 101</Text>
                                <Text>Princeton, NJ 08540</Text>
                            </Card>
                        </Stack>
                    </Card>

                    {/* Wire Transfer */}
                    <Card shadow="sm" padding="xl" radius="md" style={{ backgroundColor: 'white' }}>
                        <Title order={3} mb="lg" style={{ color: '#1e3c72' }}>
                            Wire Transfer
                        </Title>
                        <Stack gap="md">
                            <Card shadow="xs" padding="md" radius="sm" style={{ backgroundColor: '#f8f9fa' }}>
                                <Text fw={600} mb="xs">Wire To:</Text>
                                <Text>FRB ABA 021001088</Text>
                                <Text>HSBC Bank USA, New York</Text>
                                <Text>452 Fifth Avenue</Text>
                                <Text>New York, NY 10018</Text>
                            </Card>
                            <Card shadow="xs" padding="md" radius="sm" style={{ backgroundColor: '#f8f9fa' }}>
                                <Text fw={600} mb="xs">For Credit:</Text>
                                <Text>Account 000112046 (Incoming Wires)</Text>
                                <Text>In Favor of: VIAS – IIS Operations</Text>
                                <Text>Plan number: J**PO (Please contact JCFGM at 609-240-9511 for the full plan number)</Text>
                                <Text>Plan name: Jewish Community Foundation Portfolio Account</Text>
                            </Card>
                            <Alert variant="light" color="blue" title="Important Notice">
                                Please notify JCFGM at <strong>info@foundationjewish.org</strong> or <strong>609-240-9511</strong> about a forthcoming wire, and its designation to the Friends of the Abayudaya Fund.
                            </Alert>
                        </Stack>
                    </Card>

                    {/* Securities Transfer */}
                    <Card shadow="sm" padding="xl" radius="md" style={{ backgroundColor: 'white' }}>
                        <Title order={3} mb="lg" style={{ color: '#1e3c72' }}>
                            Transfer of Securities
                        </Title>
                        <Stack gap="md">
                            <Card shadow="xs" padding="md" radius="sm" style={{ backgroundColor: '#f8f9fa' }}>
                                <Text fw={600} mb="xs">Vanguard Brokerage Services (1-800-992-8327)</Text>
                                <Text>DTC number: 0062</Text>
                                <Text>Name of Account: Jewish Community Foundation of Greater Mercer</Text>
                                <Text>Account number: 45433463</Text>
                            </Card>
                            <Alert variant="light" color="blue" title="Important Notice">
                                Please notify JCFGM of your intent to donate securities. Because of privacy practices at brokerage firms, Vanguard is not able to identify the name of the individual making the transaction. Please contact <strong>info@foundationjewish.org</strong> or call <strong>609-240-9511</strong>. At that time, you can inform the Foundation staff that the stock transfer is for the Friends of the Abayudaya Fund.
                            </Alert>
                        </Stack>
                    </Card>

                    {/* Employer Matching */}
                    <Card shadow="sm" padding="xl" radius="md" style={{ backgroundColor: 'white' }}>
                        <Title order={3} mb="lg" style={{ color: '#1e3c72' }}>
                            Employer/Workplace Matching Gift Information
                        </Title>
                        <Stack gap="md">
                            <Text>
                                It is important to notify the Foundation staff of your intent to make a workplace/employer matching gift. If needed, the Jewish Community Foundation of Greater Mercer's Tax ID number is <strong>23-7174039</strong>.
                            </Text>
                            <Card shadow="xs" padding="md" radius="sm" style={{ backgroundColor: '#f8f9fa' }}>
                                <Text fw={600} mb="xs">Mailing Address:</Text>
                                <Text>Jewish Community Foundation of Greater Mercer</Text>
                                <Text>457 Nassau Street, Suite 101</Text>
                                <Text>Princeton, NJ 08540</Text>
                            </Card>
                        </Stack>
                    </Card>

                    {/* Contact Information */}
                    <Card shadow="sm" padding="xl" radius="md" style={{ 
                        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #4a90e2 100%)',
                        color: 'white'
                    }}>
                        <Title order={3} mb="lg" style={{ color: 'white', textAlign: 'center' }}>
                            Contact Information
                        </Title>
                        <Group gap="xl" wrap="wrap" justify="center">
                            <div style={{ textAlign: 'center' }}>
                                <Text fw={600} mb="xs">Phone:</Text>
                                <Text>609-240-9511</Text>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <Text fw={600} mb="xs">Email:</Text>
                                <Text>info@foundationjewish.org</Text>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <Text fw={600} mb="xs">Address:</Text>
                                <Text>457 Nassau Street, Suite 101</Text>
                                <Text>Princeton, NJ 08540</Text>
                            </div>
                        </Group>
                    </Card>
                </Stack>
            </motion.div>

            <style jsx>{`
                .donate-container {
                    padding-left: 1rem !important;
                    padding-right: 1rem !important;
                }

                @media (min-width: 768px) {
                    .donate-container {
                        padding-left: 20rem !important;
                        padding-right: 20rem !important;
                    }
                }

                @keyframes spin {
                    0% { transform: translate(-50%, -50%) rotate(0deg); }
                    100% { transform: translate(-50%, -50%) rotate(360deg); }
                }
            `}</style>
        </Container>
    );
};

export default Donate;