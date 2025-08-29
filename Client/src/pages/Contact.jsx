import { Container, Title, Text, Button, Group, Stack, Card, Badge, Divider, TextInput, Textarea, Accordion, Image, Grid, Box } from '@mantine/core';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { IconMail, IconPhone, IconMapPin, IconClock, IconHeart, IconUsers, IconSchool, IconGlobe, IconMessageCircle, IconQuestionMark } from '@tabler/icons-react';


const Contact = () => {
    const navigate = useNavigate();

    const faqData = [
        {
            value: 'faq1',
            label: '',
            content: ''
        },
        {
            value: 'faq2',
            label: '',
            content: ''
        },
        {
            value: 'faq3',
            label: '',
            content: ''
        },
        {
            value: 'faq4',
            label: '',
            content: ''
        },
        {
            value: 'faq5',
            label: '',
            content: ''
        },
        {
            value: 'faq6',
            label: '',
            content: ''
        }
    ];

    return (
        <Container className='contact-container' size="lg" style={{ paddingLeft: '20rem', paddingRight: '20rem', paddingTop: '100px', paddingBottom: '4rem', minWidth: '100vw', background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 25%, #FFD23F 50%, #06FFA5 75%, #00D4FF 100%)' }}>
            
            {/* Hero Section with Abayudaya Pictures */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ textAlign: 'center', marginBottom: '4rem' }}
            >
                <Title size="3.5rem" mb="md" style={{ color: '#1e3c72', fontWeight: 700, textShadow: '2px 2px 4px rgba(255,255,255,0.8)' }}>
                    Get in Touch
                </Title>
                <Text size="xl" style={{ maxWidth: '800px', margin: '0 auto', color: '#1e3c72', fontWeight: 600, textShadow: '1px 1px 2px rgba(255,255,255,0.6)' }}>
                    Connect with us to learn more about supporting the vibrant Jewish community of Uganda
                </Text>
            </motion.div>



            {/* Contact Information */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ marginBottom: '4rem' }}
            >
                <Title order={2} mb="lg" style={{ color: '#1e3c72', textAlign: 'center', textShadow: '1px 1px 2px rgba(255,255,255,0.6)' }}>
                    How to Reach Us
                </Title>
                
                <Grid gutter="lg">
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Card shadow="lg" padding="xl" radius="lg" style={{ backgroundColor: 'rgba(255,255,255,0.9)', border: '3px solid #00D4FF', height: '100%' }}>
                            <Stack gap="lg">
                                <Group>
                                    <IconMail size={30} style={{ color: '#FF6B35' }} />
                                    <Box>
                                        <Text fw={600} size="lg" style={{ color: '#1e3c72' }}>Email</Text>
                                        <Text>info@foundationjewish.org</Text>
                                    </Box>
                                </Group>
                                <Group>
                                    <IconPhone size={30} style={{ color: '#F7931E' }} />
                                    <Box>
                                        <Text fw={600} size="lg" style={{ color: '#1e3c72' }}>Phone</Text>
                                        <Text>609-240-9511</Text>
                                    </Box>
                                </Group>
                                <Group>
                                    <IconMapPin size={30} style={{ color: '#06FFA5' }} />
                                    <Box>
                                        <Text fw={600} size="lg" style={{ color: '#1e3c72' }}>Address</Text>
                                        <Text>457 Nassau Street, Suite 101, Princeton, NJ 08540</Text>
                                    </Box>
                                </Group>
                                <Group>
                                    <IconClock size={30} style={{ color: '#00D4FF' }} />
                                    <Box>
                                        <Text fw={600} size="lg" style={{ color: '#1e3c72' }}>Office Hours</Text>
                                        <Text>Monday - Friday: 9:00 AM - 5:00 PM EST</Text>
                                    </Box>
                                </Group>
                            </Stack>
                        </Card>
                    </Grid.Col>
                    
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Card shadow="lg" padding="xl" radius="lg" style={{ backgroundColor: 'rgba(255,255,255,0.9)', border: '3px solid #FFD23F', height: '100%' }}>
                            <Title order={3} mb="lg" style={{ color: '#1e3c72' }}>
                                Send us a Message
                            </Title>
                            <Stack gap="md">
                                <TextInput
                                    placeholder="Your Name"
                                    label="Name"
                                    required
                                    styles={{ input: { borderColor: '#FF6B35' } }}
                                />
                                <TextInput
                                    placeholder="your.email@example.com"
                                    label="Email"
                                    type="email"
                                    required
                                    styles={{ input: { borderColor: '#F7931E' } }}
                                />
                                <TextInput
                                    placeholder="Subject"
                                    label="Subject"
                                    required
                                    styles={{ input: { borderColor: '#06FFA5' } }}
                                />
                                <Textarea
                                    placeholder="Tell us how we can help you..."
                                    label="Message"
                                    rows={4}
                                    required
                                    styles={{ input: { borderColor: '#00D4FF' } }}
                                />
                                <Button 
                                    size="lg" 
                                    variant="filled" 
                                    style={{ backgroundColor: '#FF6B35', border: 'none' }}
                                    leftSection={<IconMessageCircle size={20} />}
                                >
                                    Send Message
                                </Button>
                            </Stack>
                        </Card>
                    </Grid.Col>
                </Grid>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{ marginBottom: '4rem' }}
            >
                <Title order={2} mb="lg" style={{ color: '#1e3c72', textAlign: 'center', textShadow: '1px 1px 2px rgba(255,255,255,0.6)' }}>
                    Frequently Asked Questions
                </Title>
                
                <Card shadow="lg" padding="xl" radius="lg" style={{ backgroundColor: 'rgba(255,255,255,0.9)', border: '3px solid #FF6B35' }}>
                    <Accordion variant="separated" radius="md">
                        {faqData.map((item) => (
                            <Accordion.Item key={item.value} value={item.value}>
                                <Accordion.Control 
                                    style={{ 
                                        backgroundColor: 'rgba(255,107,53,0.1)', 
                                        border: '2px solid #FF6B35',
                                        borderRadius: '8px',
                                        marginBottom: '8px'
                                    }}
                                >
                                    <Group>
                                        <IconQuestionMark size={20} style={{ color: '#FF6B35' }} />
                                        <Text fw={600} style={{ color: '#1e3c72' }}>
                                            {item.label}
                                        </Text>
                                    </Group>
                                </Accordion.Control>
                                <Accordion.Panel style={{ padding: '1rem', backgroundColor: 'rgba(255,255,255,0.8)' }}>
                                    <Text style={{ color: '#1e3c72', lineHeight: 1.6 }}>
                                        {item.content}
                                    </Text>
                                </Accordion.Panel>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </Card>
            </motion.div>

            {/* Supporting Organizations */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                style={{ marginBottom: '4rem' }}
            >
                <Title order={2} mb="lg" style={{ color: '#1e3c72', textAlign: 'center', textShadow: '1px 1px 2px rgba(255,255,255,0.6)' }}>
                    Our Supporting Partners
                </Title>
                <Group justify="center" gap="lg" wrap="wrap">
                    {[
                        'Jewish Federation of Princeton Mercer Bucks',
                        'Buffalo Jewish Federation', 
                        'Federation of Jewish Men\'s Clubs',
                        'The Jewish Center of Princeton'
                    ].map((org, index) => (
                        <Card key={index} shadow="lg" padding="md" radius="lg" style={{ 
                            backgroundColor: 'rgba(255,255,255,0.9)',
                            minWidth: '250px',
                            textAlign: 'center',
                            border: `3px solid ${['#FF6B35', '#F7931E', '#06FFA5', '#00D4FF'][index % 4]}`
                        }}>
                            <Text fw={600} style={{ color: '#1e3c72' }}>
                                {org}
                            </Text>
                        </Card>
                    ))}
                </Group>
            </motion.div>

            {/* Call to Action */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                style={{ textAlign: 'center' }}
            >
                <Card shadow="lg" padding="xl" radius="lg" style={{ backgroundColor: 'rgba(255,255,255,0.9)', border: '3px solid #FF6B35' }}>
                    <IconHeart size={60} style={{ margin: '0 auto 1rem', display: 'block', color: '#FF6B35' }} />
                    <Title order={2} mb="md" style={{ color: '#1e3c72' }}>
                        Ready to Make a Difference?
                    </Title>
                    <Text size="lg" mb="xl" style={{ maxWidth: '600px', margin: '0 auto', color: '#1e3c72' }}>
                        Your support can transform the lives of the Jewish people of Uganda. 
                        Join us in preserving their rich cultural heritage and ensuring a bright future for generations to come.
                    </Text>
                    <Group justify="center" gap="md">
                        <Button 
                            size="lg" 
                            variant="filled" 
                            onClick={() => navigate('/donate')}
                            style={{ backgroundColor: '#FF6B35', border: 'none' }}
                        >
                            Donate Now
                        </Button>
                        <Button 
                            size="lg" 
                            variant="outline" 
                            onClick={() => navigate('/about')}
                            style={{ borderColor: '#1e3c72', color: '#1e3c72' }}
                        >
                            Learn More
                        </Button>
                    </Group>
                </Card>
            </motion.div>

            <style jsx>{`
                .contact-container {
                    padding-left: 1rem !important;
                    padding-right: 1rem !important;
                }

                @media (min-width: 768px) {
                    .contact-container {
                        padding-left: 20rem !important;
                        padding-right: 20rem !important;
                    }
                }
            `}</style>
        </Container>
    );
};

export default Contact;
