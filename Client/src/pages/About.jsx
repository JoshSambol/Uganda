import { Container, Title, Text, Button, Group, Stack, Card, Badge, Divider } from '@mantine/core';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { IconHeart, IconUsers, IconSchool, IconGlobe, IconHeartHandshake } from '@tabler/icons-react';

const About = () => {
    const navigate = useNavigate();

    return (
        <Container className='about-container' size="lg" style={{ paddingLeft: '20rem', paddingRight: '20rem', paddingTop: '100px', paddingBottom: '4rem', minWidth: '100vw', background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 25%, #FFD23F 50%, #06FFA5 75%, #00D4FF 100%)' }}>
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ textAlign: 'center', marginBottom: '4rem' }}
            >
                <Title size="3rem" mb="md" style={{ color: '#1e3c72', fontWeight: 700, textShadow: '2px 2px 4px rgba(255,255,255,0.8)' }}>
                    Who we are
                </Title>
                <Text size="xl" style={{ maxWidth: '800px', margin: '0 auto', color: '#666' }}>
                    We are a group of people who are passionate about supporting the vibrant Jewish community of Uganda through education, cultural preservation, and sustainable development.
                </Text>
            </motion.div>

            {/* Mission Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ marginBottom: '4rem' }}
            >
                <Card shadow="sm" padding="xl" radius="md" style={{ backgroundColor: '#f8f9fa' }}>
                    <Title order={2} mb="lg" style={{ color: '#1e3c72' }}>
                        Our Mission
                    </Title>
                    <Text size="lg" mb="md">
                        The Friends of the Abayudaya Fund is dedicated to supporting the vibrant Jewish community of Uganda. 
                        We achieve this vital role by creating awareness of their community and engaging others who share our 
                        passion to make a transformational impact on the lives of our fellow Jews.
                    </Text>
                    <Text size="md" c="dimmed">
                        This fund was established by Michael and Lori Feldstein through the Jewish Community Foundation of Greater Mercer, 
                        with direct and personal connections to the Abayudaya Jewish community of Uganda.
                    </Text>
                </Card>
            </motion.div>

            {/* Community Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ marginBottom: '4rem' }}
            >
                <Title order={2} mb="lg" style={{ color: '#1e3c72', textAlign: 'center', textShadow: '1px 1px 2px rgba(255,255,255,0.6)' }}>
                    Meet the Jewish Community of Uganda
                </Title>
                
                <Stack gap="lg">
                    <Card shadow="sm" padding="lg" radius="md">
                        <Title order={3} mb="md" style={{ color: '#1e3c72' }}>
                            The Abayudaya - "People of Judah"
                        </Title>
                        <Text mb="md">
                            Founded in 1919 by visionary leader Semei Kakungulu, the Abayudaya—meaning "People of Judah" in Luganda—are 
                            Uganda's vibrant Jewish community. Inspired by the Hebrew Bible, Kakungulu established a community deeply 
                            rooted in Jewish faith and traditions.
                        </Text>
                        <Text c="dimmed">
                            Despite facing oppression under Idi Amin's regime in the 1970s, when Judaism was banned, the community 
                            courageously rebuilt, preserving its faith and identity for future generations.
                        </Text>
                    </Card>

                    <Card shadow="sm" padding="lg" radius="md">
                        <Title order={3} mb="md" style={{ color: '#1e3c72' }}>
                            A Unique Blend of Traditions
                        </Title>
                        <Text mb="md">
                            The Abayudaya community embodies a remarkable blend of traditional Jewish practices and vibrant Ugandan culture, 
                            creating a distinct and deeply meaningful way of life.
                        </Text>
                        <Group gap="md" wrap="wrap">
                            <Badge size="lg" variant="light" style={{ backgroundColor: '#e3f2fd', color: '#1e3c72' }}>
                                Hebrew, English & Luganda Services
                            </Badge>
                            <Badge size="lg" variant="light" style={{ backgroundColor: '#e3f2fd', color: '#1e3c72' }}>
                                Ugandan Melodies in Prayer
                            </Badge>
                            <Badge size="lg" variant="light" style={{ backgroundColor: '#e3f2fd', color: '#1e3c72' }}>
                                Kosher Local Cuisine
                            </Badge>
                        </Group>
                    </Card>
                </Stack>
            </motion.div>

            {/* Education Crisis Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{ marginBottom: '4rem' }}
            >
                <Card shadow="sm" padding="xl" radius="md" style={{ 
                    background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #4a90e2 100%)',
                    color: 'white'
                }}>
                    <Title order={2} mb="lg" style={{ color: 'white' }}>
                        Educational Crisis
                    </Title>
                    <Text size="lg" mb="md">
                        <strong>Hadassah Primary School and Semei Kakungulu High School urgently require sustainable funding to remain open.</strong>
                    </Text>
                    <Text mb="lg">
                        These schools are crucial for sustaining the community's Jewish traditions and education. They provide comprehensive 
                        education in both secular and Jewish subjects, open to students of all faiths, fostering mutual respect and tolerance.
                    </Text>
                    <Button 
                        size="lg" 
                        variant="filled" 
                        onClick={() => navigate('/donate')}
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', border: '2px solid white' }}
                    >
                        Donate Now to Keep Jewish Education Alive
                    </Button>
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
                        <Card key={index} shadow="sm" padding="md" radius="md" style={{ 
                            backgroundColor: '#f8f9fa',
                            minWidth: '250px',
                            textAlign: 'center'
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
                <Card shadow="sm" padding="xl" radius="md" style={{ backgroundColor: '#f8f9fa' }}>
                    <IconHeartHandshake size={60} style={{ margin: '0 auto 1rem', display: 'block', color: '#1e3c72' }} />
                    <Title order={2} mb="md" style={{ color: '#1e3c72' }}>
                        Join Us in Making a Difference
                    </Title>
                    <Text size="lg" mb="xl" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        Your support can make an impact that will last for generations to come. 
                        Together, we can transform the lives of the Jewish people of Uganda.
                    </Text>
                    <Group justify="center" gap="md">
                        <Button 
                            size="lg" 
                            variant="filled" 
                            onClick={() => navigate('/donate')}
                            style={{ backgroundColor: '#1e3c72' }}
                        >
                            Donate Now
                        </Button>
                        <Button 
                            size="lg" 
                            variant="outline" 
                            onClick={() => navigate('/contact')}
                            style={{ borderColor: '#1e3c72', color: '#1e3c72' }}
                        >
                            Contact Us
                        </Button>
                    </Group>
                </Card>
            </motion.div>
            <style jsx>{`
                .about-container {
                    padding-left: 1rem !important;
                    padding-right: 1rem !important;
                }

                @media (min-width: 768px) {
                    .about-container {
                        padding-left: 20rem !important;
                        padding-right: 20rem !important;
                    }
                }
            `}</style>
        </Container>
    );
};

export default About;