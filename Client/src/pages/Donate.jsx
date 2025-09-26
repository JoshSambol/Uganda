import { Container, Title, Text, Button, Group, Stack, Card, Badge, Divider, Alert, Grid, Image, Box } from '@mantine/core';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { IconHeart, IconExternalLink, IconAlertCircle, IconCreditCard, IconShieldCheck, IconSchool, IconUsers } from '@tabler/icons-react';
import jcfgmLogo from '../assets/JCFGM logo.png';
import abayudayaLogo from '../assets/Abayudaya Logo.png';
import abayudayaSchool from '../assets/Abayudaya School pic.avif';
import abayudayaSchool1 from '../assets/Abayudaya school pic1.avif';
import abayudayaCommunity from '../assets/Abayudaya Community.avif';
import abayudaya5 from '../assets/abayudaya5.avif';
import abayudaya6 from '../assets/abayudaya 6.avif';
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
            paddingTop: '100px', 
            paddingBottom: '4rem', 
            minWidth: '100vw', 
            background: 'white'
        }}>
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ textAlign: 'center', marginBottom: '4rem' }}
            >
                <Group justify="center" mb="lg">
                    <Image 
                        src={abayudayaLogo} 
                        alt="Abayudaya Logo" 
                        style={{ width: '80px', height: '80px' }}
                    />
                </Group>
                <Title size="3.5rem" mb="md" style={{ color: '#1e3c72', fontWeight: 800, fontFamily: 'Georgia, serif' }}>
                    Support Jewish Education in Uganda
                </Title>
                <Text size="xl" style={{ maxWidth: '800px', margin: '0 auto', color: '#495057', lineHeight: 1.6 }}>
                    Your generous support directly impacts the lives of Jewish students in Uganda, ensuring their access to quality education and the preservation of their cultural heritage.
                </Text>
            </motion.div>

            {/* Impact Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ marginBottom: '4rem' }}
            >
                <Title order={2} mb="lg" style={{ color: '#1e3c72', textAlign: 'center', fontWeight: 700 }}>
                    Your Impact
                </Title>
                <Grid gutter="xl" align="center">
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Card shadow="lg" padding="xl" radius="lg" style={{ backgroundColor: '#f8f9fa', border: '2px solid #e9ecef', height: '100%' }}>
                            <Title order={3} mb="lg" style={{ color: '#1e3c72', fontWeight: 600 }}>
                                Schools We Support
                            </Title>
                            <Stack gap="lg">
                                <Box>
                                    <Text fw={600} size="lg" style={{ color: '#1e3c72' }}>Hadassah Primary School</Text>
                                    <Text style={{ color: '#495057', lineHeight: 1.6 }}>
                                        Providing foundational education to young Jewish students, combining secular subjects with Jewish studies and traditions.
                                    </Text>
                                </Box>
                                <Box>
                                    <Text fw={600} size="lg" style={{ color: '#1e3c72' }}>Semei Kakungulu High School</Text>
                                    <Text style={{ color: '#495057', lineHeight: 1.6 }}>
                                        Offering comprehensive secondary education that prepares students for higher education while maintaining their Jewish identity.
                                    </Text>
                                </Box>
                                <Group gap="lg">
                                    <Box style={{ textAlign: 'center' }}>
                                        <Text size="2rem" fw={700} style={{ color: '#1e3c72' }}>500+</Text>
                                        <Text size="sm" c="dimmed">Students</Text>
                                    </Box>
                                    <Box style={{ textAlign: 'center' }}>
                                        <Text size="2rem" fw={700} style={{ color: '#1e3c72' }}>2</Text>
                                        <Text size="sm" c="dimmed">Schools</Text>
                                    </Box>
                                    <Box style={{ textAlign: 'center' }}>
                                        <Text size="2rem" fw={700} style={{ color: '#1e3c72' }}>100+</Text>
                                        <Text size="sm" c="dimmed">Years</Text>
                                    </Box>
                                </Group>
                            </Stack>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Grid gutter="md">
                            <Grid.Col span={6}>
                                <Image 
                                    src={abayudayaSchool} 
                                    alt="Hadassah Primary School" 
                                    style={{ 
                                        width: '100%', 
                                        height: '200px', 
                                        objectFit: 'cover',
                                        borderRadius: '12px',
                                        boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                                    }}
                                />
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <Image 
                                    src={abayudayaSchool1} 
                                    alt="Semei Kakungulu High School" 
                                    style={{ 
                                        width: '100%', 
                                        height: '200px', 
                                        objectFit: 'cover',
                                        borderRadius: '12px',
                                        boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                                    }}
                                />
                            </Grid.Col>
                            <Grid.Col span={12}>
                                <Image 
                                    src={abayudayaCommunity} 
                                    alt="Students Learning" 
                                    style={{ 
                                        width: '100%', 
                                        height: '200px', 
                                        objectFit: 'cover',
                                        objectPosition: 'center',
                                        borderRadius: '12px',
                                        boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                                    }}
                                />
                            </Grid.Col>
                        </Grid>
                    </Grid.Col>
                </Grid>
            </motion.div>

            {/* Donation Form Container */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <Card shadow="lg" padding="xl" radius="lg" style={{ 
                    backgroundColor: 'white',
                    border: '2px solid #e9ecef',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                <Title order={2} mb="xl" style={{ color: '#1e3c72', textAlign: 'center', fontWeight: 700 }}>Donate via credit/debit card</Title>
                    
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
                                border: '2px solid #e9ecef',
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
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
                                            <Title order={3} style={{ color: '#1e3c72', margin: 0, fontWeight: 600 }}>
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
                                        <Text size="sm" fw={500} style={{ color: '#495057' }}>Credit/Debit Cards Accepted</Text>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <IconShieldCheck size={20} style={{ color: '#1e3c72' }} />
                                        <Text size="sm" fw={500} style={{ color: '#495057' }}>SSL Secured</Text>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <IconHeart size={20} style={{ color: '#1e3c72' }} />
                                        <Text size="sm" fw={500} style={{ color: '#495057' }}>Tax Deductible</Text>
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

            {/* Community Gallery Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{ marginTop: '4rem', marginBottom: '4rem' }}
            >
                <Title order={2} mb="lg" style={{ color: '#1e3c72', textAlign: 'center', fontWeight: 700 }}>
                    Community Impact
                </Title>
                <Grid gutter="md">
                    <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                        <Image 
                            src={abayudayaCommunity} 
                            alt="Community Life" 
                            style={{ 
                                width: '100%', 
                                height: '250px', 
                                objectFit: 'cover',
                                borderRadius: '12px',
                                boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                            }}
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                        <Image 
                            src={abayudaya5} 
                            alt="Students Learning" 
                            style={{ 
                                width: '100%', 
                                height: '250px', 
                                objectFit: 'cover',
                                borderRadius: '12px',
                                boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                            }}
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                        <Image 
                            src={abayudaya6} 
                            alt="Educational Programs" 
                            style={{ 
                                width: '100%', 
                                height: '250px', 
                                objectFit: 'cover',
                                borderRadius: '12px',
                                boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                            }}
                        />
                    </Grid.Col>
                </Grid>
            </motion.div>

            {/* Additional Information */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                style={{ marginBottom: '4rem' }}
            >
                <Grid gutter="lg">
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Card shadow="lg" padding="lg" radius="lg" style={{ 
                            backgroundColor: 'white',
                            border: '2px solid #e9ecef',
                            textAlign: 'center',
                            height: '100%'
                        }}>
                            <IconShieldCheck size={40} style={{ margin: '0 auto 1rem', display: 'block', color: '#1e3c72' }} />
                            <Title order={4} mb="xs" style={{ color: '#1e3c72', fontWeight: 600 }}>
                                Secure Donations
                            </Title>
                            <Text size="sm" style={{ color: '#495057', lineHeight: 1.6 }}>
                                All donations are processed securely through our trusted partners with SSL encryption and fraud protection.
                            </Text>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Card shadow="lg" padding="lg" radius="lg" style={{ 
                            backgroundColor: 'white',
                            border: '2px solid #e9ecef',
                            textAlign: 'center',
                            height: '100%'
                        }}>
                            <IconHeart size={40} style={{ margin: '0 auto 1rem', display: 'block', color: '#1e3c72' }} />
                            <Title order={4} mb="xs" style={{ color: '#1e3c72', fontWeight: 600 }}>
                                Direct Impact
                            </Title>
                            <Text size="sm" style={{ color: '#495057', lineHeight: 1.6 }}>
                                100% of your donation goes directly to supporting Jewish education in Uganda, with no administrative fees.
                            </Text>
                        </Card>
                    </Grid.Col>
                </Grid>
            </motion.div>

            {/* How to Donate Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                style={{ marginBottom: '4rem' }}
            >
                <Title order={2} mb="xl" style={{ color: '#1e3c72', textAlign: 'center', fontWeight: 700 }}>
                    Other Ways to Donate
                </Title>
                
                <Stack gap="xl">
                    {/* Check Donations */}
                    <Card shadow="lg" padding="xl" radius="lg" style={{ backgroundColor: 'white', border: '2px solid #e9ecef' }}>
                        <Title order={3} mb="lg" style={{ color: '#1e3c72', fontWeight: 600 }}>
                            Check Donations
                        </Title>
                        <Stack gap="md">
                            <Text style={{ lineHeight: 1.6, color: '#495057' }}>
                                <strong>Make checks payable to:</strong> Jewish Community Foundation of Greater Mercer
                            </Text>
                            <Text style={{ lineHeight: 1.6, color: '#495057' }}>
                                <strong>Important:</strong> Please indicate in a letter sent along with the check or in the check memo line that the monies are to be directed to <strong>The Friends of the Abayudaya Fund</strong> at the Jewish Community Foundation.
                            </Text>
                            <Card shadow="sm" padding="md" radius="md" style={{ backgroundColor: '#f8f9fa', border: '1px solid #e9ecef' }}>
                                <Text fw={600} mb="xs" style={{ color: '#1e3c72' }}>Mailing Address:</Text>
                                <Text style={{ color: '#495057' }}>Jewish Community Foundation of Greater Mercer</Text>
                                <Text style={{ color: '#495057' }}>457 Nassau Street, Suite 101</Text>
                                <Text style={{ color: '#495057' }}>Princeton, NJ 08540</Text>
                            </Card>
                        </Stack>
                    </Card>

                    {/* Wire Transfer */}
                    <Card shadow="lg" padding="xl" radius="lg" style={{ backgroundColor: 'white', border: '2px solid #e9ecef' }}>
                        <Title order={3} mb="lg" style={{ color: '#1e3c72', fontWeight: 600 }}>
                            Wire Transfer
                        </Title>
                        <Stack gap="md">
                            <Card shadow="sm" padding="md" radius="md" style={{ backgroundColor: '#f8f9fa', border: '1px solid #e9ecef' }}>
                                <Text fw={600} mb="xs" style={{ color: '#1e3c72' }}>Wire To:</Text>
                                <Text style={{ color: '#495057' }}>FRB ABA 021001088</Text>
                                <Text style={{ color: '#495057' }}>HSBC Bank USA, New York</Text>
                                <Text style={{ color: '#495057' }}>452 Fifth Avenue</Text>
                                <Text style={{ color: '#495057' }}>New York, NY 10018</Text>
                            </Card>
                            <Card shadow="sm" padding="md" radius="md" style={{ backgroundColor: '#f8f9fa', border: '1px solid #e9ecef' }}>
                                <Text fw={600} mb="xs" style={{ color: '#1e3c72' }}>For Credit:</Text>
                                <Text style={{ color: '#495057' }}>Account 000112046 (Incoming Wires)</Text>
                                <Text style={{ color: '#495057' }}>In Favor of: VIAS – IIS Operations</Text>
                                <Text style={{ color: '#495057' }}>Plan number: J**PO (Please contact JCFGM at 609-240-9511 for the full plan number)</Text>
                                <Text style={{ color: '#495057' }}>Plan name: Jewish Community Foundation Portfolio Account</Text>
                            </Card>
                            <Alert variant="light" color="blue" title="Important Notice" style={{ border: '1px solid #e9ecef' }}>
                                Please notify JCFGM at <strong>info@foundationjewish.org</strong> or <strong>609-240-9511</strong> about a forthcoming wire, and its designation to the Friends of the Abayudaya Fund.
                            </Alert>
                        </Stack>
                    </Card>

                    {/* Securities Transfer */}
                    <Card shadow="lg" padding="xl" radius="lg" style={{ backgroundColor: 'white', border: '2px solid #e9ecef' }}>
                        <Title order={3} mb="lg" style={{ color: '#1e3c72', fontWeight: 600 }}>
                            Transfer of Securities
                        </Title>
                        <Stack gap="md">
                            <Card shadow="sm" padding="md" radius="md" style={{ backgroundColor: '#f8f9fa', border: '1px solid #e9ecef' }}>
                                <Text fw={600} mb="xs" style={{ color: '#1e3c72' }}>Vanguard Brokerage Services (1-800-992-8327)</Text>
                                <Text style={{ color: '#495057' }}>DTC number: 0062</Text>
                                <Text style={{ color: '#495057' }}>Name of Account: Jewish Community Foundation of Greater Mercer</Text>
                                <Text style={{ color: '#495057' }}>Account number: 45433463</Text>
                            </Card>
                            <Alert variant="light" color="blue" title="Important Notice" style={{ border: '1px solid #e9ecef' }}>
                                Please notify JCFGM of your intent to donate securities. Because of privacy practices at brokerage firms, Vanguard is not able to identify the name of the individual making the transaction. Please contact <strong>info@foundationjewish.org</strong> or call <strong>609-240-9511</strong>. At that time, you can inform the Foundation staff that the stock transfer is for the Friends of the Abayudaya Fund.
                            </Alert>
                        </Stack>
                    </Card>

                    {/* Employer Matching */}
                    <Card shadow="lg" padding="xl" radius="lg" style={{ backgroundColor: 'white', border: '2px solid #e9ecef' }}>
                        <Title order={3} mb="lg" style={{ color: '#1e3c72', fontWeight: 600 }}>
                            Employer/Workplace Matching Gift Information
                        </Title>
                        <Stack gap="md">
                            <Text style={{ lineHeight: 1.6, color: '#495057' }}>
                                It is important to notify the Foundation staff of your intent to make a workplace/employer matching gift. If needed, the Jewish Community Foundation of Greater Mercer's Tax ID number is <strong>23-7174039</strong>.
                            </Text>
                            <Card shadow="sm" padding="md" radius="md" style={{ backgroundColor: '#f8f9fa', border: '1px solid #e9ecef' }}>
                                <Text fw={600} mb="xs" style={{ color: '#1e3c72' }}>Mailing Address:</Text>
                                <Text style={{ color: '#495057' }}>Jewish Community Foundation of Greater Mercer</Text>
                                <Text style={{ color: '#495057' }}>457 Nassau Street, Suite 101</Text>
                                <Text style={{ color: '#495057' }}>Princeton, NJ 08540</Text>
                            </Card>
                        </Stack>
                    </Card>

                    {/* Contact Information */}
                    <Card shadow="lg" padding="xl" radius="lg" style={{ 
                        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #4a90e2 100%)',
                        color: 'white',
                        border: 'none'
                    }}>
                        <Title order={3} mb="lg" style={{ color: 'white', textAlign: 'center', fontWeight: 600 }}>
                            Contact Information
                        </Title>
                        <Group color="white" gap="xl" wrap="wrap" justify="center">
                            <div style={{ color: 'white', textAlign: 'center' }}>
                                <Text color="white" fw={600} mb="xs">Phone:</Text>
                                <Text color="white">609-240-9511</Text>
                            </div>
                            <div style={{ color: 'white', textAlign: 'center' }}>
                                <Text color="white" fw={600} mb="xs">Email:</Text>
                                <Text color="white">info@foundationjewish.org</Text>
                            </div>
                            <div style={{ color: 'white', textAlign: 'center' }}>
                                <Text color="white" fw={600} mb="xs">Address:</Text>
                                <Text color="white">457 Nassau Street, Suite 101</Text>
                                <Text color="white">Princeton, NJ 08540</Text>
                            </div>
                        </Group>
                    </Card>
                </Stack>
            </motion.div>
        </Container>
    );
};

export default Donate;