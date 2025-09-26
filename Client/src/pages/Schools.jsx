import { Container, Title, Text, Button, Group, Stack, Card, Badge, Divider, Grid, Image, Box } from '@mantine/core';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { IconHeart, IconUsers, IconSchool, IconGlobe, IconHeartHandshake, IconStar, IconBook } from '@tabler/icons-react';
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
            
        </Container>
    );
};

export default Schools;
