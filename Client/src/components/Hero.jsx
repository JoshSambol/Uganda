import { Container, Title, Text, Button, Group, Stack, Card, Badge, Divider, Grid, Image, Box } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { IconHeart, IconUsers, IconGlobe, IconHeartHandshake, IconSchool, IconStar } from '@tabler/icons-react';
import heroImage from '../assets/Hero.png';
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

function Hero() {
  const navigate = useNavigate();

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features-section');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Container 
      className="hero-container"
      style={{
        minHeight: '100vh',
        minWidth: '100vw',
        position: 'relative',
        padding: '0',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        overflow: 'hidden'
      }}
    >
      {/* Professional Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          width: '100%',
          minHeight: '100vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          background: 'white'
        }}
      >
        <Container size="xl" style={{ padding: '2rem' }}>
          <Grid gutter="xl" align="center">
            {/* Left Content */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Group mb="lg">
                  <Image 
                    src={abayudayaLogo} 
                    alt="Abayudaya Logo" 
                    style={{ width: '60px', height: '60px' }}
                  />
                  <Box>
                    <Text size="sm" c="dimmed" fw={500}>Friends of the Abayudaya</Text>
                    <Text size="xs" c="dimmed">Supporting Jewish Education in Uganda</Text>
                  </Box>
                </Group>

                <Title size="3.5rem" mb="lg" style={{ 
                  fontWeight: 800, 
                  lineHeight: 1.1,
                  color: '#1e3c72',
                  fontFamily: 'Georgia, serif'
                }}>
                  Preserving Jewish Heritage in Uganda
                </Title>
                
                <Text size="lg" mb="xl" style={{ 
                  color: '#495057',
                  lineHeight: 1.6,
                  maxWidth: '500px'
                }}>
                  The Abayudaya community has maintained Jewish traditions for over a century. 
                  Today, their schools need support to continue providing quality Jewish education 
                  to the next generation.
                </Text>

                <Group gap="md" mb="xl">
                  <Button 
                    size="lg" 
                    variant="filled" 
                    onClick={() => navigate('/donate')}
                    style={{ 
                      backgroundColor: '#1e3c72', 
                      color: 'white',
                      border: 'none',
                      fontWeight: 600,
                      padding: '0.75rem 2rem'
                    }}
                    leftSection={<IconHeart size={20} />}
                  >
                    Support Education
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    onClick={() => navigate('/about')}
                    style={{ 
                      borderColor: '#1e3c72', 
                      color: '#1e3c72',
                      fontWeight: 600,
                      padding: '0.75rem 2rem'
                    }}
                  >
                    Learn More
                  </Button>
                </Group>

                {/* Stats */}
                <Group gap="xl" mt="xl">
                  <Box style={{ textAlign: 'center' }}>
                    <Text size="2rem" fw={700} style={{ color: '#1e3c72' }}>100+</Text>
                    <Text size="sm" c="dimmed">Years of Tradition</Text>
                  </Box>
                  <Box style={{ textAlign: 'center' }}>
                    <Text size="2rem" fw={700} style={{ color: '#1e3c72' }}>2</Text>
                    <Text size="sm" c="dimmed">Schools Supported</Text>
                  </Box>
                  <Box style={{ textAlign: 'center' }}>
                    <Text size="2rem" fw={700} style={{ color: '#1e3c72' }}>500+</Text>
                    <Text size="sm" c="dimmed">Students Impacted</Text>
                  </Box>
                </Group>
              </motion.div>
            </Grid.Col>

            {/* Right Image Gallery */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ position: 'relative' }}
              >
                {/* Main Image */}
                <Box mb="md" style={{ position: 'relative' }}>
                  <Image 
                    src={abayudayaCommunity} 
                    alt="Abayudaya Community" 
                    style={{ 
                      width: '100%', 
                      height: '300px', 
                      objectFit: 'cover',
                      borderRadius: '12px',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                    }}
                  />
                  <Box style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    background: 'rgba(30, 60, 114, 0.9)',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <Text size="sm" color="white" fw={600}>The Abayudaya Community</Text>
                  </Box>
                </Box>

                {/* Image Grid */}
                <Grid gutter="sm">
                  <Grid.Col span={4}>
                    <Image 
                      src={abayudayaSchool} 
                      alt="Abayudaya School" 
                      style={{ 
                        width: '100%', 
                        height: '120px', 
                        objectFit: 'cover',
                        borderRadius: '8px',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                      }}
                    />
                  </Grid.Col>
                  <Grid.Col span={4}>
                    <Image 
                      src={abayudayaTemple} 
                      alt="Abayudaya Temple" 
                      style={{ 
                        width: '100%', 
                        height: '120px', 
                        objectFit: 'cover',
                        borderRadius: '8px',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                      }}
                    />
                  </Grid.Col>
                  <Grid.Col span={4}>
                    <Image 
                      src={abayudayaLearning} 
                      alt="Abayudaya Learning" 
                      style={{ 
                        width: '100%', 
                        height: '120px', 
                        objectFit: 'contain',
                        objectPosition: 'center',
                        borderRadius: '8px',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                        backgroundColor: '#f8f9fa'
                      }}
                    />
                  </Grid.Col>
                </Grid>
              </motion.div>
            </Grid.Col>
          </Grid>
        </Container>
      </motion.div>

      {/* Community Gallery Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        style={{ 
          width: '100%',
          background: '#f8f9fa',
          padding: '4rem 0'
        }}
        id="features-section"
      >
        <Container size="xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <Title size="2.5rem" mb="md" style={{ color: '#1e3c72', fontWeight: 700 }}>
              Our Community in Action
            </Title>
            <Text size="lg" style={{ color: '#495057', maxWidth: '600px', margin: '0 auto' }}>
              See how your support directly impacts the lives of students and families in the Abayudaya community
            </Text>
          </motion.div>

          {/* Image Gallery Grid */}
          <Grid gutter="md">
            <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Image 
                  src={abayudaya1} 
                  alt="Abayudaya Community Life" 
                  style={{ 
                    width: '100%', 
                    height: '250px', 
                    objectFit: 'cover',
                    borderRadius: '12px',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
                  }}
                />
              </motion.div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Image 
                  src={abayudaya2} 
                  alt="Abayudaya Students" 
                  style={{ 
                    width: '100%', 
                    height: '250px', 
                    objectFit: 'cover',
                    borderRadius: '12px',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
                  }}
                />
              </motion.div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Image 
                  src={abayudaya3} 
                  alt="Abayudaya Learning" 
                  style={{ 
                    width: '100%', 
                    height: '250px', 
                    objectFit: 'cover',
                    borderRadius: '12px',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
                  }}
                />
              </motion.div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Image 
                  src={abayudaya4} 
                  alt="Abayudaya Community" 
                  style={{ 
                    width: '100%', 
                    height: '250px', 
                    objectFit: 'cover',
                    borderRadius: '12px',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
                  }}
                />
              </motion.div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Image 
                  src={abayudaya5} 
                  alt="Abayudaya Education" 
                  style={{ 
                    width: '100%', 
                    height: '250px', 
                    objectFit: 'cover',
                    borderRadius: '12px',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
                  }}
                />
              </motion.div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Image 
                  src={abayudaya6} 
                  alt="Abayudaya Heritage" 
                  style={{ 
                    width: '100%', 
                    height: '250px', 
                    objectFit: 'cover',
                    borderRadius: '12px',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
                  }}
                />
              </motion.div>
            </Grid.Col>
          </Grid>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            style={{ textAlign: 'center', marginTop: '3rem' }}
          >
            <Card 
              shadow="lg" 
              padding="xl" 
              radius="lg" 
              style={{ 
                backgroundColor: 'white',
                border: '2px solid #e9ecef',
                maxWidth: '600px',
                margin: '0 auto'
              }}
            >
              <IconHeartHandshake size={60} style={{ margin: '0 auto 1rem', display: 'block', color: '#1e3c72' }} />
              <Title order={3} mb="md" style={{ color: '#1e3c72' }}>
                Join Our Mission
              </Title>
              <Text size="lg" mb="xl" style={{ color: '#495057' }}>
                Your support ensures that Jewish education continues to thrive in Uganda, 
                preserving traditions and building a brighter future for generations to come.
              </Text>
              <Button 
                size="lg" 
                variant="filled" 
                onClick={() => navigate('/donate')}
                style={{ 
                  backgroundColor: '#1e3c72',
                  color: 'white',
                  fontWeight: 600
                }}
                leftSection={<IconHeart size={20} />}
              >
                Support Education Today
              </Button>
            </Card>
          </motion.div>
        </Container>
      </motion.div>
    </Container>
    
  );
}

export default Hero;