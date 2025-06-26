import { Container, Title, Text, Button, Group, Stack, Card, Badge } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IconHeart, IconUsers, IconGlobe, IconHeartHandshake } from '@tabler/icons-react';

function Hero() {
  const navigate = useNavigate();

  return (
    <Container 
      className="rotating-gradient"
      style={{
        minHeight: '100vh',
        minWidth: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        padding: '2rem'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title size="3.5rem" mb="md" style={{ fontWeight: 700 }}>
          Keep Jewish Education Alive in Uganda
        </Title>
        
        <Text size="xl" mb="lg" style={{ maxWidth: '700px', margin: '0 auto 2rem' }}>
          
In Uganda, the Abayudaya's commitment to Jewish education is <b>challenged by limited resources</b>. The absence of consistent funding jeopardizes not only academic growth but also the preservation of Jewish identity in the region. 
Together, we can transform the lives of the Jewish people of Uganda. 
          </Text>

        <Group justify="center" gap="md" mb="xl">
          <Button 
            size="lg" 
            variant="filled" 
            onClick={() => navigate('/about')}
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', border: '2px solid white' }}
          >
            Learn More
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={() => navigate('/donate')}
            style={{ border: '2px solid white', color: 'white' }}
          >
            Donate Now
          </Button>
        </Group>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{ width: '100%', maxWidth: '800px' }}
      >
        <Group justify="center" gap="lg" wrap="wrap">
          <Card 
            shadow="sm" 
            padding="lg" 
            radius="md" 
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.1)', 
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              minWidth: '200px'
            }}
          >
            <IconUsers size={40} style={{ margin: '0 auto 1rem', display: 'block' }} />
            <Text size="lg" fw={600} mb="xs">Jewish Students</Text>
            <Text size="sm" c="dark">Supporting Jewish children's access to quality education and Torah study</Text>
          </Card>

          <Card 
            shadow="sm" 
            padding="lg" 
            radius="md" 
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.1)', 
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              minWidth: '200px'
            }}
          >
            <IconHeart size={40} style={{ margin: '0 auto 1rem', display: 'block' }} />
            <Text size="lg" fw={600} mb="xs">Jewish Identity</Text>
            <Text size="sm" c="dark">Preserving Jewish traditions and cultural heritage for future generations</Text>
          </Card>

          <Card 
            shadow="sm" 
            padding="lg" 
            radius="md" 
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.1)', 
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              minWidth: '200px'
            }}
          >
            <IconGlobe size={40} style={{ margin: '0 auto 1rem', display: 'block' }} />
            <Text size="lg" fw={600} mb="xs">Community Support</Text>
            <Text size="sm" c="dark">Building sustainable resources for the Abayudaya community in Uganda</Text>
          </Card>
        </Group>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        style={{ marginTop: '3rem' }}
      >
        <Badge 
          className='badge'
          size="lg" 
          variant="light" 
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.2)', 
            color: 'white',
            fontSize: '1rem',
            padding: '0.5rem 1rem'
          }}
        >
          <IconHeartHandshake size={16} style={{ marginRight: '0.5rem' }} />
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
          height: '50px',
          padding: '0.2rem 1rem 0.3rem 1rem',
          scaleToFit: true,
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          borderRadius: '30px',
          margin: '0 auto 1rem'
        }} >
          <Text size="sm" c="white" style={{ opacity: 0.8, fontWeight: 900 }}>
            Your support can make an impact that will last for generations to come.
          </Text>
        </div>
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