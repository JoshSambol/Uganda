import { Container, Title, Text, Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import Hero from '../components/Hero';

function Landing() {
  const navigate = useNavigate();

  return (
    <>
      <Hero />
    </>
  );
}
export default Landing;