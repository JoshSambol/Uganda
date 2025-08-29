import { Container, Title, Text, Button, Group, Stack, Card, Badge, Divider } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { IconHeart, IconUsers, IconGlobe, IconHeartHandshake } from '@tabler/icons-react';
import heroImage from '../assets/hero.png';

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
        minHeight: '99vh',
        minWidth: '100vw',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        padding: '2rem',
        background: '#f8f9fa',
        overflow: 'hidden'
      }}
    >
      {/* White Bezelled Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          width: '100%',
          height: '90vh',
          maxWidth: '1200px',
          background: 'white',
          borderRadius: '20px',
          padding: '2rem',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          border: '1px solid #e9ecef',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Background Image with Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderRadius: '19px',
          zIndex: 1,
          height: '100%'
        }} />
        
        {/* Content Overlay */}
        <div style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Title size="4rem" mb="md" style={{ 
            fontWeight: 900, 
            textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
            lineHeight: 1.2,
            color: 'white'
          }}>
            Keep Jewish Education Alive in Uganda
          </Title>
          
          <Text size="xl" mb="xl" style={{ 
            maxWidth: '700px', 
            margin: '0 auto 2rem',
            textShadow: '1px 1px 4px rgba(0,0,0,0.8)',
            fontWeight: 500,
            color: 'white'
          }}>
            In Uganda, the Abayudaya's commitment to Jewish education is <b>challenged by limited resources</b>. 
            The absence of consistent funding jeopardizes not only academic growth but also the preservation of Jewish identity in the region.
          </Text>

          <Group justify="center" gap="lg" mb="xl">
            <Button 
              size="xl" 
              variant="filled" 
              onClick={() => navigate('/donate')}
              style={{ 
                backgroundColor: '#06FFA5', 
                color: '#1e3c72',
                border: 'none',
                fontWeight: 700,
                fontSize: '1.1rem',
                padding: '1rem 2rem',
                boxShadow: '0 4px 15px rgba(6, 255, 165, 0.3)'
              }}
            >
              Donate Now
            </Button>
            <Button 
              size="xl" 
              variant="outline" 
              onClick={scrollToFeatures}
              style={{ 
                border: '3px solid white', 
                color: 'white',
                fontWeight: 700,
                fontSize: '1.1rem',
                padding: '1rem 2rem',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
            >
              Learn More
            </Button>
          </Group>
        </div>
      </motion.div>

      {/* Features Section - Hidden below the fold */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{ 
          width: '100%', 
          maxWidth: '1200px', 
          marginTop: '2rem',
          paddingTop: '2rem',
          paddingBottom: '2rem'
        }}
        id="features-section"
      >
        <Group justify="center" gap="lg" wrap="wrap">
          <Card 
            shadow="lg" 
            padding="lg" 
            radius="md" 
            style={{ 
              backgroundColor: 'white', 
              border: '1px solid #e9ecef',
              minWidth: '200px',
              color: '#1e3c72'
            }}
          >
            <IconUsers size={40} style={{ margin: '0 auto 1rem', display: 'block', color: '#FF6B35' }} />
            <Text size="lg" fw={600} mb="xs">Jewish Students</Text>
            <Text size="sm" c="dimmed">Supporting Jewish children's access to quality education and Torah study</Text>
          </Card>

          <Card 
            shadow="lg" 
            padding="lg" 
            radius="md" 
            style={{ 
              backgroundColor: 'white', 
              border: '1px solid #e9ecef',
              minWidth: '200px',
              color: '#1e3c72'
            }}
          >
            <IconHeart size={40} style={{ margin: '0 auto 1rem', display: 'block', color: '#F7931E' }} />
            <Text size="lg" fw={600} mb="xs">Jewish Identity</Text>
            <Text size="sm" c="dimmed">Preserving Jewish traditions and cultural heritage for future generations</Text>
          </Card>

          <Card 
            shadow="lg" 
            padding="lg" 
            radius="md" 
            style={{ 
              backgroundColor: 'white', 
              border: '1px solid #e9ecef',
              minWidth: '200px',
              color: '#1e3c72'
            }}
          >
            <IconGlobe size={40} style={{ margin: '0 auto 1rem', display: 'block', color: '#06FFA5' }} />
            <Text size="lg" fw={600} mb="xs">Community Support</Text>
            <Text size="sm" c="dimmed">Building sustainable resources for the Abayudaya community in Uganda</Text>
          </Card>
        </Group>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        style={{ marginTop: '2rem' }}
      >
        <Badge 
          className='badge'
          size="lg" 
          variant="light" 
          style={{ 
            backgroundColor: 'white', 
            color: '#1e3c72',
            fontSize: '1rem',
            padding: '0.5rem 1rem',
            border: '1px solid #e9ecef',
            fontWeight: 600
          }}
        >
          <IconHeartHandshake size={16} style={{ marginRight: '0.5rem', color: '#FF6B35' }} />
          <b>Your support can make an impact that will last for generations to come.</b>
        </Badge>
      </motion.div>

      {/* Mobile-only bottom element */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mobile-bottom"
        style={{ 
          marginTop: '2rem',
          padding: '1.5rem',
          textAlign: 'center'
        }}
      >
        <div style={{
          width: '100%',
          padding: '1rem',
          backgroundColor: 'white',
          borderRadius: '15px',
          margin: '0 auto 1rem',
          border: '1px solid #e9ecef',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
        }} >
          <Text size="sm" style={{ color: '#1e3c72', fontWeight: 600 }}>
            Your support can make an impact that will last for generations to come.
          </Text>
        </div>
      </motion.div>

      {/* Black Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        style={{
          width: '100%',
          backgroundColor: '#000000',
          color: 'white',
          padding: '3rem 2rem',
          marginTop: '2rem',
          textAlign: 'center'
        }}
      >
        <Container size="lg">
          <Group justify="space-between" align="flex-start" wrap="wrap" mb="xl">
            <div style={{ textAlign: 'left', maxWidth: '300px' }}>
              <Text size="lg" fw={700} mb="md" style={{ color: '#06FFA5' }}>
                Friends of the Abayudaya
              </Text>
              <Text size="sm" c="dimmed" style={{ lineHeight: 1.6 }}>
                Elevating Jewish education and cultural preservation in Uganda. 
                Your support makes a lasting impact on future generations.
              </Text>
            </div>
            
            <div style={{ textAlign: 'left' }}>
              <Text size="md" fw={600} mb="md" style={{ color: '#06FFA5' }}>Quick Links</Text>
              <Stack gap="xs">
                <Text size="sm" style={{ cursor: 'pointer', color: 'white' }} onClick={() => navigate('/about')}>
                  About Us
                </Text>
                <Text size="sm" style={{ cursor: 'pointer', color: 'white' }} onClick={() => navigate('/donate')}>
                  Donate
                </Text>
                <Text size="sm" style={{ cursor: 'pointer', color: 'white' }} onClick={() => navigate('/contact')}>
                  Contact
                </Text>
              </Stack>
            </div>
            
            <div style={{ textAlign: 'left' }}>
              <Text size="md" fw={600} mb="md" style={{ color: '#06FFA5' }}>Contact Info</Text>
              <Stack gap="xs">
                <Text size="sm" c="dimmed">info@foundationjewish.org</Text>
                <Text size="sm" c="dimmed">609-240-9511</Text>
                <Text size="sm" c="dimmed">457 Nassau Street, Suite 101</Text>
                <Text size="sm" c="dimmed">Princeton, NJ 08540</Text>
              </Stack>
            </div>
          </Group>
          
          <Divider style={{ borderColor: '#333', margin: '2rem 0' }} />
          
          <Group justify="space-between" align="center" wrap="wrap">
            <Text size="sm" c="dimmed">
              © 2024 Friends of the Abayudaya. All rights reserved.
            </Text>
            <Text size="sm" c="dimmed">
              Supporting Jewish education in Uganda since 2000
            </Text>
          </Group>
        </Container>
      </motion.div>

      <style jsx>{`
        .badge {
          display: none;
        }
        
        .mobile-bottom {
          display: block;
        }
        
        @media (min-width: 768px) {
          .badge {
            display: flex !important;
          }
          
          .mobile-bottom {
            display: none !important;
          }
        }
      `}</style>
    </Container>
    
  );
}

export default Hero;