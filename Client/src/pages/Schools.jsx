import { Container, Title, Text, Button, Group, Stack, Card, Badge, Divider, Grid, Image, Box, List } from '@mantine/core';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { IconHeart, IconUsers, IconSchool, IconGlobe, IconHeartHandshake, IconStar, IconBook, IconAlertTriangle, IconCheck } from '@tabler/icons-react';
import abayudayaLogo from '../assets/Abayudaya Logo.png';
import abayudayaSchool from '../assets/Abayudaya School pic.avif';
import abayudayaSchool1 from '../assets/Abayudaya school pic1.avif';
import abayudayaLearning from '../assets/Abayudaya Learning.avif';
import abayudayaCommunity from '../assets/Abayudaya Community.avif';
import abayudaya5 from '../assets/abayudaya5.avif';
import abayudaya6 from '../assets/abayudaya 6.avif';

const Schools = () => {
    const navigate = useNavigate();

    return (
        <Container className='schools-container' size="xl" style={{ paddingTop: '100px', paddingBottom: '4rem', minWidth: '100vw', background: 'white' }}>
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
                    The Schools of the Abayudaya
                </Title>
                <Text size="xl" style={{ maxWidth: '800px', margin: '0 auto', color: '#495057', lineHeight: 1.6 }}>
                    Hadassah Primary School and Semei Kakungulu High School, central institutions established by the Abayudaya community, urgently need your help. Without sustainable support, their doors risk permanent closure, threatening the community's future and the preservation of their unique Jewish-Ugandan heritage.
                </Text>
            </motion.div>

            {/* Hadassah Primary School Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ marginBottom: '4rem' }}
            >
                <Grid gutter="xl" align="center">
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Card shadow="lg" padding="xl" radius="lg" style={{ backgroundColor: '#f8f9fa', border: '2px solid #e9ecef', height: '100%' }}>
                            <Title order={2} mb="lg" style={{ color: '#1e3c72', fontWeight: 700 }}>
                                Hadassah Primary School
                            </Title>
                            <Text size="lg" mb="md" style={{ lineHeight: 1.6, color: '#495057' }}>
                                Hadassah Primary School, located near Mbale in eastern Uganda, is a beacon of education, inclusivity and cultural preservation for young students. This school serves as a beacon of learning and interfaith cooperation. It reflects the community's deep commitment to nurturing both academic excellence and cultural understanding.
                            </Text>
                            
                            <Title order={4} mb="md" style={{ color: '#1e3c72', fontWeight: 600 }}>
                                Key Highlights
                            </Title>
                            
                            <Stack gap="sm">
                                <Box>
                                    <Text fw={600} style={{ color: '#1e3c72' }}>Blended Curriculum</Text>
                                    <Text size="sm" style={{ color: '#495057', lineHeight: 1.5 }}>
                                        Combines essential secular education with Jewish teachings, Hebrew language skills, and Torah study. This dual focus fosters a strong sense of identity while equipping students with skills to thrive in the modern world.
                                    </Text>
                                </Box>
                                
                                <Box>
                                    <Text fw={600} style={{ color: '#1e3c72' }}>Inclusive Environment</Text>
                                    <Text size="sm" style={{ color: '#495057', lineHeight: 1.5 }}>
                                        Welcomes students from diverse religious backgrounds, fostering mutual respect, tolerance, and peaceful coexistence. This interfaith environment encourages students to develop mutual respect and empathy.
                                    </Text>
                                </Box>
                                
                                <Box>
                                    <Text fw={600} style={{ color: '#1e3c72' }}>Cultural Expression</Text>
                                    <Text size="sm" style={{ color: '#495057', lineHeight: 1.5 }}>
                                        Music and cultural activities incorporate traditional Ugandan instruments with Jewish liturgical songs, enriching students' experiences and preserving cultural heritage.
                                    </Text>
                                </Box>
                                
                                <Box>
                                    <Text fw={600} style={{ color: '#1e3c72' }}>Community Involvement</Text>
                                    <Text size="sm" style={{ color: '#495057', lineHeight: 1.5 }}>
                                        Strong engagement from parents and local leaders supports students' holistic growth beyond academics.
                                    </Text>
                                </Box>
                            </Stack>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Image 
                            src={abayudayaSchool} 
                            alt="Hadassah Primary School" 
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

            {/* Hadassah Challenges Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ marginBottom: '4rem' }}
            >
                <Card shadow="lg" padding="xl" radius="lg" style={{ 
                    background: 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)',
                    color: 'white',
                    border: 'none'
                }}>
                    <Group mb="lg">
                        <IconAlertTriangle size={40} style={{ color: 'white' }} />
                        <Title order={3} style={{ color: 'white', fontWeight: 700 }}>
                            Challenges Facing Hadassah Primary School
                        </Title>
                    </Group>
                    <Text size="lg" mb="md" style={{ lineHeight: 1.6 }}>
                        Severe financial pressures threaten basic operational capabilities.
                    </Text>
                    <Text style={{ lineHeight: 1.6 }}>
                        Immediate funding is needed to ensure continued access to education and preservation of community traditions.
                    </Text>
                </Card>
            </motion.div>

            {/* Semei Kakungulu High School Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{ marginBottom: '4rem' }}
            >
                <Grid gutter="xl" align="center">
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Image 
                            src={abayudayaSchool1} 
                            alt="Semei Kakungulu High School" 
                            style={{ 
                                width: '100%', 
                                height: '400px', 
                                objectFit: 'cover',
                                borderRadius: '12px',
                                boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                            }}
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Card shadow="lg" padding="xl" radius="lg" style={{ backgroundColor: 'white', border: '2px solid #e9ecef', height: '100%' }}>
                            <Title order={2} mb="lg" style={{ color: '#1e3c72', fontWeight: 700 }}>
                                Semei Kakungulu High School
                            </Title>
                            <Text size="lg" mb="md" style={{ lineHeight: 1.6, color: '#495057' }}>
                                Semei Kakungulu High School, named after the founder of the Abayudaya community, serves older students, preparing them academically and spiritually to succeed in a modern, diverse world. This institution embodies the community's commitment to education, tradition, and social cohesion.
                            </Text>
                            
                            <Title order={4} mb="md" style={{ color: '#1e3c72', fontWeight: 600 }}>
                                Key Highlights
                            </Title>
                            
                            <Stack gap="sm">
                                <Box>
                                    <Text fw={600} style={{ color: '#1e3c72' }}>Advanced Education</Text>
                                    <Text size="sm" style={{ color: '#495057', lineHeight: 1.5 }}>
                                        Offers rigorous academic instruction alongside advanced Jewish studies, ensuring students graduate prepared for higher education and meaningful careers. Students study mathematics, biology, chemistry, physics, history, and geography, alongside Jewish studies including Torah readings, Hebrew language instruction, and discussions about Jewish ethics and traditions.
                                    </Text>
                                </Box>
                                
                                <Box>
                                    <Text fw={600} style={{ color: '#1e3c72' }}>Cultural Heritage</Text>
                                    <Text size="sm" style={{ color: '#495057', lineHeight: 1.5 }}>
                                        Strong emphasis on Jewish traditions and values, reinforcing cultural identity and community pride.
                                    </Text>
                                </Box>
                                
                                <Box>
                                    <Text fw={600} style={{ color: '#1e3c72' }}>Inclusive Environment</Text>
                                    <Text size="sm" style={{ color: '#495057', lineHeight: 1.5 }}>
                                        Welcomes students of various faiths, including Christians and Muslims. This interfaith environment fosters understanding and respect among young people, reflecting the community's commitment to peaceful coexistence.
                                    </Text>
                                </Box>
                                
                                <Box>
                                    <Text fw={600} style={{ color: '#1e3c72' }}>Leadership Development</Text>
                                    <Text size="sm" style={{ color: '#495057', lineHeight: 1.5 }}>
                                        Dedicated faculty and community leaders mentor students, cultivating strong moral character and leadership skills.
                                    </Text>
                                </Box>
                            </Stack>
                        </Card>
                    </Grid.Col>
                </Grid>
            </motion.div>

            {/* Semei Kakungulu Challenges Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                style={{ marginBottom: '4rem' }}
            >
                <Card shadow="lg" padding="xl" radius="lg" style={{ 
                    background: 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)',
                    color: 'white',
                    border: 'none'
                }}>
                    <Group mb="lg">
                        <IconAlertTriangle size={40} style={{ color: 'white' }} />
                        <Title order={3} style={{ color: 'white', fontWeight: 700 }}>
                            Challenges Facing Semei Kakungulu High School
                        </Title>
                    </Group>
                    <Text size="lg" mb="md" style={{ lineHeight: 1.6 }}>
                        Urgent need for sustainable financial support to continue operations.
                    </Text>
                    <Text style={{ lineHeight: 1.6 }}>
                        Immediate risk of closure without ongoing contributions.
                    </Text>
                </Card>
            </motion.div>

            {/* School Statistics Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                style={{ marginBottom: '4rem' }}
            >
                <Title order={2} mb="lg" style={{ color: '#1e3c72', textAlign: 'center', fontWeight: 700 }}>
                    Hadassah Primary School by the Numbers
                </Title>
                
                <Grid gutter="lg">
                    <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                        <Card shadow="lg" padding="lg" radius="lg" style={{ backgroundColor: 'white', border: '2px solid #e9ecef', textAlign: 'center' }}>
                            <Text size="3rem" fw={700} style={{ color: '#1e3c72' }}>417</Text>
                            <Text size="sm" c="dimmed">Current Students</Text>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                        <Card shadow="lg" padding="lg" radius="lg" style={{ backgroundColor: 'white', border: '2px solid #e9ecef', textAlign: 'center' }}>
                            <Text size="3rem" fw={700} style={{ color: '#1e3c72' }}>22</Text>
                            <Text size="sm" c="dimmed">Teachers</Text>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                        <Card shadow="lg" padding="lg" radius="lg" style={{ backgroundColor: 'white', border: '2px solid #e9ecef', textAlign: 'center' }}>
                            <Text size="3rem" fw={700} style={{ color: '#1e3c72' }}>253</Text>
                            <Text size="sm" c="dimmed">Graduates to High School</Text>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                        <Card shadow="lg" padding="lg" radius="lg" style={{ backgroundColor: 'white', border: '2px solid #e9ecef', textAlign: 'center' }}>
                            <Text size="3rem" fw={700} style={{ color: '#1e3c72' }}>2001</Text>
                            <Text size="sm" c="dimmed">Founded</Text>
                        </Card>
                    </Grid.Col>
                </Grid>
            </motion.div>

            {/* Programs and Achievements Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                style={{ marginBottom: '4rem' }}
            >
                <Title order={2} mb="lg" style={{ color: '#1e3c72', textAlign: 'center', fontWeight: 700 }}>
                    Programs and Achievements
                </Title>
                
                <Grid gutter="xl">
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Card shadow="lg" padding="xl" radius="lg" style={{ backgroundColor: '#f8f9fa', border: '2px solid #e9ecef', height: '100%' }}>
                            <Title order={3} mb="lg" style={{ color: '#1e3c72', fontWeight: 600 }}>
                                Health and Sanitation
                            </Title>
                            <Stack gap="md">
                                <Text style={{ lineHeight: 1.6, color: '#495057' }}>
                                    Hadassah Primary School created a sickbay that offers first aid to sick students and is expected to support about 200 students each year. The sickbay is equipped to handle typical medical issues such as malaria.
                                </Text>
                                <Text style={{ lineHeight: 1.6, color: '#495057' }}>
                                    The school has been working on increasing its sanitation facilities, including an incinerator for the disposal of solid waste from latrines and a better drainage system to reduce mosquito infestation and malaria rates.
                                </Text>
                                <Text style={{ lineHeight: 1.6, color: '#495057' }}>
                                    Kulanu has continued to fully support the nutrition program for students and teachers, greatly improving the health of students and teachers.
                                </Text>
                            </Stack>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Card shadow="lg" padding="xl" radius="lg" style={{ backgroundColor: 'white', border: '2px solid #e9ecef', height: '100%' }}>
                            <Title order={3} mb="lg" style={{ color: '#1e3c72', fontWeight: 600 }}>
                                Music, Games, and Sports
                            </Title>
                            <Stack gap="md">
                                <Text style={{ lineHeight: 1.6, color: '#495057' }}>
                                    Music is the main co-curricular activity that involves the entire school and helps build social development skills for both children and teachers.
                                </Text>
                                <Text style={{ lineHeight: 1.6, color: '#495057' }}>
                                    The school achieved 6th place out of 52 schools at the National Primary School Music, Dance, and Drama competition and is ranked first in eastern region out of over 300 schools in the national music competition.
                                </Text>
                                <Text style={{ lineHeight: 1.6, color: '#495057' }}>
                                    The school is now considered a regional sports center, leading in football, music, and athletics, and has recently introduced Lego games.
                                </Text>
                            </Stack>
                        </Card>
                    </Grid.Col>
                </Grid>
            </motion.div>

            {/* Information Technology Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                style={{ marginBottom: '4rem' }}
            >
                <Card shadow="lg" padding="xl" radius="lg" style={{ backgroundColor: 'white', border: '2px solid #e9ecef' }}>
                    <Title order={3} mb="lg" style={{ color: '#1e3c72', fontWeight: 600, textAlign: 'center' }}>
                        Information Technology
                    </Title>
                    <Text size="lg" style={{ lineHeight: 1.6, color: '#495057', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        Hadassah Primary School started providing computer literacy lessons to students and teachers in 2015. We have trained over 20 teachers and 615 students and continue providing the lessons with a revised curriculum to include the lower grades. Students are learning to write codes and do simple application development.
                    </Text>
                </Card>
            </motion.div>

            {/* Furniture Fundraiser Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                style={{ marginBottom: '4rem' }}
            >
                <Card shadow="lg" padding="xl" radius="lg" style={{ 
                    background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #4a90e2 100%)',
                    color: 'white',
                    border: 'none'
                }}>
                    <Title order={3} mb="lg" style={{ color: 'white', fontWeight: 600, textAlign: 'center' }}>
                        Furniture Fundraiser
                    </Title>
                    <Text size="lg" mb="lg" style={{ lineHeight: 1.6, textAlign: 'center' }}>
                        Hadassah Primary School is in need of basic furniture to ensure the students' continued success.
                    </Text>
                    <Text mb="lg" style={{ lineHeight: 1.6, textAlign: 'center' }}>
                        The new furniture will provide a better learning environment for the children since there will be adequate seating in all classrooms as well as beds in the dormitories. This will also translate to better health of the students due to more personal space.
                    </Text>
                    <Text size="xl" fw={700} style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        Cost: $13,000+ for classroom furniture and dormitory beds
                    </Text>
                    <Group justify="center">
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
                            leftSection={<IconHeart size={20} />}
                        >
                            Donate to Furniture Fund
                        </Button>
                    </Group>
                </Card>
            </motion.div>

            {/* Your Impact Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                style={{ marginBottom: '4rem' }}
            >
                <Title order={2} mb="lg" style={{ color: '#1e3c72', textAlign: 'center', fontWeight: 700 }}>
                    Your Impact Matters
                </Title>
                
                <Card shadow="lg" padding="xl" radius="lg" style={{ backgroundColor: '#f8f9fa', border: '2px solid #e9ecef' }}>
                    <Text size="lg" mb="lg" style={{ lineHeight: 1.6, color: '#495057', textAlign: 'center' }}>
                        Your generous support directly secures:
                    </Text>
                    
                    <Grid gutter="lg">
                        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                            <Box style={{ textAlign: 'center' }}>
                                <IconCheck size={40} style={{ color: '#1e3c72', margin: '0 auto 1rem', display: 'block' }} />
                                <Text fw={600} style={{ color: '#1e3c72' }}>Operational Stability</Text>
                                <Text size="sm" style={{ color: '#495057' }}>For these vital schools</Text>
                            </Box>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                            <Box style={{ textAlign: 'center' }}>
                                <IconCheck size={40} style={{ color: '#1e3c72', margin: '0 auto 1rem', display: 'block' }} />
                                <Text fw={600} style={{ color: '#1e3c72' }}>Program Continuation</Text>
                                <Text size="sm" style={{ color: '#495057' }}>Critical educational programs</Text>
                            </Box>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                            <Box style={{ textAlign: 'center' }}>
                                <IconCheck size={40} style={{ color: '#1e3c72', margin: '0 auto 1rem', display: 'block' }} />
                                <Text fw={600} style={{ color: '#1e3c72' }}>Heritage Preservation</Text>
                                <Text size="sm" style={{ color: '#495057' }}>Abayudaya's vibrant culture</Text>
                            </Box>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                            <Box style={{ textAlign: 'center' }}>
                                <IconCheck size={40} style={{ color: '#1e3c72', margin: '0 auto 1rem', display: 'block' }} />
                                <Text fw={600} style={{ color: '#1e3c72' }}>Student Development</Text>
                                <Text size="sm" style={{ color: '#495057' }}>Educational opportunities</Text>
                            </Box>
                        </Grid.Col>
                    </Grid>
                </Card>
            </motion.div>

            {/* Call to Action */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.0 }}
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
                        ACT NOW - Help Save Our Schools
                    </Title>
                    <Text size="lg" mb="xl" style={{ maxWidth: '600px', margin: '0 auto', lineHeight: 1.6, color: '#495057' }}>
                        Hadassah Primary School and Semei Kakungulu High School are essential to the Abayudaya community's identity and survival. Join us to ensure these institutions not only survive but thrive.
                    </Text>
                    <Group justify="center" gap="md">
                        <Button 
                            size="lg" 
                            variant="filled" 
                            onClick={() => navigate('/donate')}
                            style={{ backgroundColor: '#1e3c72', fontWeight: 600 }}
                            leftSection={<IconHeart size={20} />}
                        >
                            Donate Now to Keep Jewish Education Alive
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

export default Schools;
