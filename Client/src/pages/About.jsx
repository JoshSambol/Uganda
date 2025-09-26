import { Container, Title, Text, Button, Group, Stack, Card, Badge, Divider, Grid, Image, Box } from '@mantine/core';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { IconHeart, IconUsers, IconSchool, IconGlobe, IconHeartHandshake, IconStar, IconBook } from '@tabler/icons-react';
import abayudayaLogo from '../assets/Abayudaya Logo.png';
import abayudayaCommunity from '../assets/Abayudaya Community.avif';
import abayudayaIdentity from '../assets/Abayudaya Identity.avif';
import abayudayaSchool from '../assets/Abayudaya School pic.avif';
import abayudayaSchool1 from '../assets/Abayudaya school pic1.avif';
import abayudayaTemple from '../assets/Abayudaya Temple.avif';
import abayudaya7 from '../assets/abayudaya7.avif';
import abayudaya8 from '../assets/abayudaya8.avif';
import abayudaya5 from '../assets/abayudaya5.avif';

const About = () => {
    const navigate = useNavigate();

    return (
        <Container className='about-container' size="xl" style={{ paddingTop: '100px', paddingBottom: '4rem', minWidth: '100vw', background: 'white' }}>
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
                    About Our Mission
                </Title>
                <Text size="xl" style={{ maxWidth: '800px', margin: '0 auto', color: '#495057', lineHeight: 1.6 }}>
                    We are dedicated to supporting the vibrant Jewish community of Uganda through education, 
                    cultural preservation, and sustainable development initiatives.
                </Text>
            </motion.div>

            {/* Mission Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ marginBottom: '4rem' }}
            >
                <Grid gutter="xl" align="center">
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Card shadow="lg" padding="xl" radius="lg" style={{ backgroundColor: '#f8f9fa', border: '2px solid #e9ecef' }}>
                            <Title order={2} mb="lg" style={{ color: '#1e3c72', fontWeight: 700 }}>
                                Our Mission
                            </Title>
                            <Text size="lg" mb="md" style={{ lineHeight: 1.6, color: '#495057' }}>
                                The Friends of the Abayudaya Fund is dedicated to supporting the vibrant Jewish community of Uganda. 
                                We achieve this vital role by creating awareness of their community and engaging others who share our 
                                passion to make a transformational impact on the lives of our fellow Jews.
                            </Text>
                            <Text size="md" c="dimmed" style={{ lineHeight: 1.6 }}>
                                This fund was established by Michael and Lori Feldstein through the Jewish Community Foundation of Greater Mercer, 
                                with direct and personal connections to the Abayudaya Jewish community of Uganda.
                            </Text>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Image 
                            src={abayudayaCommunity} 
                            alt="Abayudaya Community" 
                            style={{ 
                                width: '100%', 
                                height: '400px', 
                                objectFit: 'cover',
                                borderRadius: '12px',
                                boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                            }}
                        />
                    </Grid.Col>
                </Grid>
            </motion.div>

            {/* Community Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ marginBottom: '4rem' }}
            >
                <Title order={2} mb="lg" style={{ color: '#1e3c72', textAlign: 'center', fontWeight: 700 }}>
                    Meet the Jewish Community of Uganda
                </Title>
                
                <Grid gutter="xl">
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Card shadow="lg" padding="xl" radius="lg" style={{ backgroundColor: 'white', border: '2px solid #e9ecef', height: '100%' }}>
                            <Title order={3} mb="md" style={{ color: '#1e3c72', fontWeight: 600 }}>
                                The Abayudaya - "People of Judah"
                            </Title>
                            <Text mb="md" style={{ lineHeight: 1.6, color: '#495057' }}>
                                Founded in 1919 by visionary leader Semei Kakungulu, the Abayudaya—meaning "People of Judah" in Luganda—are 
                                Uganda's vibrant Jewish community. Inspired by the Hebrew Bible, Kakungulu established a community deeply 
                                rooted in Jewish faith and traditions.
                            </Text>
                            <Text c="dimmed" style={{ lineHeight: 1.6 }}>
                                Despite facing oppression under Idi Amin's regime in the 1970s, when Judaism was banned, the community 
                                courageously rebuilt, preserving its faith and identity for future generations.
                            </Text>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Image 
                            src={abayudayaIdentity} 
                            alt="Abayudaya Identity" 
                            style={{ 
                                width: '100%', 
                                height: '300px', 
                                objectFit: 'cover',
                                borderRadius: '12px',
                                boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                            }}
                        />
                    </Grid.Col>
                </Grid>

                <Grid gutter="xl" mt="xl">
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Image 
                            src={abayudayaTemple} 
                            alt="Abayudaya Temple" 
                            style={{ 
                                width: '100%', 
                                height: '300px', 
                                objectFit: 'cover',
                                borderRadius: '12px',
                                boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                            }}
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Card shadow="lg" padding="xl" radius="lg" style={{ backgroundColor: 'white', border: '2px solid #e9ecef', height: '100%' }}>
                            <Title order={3} mb="md" style={{ color: '#1e3c72', fontWeight: 600 }}>
                                A Unique Blend of Traditions
                            </Title>
                            <Text mb="md" style={{ lineHeight: 1.6, color: '#495057' }}>
                                The Abayudaya community embodies a remarkable blend of traditional Jewish practices and vibrant Ugandan culture, 
                                creating a distinct and deeply meaningful way of life.
                            </Text>
                            <Group gap="md" wrap="wrap">
                                <Badge size="lg" variant="light" style={{ backgroundColor: '#e3f2fd', color: '#1e3c72', border: '1px solid #bbdefb' }}>
                                    Hebrew, English & Luganda Services
                                </Badge>
                                <Badge size="lg" variant="light" style={{ backgroundColor: '#e3f2fd', color: '#1e3c72', border: '1px solid #bbdefb' }}>
                                    Ugandan Melodies in Prayer
                                </Badge>
                                <Badge size="lg" variant="light" style={{ backgroundColor: '#e3f2fd', color: '#1e3c72', border: '1px solid #bbdefb' }}>
                                    Kosher Local Cuisine
                                </Badge>
                            </Group>
                        </Card>
                    </Grid.Col>
                </Grid>
            </motion.div>

            {/* Education Crisis Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{ marginBottom: '4rem' }}
            >
                <Grid gutter="xl" align="center">
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Card shadow="lg" padding="xl" radius="lg" style={{ 
                            background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #4a90e2 100%)',
                            color: 'white',
                            border: 'none'
                        }}>
                            <Title order={2} mb="lg" style={{ color: 'white', fontWeight: 700 }}>
                                Educational Crisis
                            </Title>
                            <Text color="white" size="lg" mb="md" style={{ lineHeight: 1.6 }}>
                                <strong>Hadassah Primary School and Semei Kakungulu High School urgently require sustainable funding to remain open.</strong>
                            </Text>
                            <Text color="white" mb="lg" style={{ lineHeight: 1.6 }}>
                                These schools are crucial for sustaining the community's Jewish traditions and education. They provide comprehensive 
                                education in both secular and Jewish subjects, open to students of all faiths, fostering mutual respect and tolerance.
                            </Text>
                            <Button 
                                size="lg" 
                                variant="filled" 
                                onClick={() => navigate('/donate')}
                                style={{ 
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                                    border: '2px solid white',
                                    color: 'white',
                                    fontWeight: 600
                                }}
                                leftSection={<IconSchool size={20} />}
                            >
                                Donate Now to Keep Jewish Education Alive
                            </Button>
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

            {/* Image Gallery Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                style={{ marginBottom: '4rem' }}
            >
                <Title order={2} mb="lg" style={{ color: '#1e3c72', textAlign: 'center', fontWeight: 700 }}>
                    Community Life
                </Title>
                <Grid gutter="md">
                    <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                        <Image 
                            src={abayudaya7} 
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
                            src={abayudaya8} 
                            alt="Community Activities" 
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
                            alt="Learning Together" 
                            style={{ 
                                width: '100%', 
                                height: '250px', 
                                objectFit: 'cover',
                                objectPosition: 'center',
                                borderRadius: '12px',
                                boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                            }}
                        />
                    </Grid.Col>
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
                    <IconHeartHandshake size={60} style={{ margin: '0 auto 1rem', display: 'block', color: '#1e3c72' }} />
                    <Title order={2} mb="md" style={{ color: '#1e3c72', fontWeight: 700 }}>
                        Join Us in Making a Difference
                    </Title>
                    <Text size="lg" mb="xl" style={{ maxWidth: '600px', margin: '0 auto', lineHeight: 1.6, color: '#495057' }}>
                        Your support can make an impact that will last for generations to come. 
                        Together, we can transform the lives of the Jewish people of Uganda.
                    </Text>
                    <Group justify="center" gap="md">
                        <Button 
                            size="lg" 
                            variant="filled" 
                            onClick={() => navigate('/donate')}
                            style={{ backgroundColor: '#1e3c72', fontWeight: 600 }}
                            leftSection={<IconHeart size={20} />}
                        >
                            Donate Now
                        </Button>
                        <Button 
                            size="lg" 
                            variant="outline" 
                            onClick={() => navigate('/contact')}
                            style={{ borderColor: '#1e3c72', color: '#1e3c72', fontWeight: 600 }}
                        >
                            Contact Us
                        </Button>
                    </Group>
                </Card>
            </motion.div>
        </Container>
    );
};

export default About;