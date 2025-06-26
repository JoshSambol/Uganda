import { Container, Title, Text, Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
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
        color: 'white'
      }}
    >
      <Title>Friends of the Abayudaya</Title>
      <Text>
        Friends of the Abayudaya is a non-profit organization that provides support to the Abayudaya community in Uganda.
      </Text>
      <Button onClick={() => navigate('/about')}>Learn More</Button>
    </Container>
  );
}
export default Hero;