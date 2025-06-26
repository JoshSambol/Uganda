import { Container, Title, Text, Button, Group } from '@mantine/core';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Title order={1}>About</Title>
        </Container>
    );
};

export default About;