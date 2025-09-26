import { Container, Title, Text, Button, Group, Stack, Card, Badge, Divider, TextInput, Textarea, Accordion, Image, Grid, Box } from '@mantine/core';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { IconMail, IconPhone, IconMapPin, IconClock, IconHeart, IconUsers, IconSchool, IconGlobe, IconMessageCircle, IconQuestionMark, IconStar } from '@tabler/icons-react';
import abayudayaLogo from '../assets/Abayudaya Logo.png';
import abayudayaCommunity from '../assets/Abayudaya Community.avif';
import abayudayaIdentity from '../assets/Abayudaya Identity.avif';
import abayudayaLearning from '../assets/Abayudaya Learning.avif';
import abayudayaSchool from '../assets/Abayudaya School pic.avif';
import abayudayaSchool1 from '../assets/Abayudaya school pic1.avif';
import abayudayaTemple from '../assets/Abayudaya Temple.avif';
import abayudaya1 from '../assets/Abayudaya1.avif';
import abayudaya2 from '../assets/abayudaya2.avif';
import abayudaya3 from '../assets/abayudaya3.avif';
import abayudaya4 from '../assets/abayudaya4.avif';
import abayudaya5 from '../assets/abayudaya5.avif';
import abayudaya6 from '../assets/abayudaya 6.avif';
import abayudaya7 from '../assets/abayudaya7.avif';
import abayudaya8 from '../assets/abayudaya8.avif';


const Contact = () => {
    const navigate = useNavigate();

    const faqData = [
        {
            value: 'faq1',
            label: 'How can I make a donation?',
            content: 'You can donate online through our secure donation portal, send a check to our mailing address, or contact us for wire transfer information. All donations are tax-deductible and go directly to supporting Jewish education in Uganda.'
        },
        {
            value: 'faq2',
            label: 'Where does my donation go?',
            content: '100% of your donation goes directly to supporting Hadassah Primary School and Semei Kakungulu High School in Uganda. These funds help maintain facilities, provide educational materials, and support teachers and students.'
        },
        {
            value: 'faq3',
            label: 'Is my donation tax-deductible?',
            content: 'Yes, all donations to the Friends of the Abayudaya Fund are tax-deductible. The Jewish Community Foundation of Greater Mercer is a 501(c)(3) organization, and you will receive a receipt for your donation.'
        },
        {
            value: 'faq4',
            label: 'Can I visit the schools in Uganda?',
            content: 'Yes! We encourage supporters to visit and see the impact of their donations firsthand. Please contact us to arrange a visit and learn more about the community and educational programs.'
        },
        {
            value: 'faq5',
            label: 'How can I get involved beyond donating?',
            content: 'There are many ways to get involved: volunteer your time, help spread awareness about our mission, organize fundraising events, or connect us with other potential supporters. Contact us to discuss opportunities.'
        },
        {
            value: 'faq6',
            label: 'What is the history of the Abayudaya community?',
            content: 'The Abayudaya community was founded in 1919 by Semei Kakungulu, who was inspired by the Hebrew Bible. Despite facing persecution under Idi Amin\'s regime, the community has maintained its Jewish identity and traditions for over 100 years.'
        }
    ];

    return (
        <Container className='contact-container' size="xl" style={{ paddingTop: '100px', paddingBottom: '4rem', minWidth: '100vw', background: 'white' }}>
            
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
                    Get in Touch
                </Title>
                <Text size="xl" style={{ maxWidth: '800px', margin: '0 auto', color: '#495057', lineHeight: 1.6 }}>
                    Connect with us to learn more about supporting the vibrant Jewish community of Uganda
                </Text>
            </motion.div>



            {/* Contact Information */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ marginBottom: '4rem' }}
            >
                <Title order={2} mb="lg" style={{ color: '#1e3c72', textAlign: 'center', fontWeight: 700 }}>
                    How to Reach Us
                </Title>
                
                <Grid gutter="xl">
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Card shadow="lg" padding="xl" radius="lg" style={{ backgroundColor: '#f8f9fa', border: '2px solid #e9ecef', height: '100%' }}>
                            <Stack gap="lg">
                                <Group>
                                    <IconMail size={30} style={{ color: '#1e3c72' }} />
                                    <Box>
                                        <Text fw={600} size="lg" style={{ color: '#1e3c72' }}>Email</Text>
                                        <Text style={{ color: '#495057' }}>info@foundationjewish.org</Text>
                                    </Box>
                                </Group>
                                <Group>
                                    <IconPhone size={30} style={{ color: '#1e3c72' }} />
                                    <Box>
                                        <Text fw={600} size="lg" style={{ color: '#1e3c72' }}>Phone</Text>
                                        <Text style={{ color: '#495057' }}>609-240-9511</Text>
                                    </Box>
                                </Group>
                                <Group>
                                    <IconMapPin size={30} style={{ color: '#1e3c72' }} />
                                    <Box>
                                        <Text fw={600} size="lg" style={{ color: '#1e3c72' }}>Address</Text>
                                        <Text style={{ color: '#495057' }}>457 Nassau Street, Suite 101, Princeton, NJ 08540</Text>
                                    </Box>
                                </Group>
                                <Group>
                                    <IconClock size={30} style={{ color: '#1e3c72' }} />
                                    <Box>
                                        <Text fw={600} size="lg" style={{ color: '#1e3c72' }}>Office Hours</Text>
                                        <Text style={{ color: '#495057' }}>Monday - Friday: 9:00 AM - 5:00 PM EST</Text>
                                    </Box>
                                </Group>
                            </Stack>
                        </Card>
                    </Grid.Col>
                    
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Card shadow="lg" padding="xl" radius="lg" style={{ backgroundColor: 'white', border: '2px solid #e9ecef', height: '100%' }}>
                            <Title order={3} mb="lg" style={{ color: '#1e3c72', fontWeight: 600 }}>
                                Send us a Message
                            </Title>
                            <Stack gap="md">
                                <TextInput
                                    placeholder="Your Name"
                                    label="Name"
                                    required
                                    styles={{ 
                                        input: { borderColor: '#1e3c72' },
                                        label: { color: '#1e3c72', fontWeight: 600 }
                                    }}
                                />
                                <TextInput
                                    placeholder="your.email@example.com"
                                    label="Email"
                                    type="email"
                                    required
                                    styles={{ 
                                        input: { borderColor: '#1e3c72' },
                                        label: { color: '#1e3c72', fontWeight: 600 }
                                    }}
                                />
                                <TextInput
                                    placeholder="Subject"
                                    label="Subject"
                                    required
                                    styles={{ 
                                        input: { borderColor: '#1e3c72' },
                                        label: { color: '#1e3c72', fontWeight: 600 }
                                    }}
                                />
                                <Textarea
                                    placeholder="Tell us how we can help you..."
                                    label="Message"
                                    rows={4}
                                    required
                                    styles={{ 
                                        input: { borderColor: '#1e3c72' },
                                        label: { color: '#1e3c72', fontWeight: 600 }
                                    }}
                                />
                                <Button 
                                    size="lg" 
                                    variant="filled" 
                                    style={{ backgroundColor: '#1e3c72', border: 'none', fontWeight: 600 }}
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
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ marginBottom: '4rem' }}
            >
                <Title order={2} mb="lg" style={{ color: '#1e3c72', textAlign: 'center', fontWeight: 700 }}>
                    Frequently Asked Questions
                </Title>
                
                <Card shadow="lg" padding="xl" radius="lg" style={{ backgroundColor: 'white', border: '2px solid #e9ecef' }}>
                    <Accordion variant="separated" radius="md">
                        {faqData.map((item) => (
                            <Accordion.Item key={item.value} value={item.value}>
                                <Accordion.Control 
                                    style={{ 
                                        backgroundColor: '#f8f9fa', 
                                        border: '1px solid #e9ecef',
                                        borderRadius: '8px',
                                        marginBottom: '8px'
                                    }}
                                >
                                    <Group>
                                        <IconQuestionMark size={20} style={{ color: '#1e3c72' }} />
                                        <Text fw={600} style={{ color: '#1e3c72' }}>
                                            {item.label}
                                        </Text>
                                    </Group>
                                </Accordion.Control>
                                <Accordion.Panel style={{ padding: '1rem', backgroundColor: 'white' }}>
                                    <Text style={{ color: '#495057', lineHeight: 1.6 }}>
                                        {item.content}
                                    </Text>
                                </Accordion.Panel>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </Card>
            </motion.div>

            {/* Image Gallery Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{ marginBottom: '4rem' }}
            >
                <Title order={2} mb="lg" style={{ color: '#1e3c72', textAlign: 'center', fontWeight: 700 }}>
                    Our Community in Action
                </Title>
                <Grid gutter="md">
                    <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                        <Image 
                            src={abayudaya1} 
                            alt="Community Life" 
                            style={{ 
                                width: '100%', 
                                height: '200px', 
                                objectFit: 'cover',
                                borderRadius: '12px',
                                boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                            }}
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                        <Image 
                            src={abayudaya2} 
                            alt="Students Learning" 
                            style={{ 
                                width: '100%', 
                                height: '200px', 
                                objectFit: 'cover',
                                borderRadius: '12px',
                                boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                            }}
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                        <Image 
                            src={abayudaya3} 
                            alt="Community Activities" 
                            style={{ 
                                width: '100%', 
                                height: '200px', 
                                objectFit: 'cover',
                                borderRadius: '12px',
                                boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                            }}
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                        <Image 
                            src={abayudaya4} 
                            alt="Educational Programs" 
                            style={{ 
                                width: '100%', 
                                height: '200px', 
                                objectFit: 'cover',
                                borderRadius: '12px',
                                boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                            }}
                        />
                    </Grid.Col>
                </Grid>
            </motion.div>

            {/* Supporting Organizations */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                style={{ marginBottom: '4rem' }}
            >
                <Title order={2} mb="lg" style={{ color: '#1e3c72', textAlign: 'center', fontWeight: 700 }}>
                    Our Supporting Partners
                </Title>
                <Grid gutter="lg">
                    {[
                        'Jewish Federation of Princeton Mercer Bucks',
                        'Buffalo Jewish Federation', 
                        'Federation of Jewish Men\'s Clubs',
                        'The Jewish Center of Princeton'
                    ].map((org, index) => (
                        <Grid.Col key={index} span={{ base: 12, sm: 6, md: 3 }}>
                            <Card shadow="lg" padding="lg" radius="lg" style={{ 
                                backgroundColor: 'white',
                                border: '2px solid #e9ecef',
                                textAlign: 'center',
                                height: '100%'
                            }}>
                                <IconStar size={40} style={{ margin: '0 auto 1rem', display: 'block', color: '#1e3c72' }} />
                                <Text fw={600} style={{ color: '#1e3c72', lineHeight: 1.4 }}>
                                    {org}
                                </Text>
                            </Card>
                        </Grid.Col>
                    ))}
                </Grid>
            </motion.div>

            {/* Call to Action */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                style={{ textAlign: 'center' }}
            >
                <Card shadow="lg" padding="xl" radius="lg" style={{ 
                    backgroundColor: '#f8f9fa', 
                    border: '2px solid #e9ecef',
                    maxWidth: '800px',
                    margin: '0 auto'
                }}>
                    <IconHeart size={60} style={{ margin: '0 auto 1rem', display: 'block', color: '#1e3c72' }} />
                    <Title order={2} mb="md" style={{ color: '#1e3c72', fontWeight: 700 }}>
                        Ready to Make a Difference?
                    </Title>
                    <Text size="lg" mb="xl" style={{ maxWidth: '600px', margin: '0 auto', lineHeight: 1.6, color: '#495057' }}>
                        Your support can transform the lives of the Jewish people of Uganda. 
                        Join us in preserving their rich cultural heritage and ensuring a bright future for generations to come.
                    </Text>
                    <Group justify="center" gap="md">
                        <Button 
                            size="lg" 
                            variant="filled" 
                            onClick={() => navigate('/donate')}
                            style={{ backgroundColor: '#1e3c72', border: 'none', fontWeight: 600 }}
                            leftSection={<IconHeart size={20} />}
                        >
                            Donate Now
                        </Button>
                        <Button 
                            size="lg" 
                            variant="outline" 
                            onClick={() => navigate('/about')}
                            style={{ borderColor: '#1e3c72', color: '#1e3c72', fontWeight: 600 }}
                        >
                            Learn More
                        </Button>
                    </Group>
                </Card>
            </motion.div>
        </Container>
    );
};

export default Contact;
