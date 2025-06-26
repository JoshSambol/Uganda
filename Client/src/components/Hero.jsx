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
          For over a century, the Abayudaya Jewish community has remained steadfast in their commitment to Torah, Shabbat, and Jewish traditions. Today, their children face an urgent crisis that threatens the future of Jewish education in Uganda.
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
          Your support can make an impact that will last for generations
        </Badge>
      </motion.div>
    </Container>
  );
}

export default Hero;