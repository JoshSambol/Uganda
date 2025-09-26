import { Container, Title, Text, Grid, Image, Box } from '@mantine/core';
import { motion } from 'motion/react';
import { useState } from 'react';

// Import all assets images
import abayudaya6 from '../assets/abayudaya 6.avif';
import abayudayaCommunity from '../assets/Abayudaya Community.avif';
import abayudayaIdentity from '../assets/Abayudaya Identity.avif';
import abayudayaLearning from '../assets/Abayudaya Learning.avif';
import abayudayaLogo from '../assets/Abayudaya Logo.png';
import abayudayaSchool from '../assets/Abayudaya School pic.avif';
import abayudayaSchool1 from '../assets/Abayudaya school pic1.avif';
import abayudayaTemple from '../assets/Abayudaya Temple.avif';
import abayudaya1 from '../assets/Abayudaya1.avif';
import abayudaya2 from '../assets/abayudaya2.avif';
import abayudaya3 from '../assets/abayudaya3.avif';
import abayudaya4 from '../assets/abayudaya4.avif';
import abayudaya5 from '../assets/abayudaya5.avif';
import abayudaya7 from '../assets/abayudaya7.avif';
import abayudaya8 from '../assets/abayudaya8.avif';
import hero from '../assets/Hero.png';
import jcfgmLogo from '../assets/JCFGM logo.png';

// Import Photo Gallery images
import photo1 from '../Photo Gallery/476226203_3842249996028592_9018012019932370672_n.jpg';
import photo2 from '../Photo Gallery/480686539_1197227892412377_5047929973730508390_n.jpg';
import photo3 from '../Photo Gallery/481043011_1195979389203894_9063956421944943785_n.jpg';
import photo4 from '../Photo Gallery/481217669_1193035552831611_263313806565787898_n.jpg';
import photo5 from '../Photo Gallery/481995089_1205189548282878_180467422229152794_n.jpg';
import photo6 from '../Photo Gallery/481995576_1205190014949498_7076470986558658133_n.jpg';
import photo7 from '../Photo Gallery/482006271_1205189958282837_3537263035524168427_n.jpg';
import photo8 from '../Photo Gallery/483101925_1213712930763873_3380729697760555724_n.jpg';
import photo9 from '../Photo Gallery/486520747_1223255713142928_9098885425464138528_n.jpg';
import photo10 from '../Photo Gallery/487729476_1228807989254367_668644114088740825_n.jpg';
import photo11 from '../Photo Gallery/487772361_1228808189254347_5498206380493737710_n.jpg';
import photo12 from '../Photo Gallery/488002397_1228808209254345_207604872187413314_n.jpg';
import photo13 from '../Photo Gallery/488117883_1228807992587700_8173381456028244591_n.jpg';
import photo14 from '../Photo Gallery/488249893_1228808202587679_4795068222603776662_n.jpg';
import photo15 from '../Photo Gallery/489145318_1234590162009483_2626180653715793113_n.jpg';
import photo16 from '../Photo Gallery/489967673_1234590152009484_6903303018699078397_n.jpg';
import photo17 from '../Photo Gallery/490208901_1240286051439894_5960820301200044442_n.jpg';
import photo18 from '../Photo Gallery/490360552_1237180428417123_3342330386415103932_n.jpg';
import photo19 from '../Photo Gallery/490441611_1240396561428843_2083219916043514521_n.jpg';
import photo20 from '../Photo Gallery/490526144_1242198574581975_887544432575106066_n.jpg';
import photo21 from '../Photo Gallery/490654415_1241004321368067_4167528199644468638_n.jpg';
import photo22 from '../Photo Gallery/491088366_1242198357915330_3128971250745822424_n.jpg';
import photo23 from '../Photo Gallery/491128833_1241378261330673_3990211582521289917_n.jpg';
import photo24 from '../Photo Gallery/491302560_1241378324664000_8597237600967977881_n.jpg';
import photo25 from '../Photo Gallery/491399971_1242198381248661_2311572167031913179_n.jpg';
import photo26 from '../Photo Gallery/491409656_1242198354581997_5841278725397311818_n.jpg';
import photo27 from '../Photo Gallery/491448196_1241378314664001_7711478192906478714_n.jpg';
import photo28 from '../Photo Gallery/491492836_1241378257997340_2919304824081253736_n.jpg';
import photo29 from '../Photo Gallery/491695561_1241004294701403_4430175147235018951_n.jpg';
import photo30 from '../Photo Gallery/491787822_1241378307997335_5444412788159717514_n.jpg';
import photo31 from '../Photo Gallery/491832276_1241004278034738_1528365583699836549_n.jpg';
import photo32 from '../Photo Gallery/492424829_1251475080320991_4165687108477242607_n.jpg';
import photo33 from '../Photo Gallery/unnamed-2-300x225 (1).jpg';
import photo34 from '../Photo Gallery/unnamed-2-300x225.jpg';
import photo35 from '../Photo Gallery/unnamed-3-300x225.jpg';
import photo36 from '../Photo Gallery/unnamed-300x225.jpg';
import photo37 from '../Photo Gallery/unnamed-5.jpg';

const Gallery = () => {
    const [hoveredImage, setHoveredImage] = useState(null);

    // Combine all images into a single array
    const allImages = [
        // Assets images
        { src: abayudaya6, alt: 'Abayudaya Community 6', category: 'assets' },
        { src: abayudayaCommunity, alt: 'Abayudaya Community', category: 'assets' },
        { src: abayudayaIdentity, alt: 'Abayudaya Identity', category: 'assets' },
        { src: abayudayaLearning, alt: 'Abayudaya Learning', category: 'assets' },
        { src: abayudayaLogo, alt: 'Abayudaya Logo', category: 'assets' },
        { src: abayudayaSchool, alt: 'Abayudaya School', category: 'assets' },
        { src: abayudayaSchool1, alt: 'Abayudaya School 1', category: 'assets' },
        { src: abayudayaTemple, alt: 'Abayudaya Temple', category: 'assets' },
        { src: abayudaya1, alt: 'Abayudaya 1', category: 'assets' },
        { src: abayudaya2, alt: 'Abayudaya 2', category: 'assets' },
        { src: abayudaya3, alt: 'Abayudaya 3', category: 'assets' },
        { src: abayudaya4, alt: 'Abayudaya 4', category: 'assets' },
        { src: abayudaya5, alt: 'Abayudaya 5', category: 'assets' },
        { src: abayudaya7, alt: 'Abayudaya 7', category: 'assets' },
        { src: abayudaya8, alt: 'Abayudaya 8', category: 'assets' },
        { src: hero, alt: 'Hero Image', category: 'assets' },
        { src: jcfgmLogo, alt: 'JCFGM Logo', category: 'assets' },
        
        // Photo Gallery images
        { src: photo1, alt: 'Community Photo 1', category: 'gallery' },
        { src: photo2, alt: 'Community Photo 2', category: 'gallery' },
        { src: photo3, alt: 'Community Photo 3', category: 'gallery' },
        { src: photo4, alt: 'Community Photo 4', category: 'gallery' },
        { src: photo5, alt: 'Community Photo 5', category: 'gallery' },
        { src: photo6, alt: 'Community Photo 6', category: 'gallery' },
        { src: photo7, alt: 'Community Photo 7', category: 'gallery' },
        { src: photo8, alt: 'Community Photo 8', category: 'gallery' },
        { src: photo9, alt: 'Community Photo 9', category: 'gallery' },
        { src: photo10, alt: 'Community Photo 10', category: 'gallery' },
        { src: photo11, alt: 'Community Photo 11', category: 'gallery' },
        { src: photo12, alt: 'Community Photo 12', category: 'gallery' },
        { src: photo13, alt: 'Community Photo 13', category: 'gallery' },
        { src: photo14, alt: 'Community Photo 14', category: 'gallery' },
        { src: photo15, alt: 'Community Photo 15', category: 'gallery' },
        { src: photo16, alt: 'Community Photo 16', category: 'gallery' },
        { src: photo17, alt: 'Community Photo 17', category: 'gallery' },
        { src: photo18, alt: 'Community Photo 18', category: 'gallery' },
        { src: photo19, alt: 'Community Photo 19', category: 'gallery' },
        { src: photo20, alt: 'Community Photo 20', category: 'gallery' },
        { src: photo21, alt: 'Community Photo 21', category: 'gallery' },
        { src: photo22, alt: 'Community Photo 22', category: 'gallery' },
        { src: photo23, alt: 'Community Photo 23', category: 'gallery' },
        { src: photo24, alt: 'Community Photo 24', category: 'gallery' },
        { src: photo25, alt: 'Community Photo 25', category: 'gallery' },
        { src: photo26, alt: 'Community Photo 26', category: 'gallery' },
        { src: photo27, alt: 'Community Photo 27', category: 'gallery' },
        { src: photo28, alt: 'Community Photo 28', category: 'gallery' },
        { src: photo29, alt: 'Community Photo 29', category: 'gallery' },
        { src: photo30, alt: 'Community Photo 30', category: 'gallery' },
        { src: photo31, alt: 'Community Photo 31', category: 'gallery' },
        { src: photo32, alt: 'Community Photo 32', category: 'gallery' },
        { src: photo33, alt: 'Community Photo 33', category: 'gallery' },
        { src: photo34, alt: 'Community Photo 34', category: 'gallery' },
        { src: photo35, alt: 'Community Photo 35', category: 'gallery' },
        { src: photo36, alt: 'Community Photo 36', category: 'gallery' },
        { src: photo37, alt: 'Community Photo 37', category: 'gallery' },
    ];

    return (
        <Container size="xl" style={{ paddingTop: '100px', paddingBottom: '4rem', minWidth: '100vw', background: 'white' }}>
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ textAlign: 'center', marginBottom: '4rem' }}
            >
                <Title size="3.5rem" mb="md" style={{ color: '#1e3c72', fontWeight: 800, fontFamily: 'Georgia, serif' }}>
                    Image Gallery
                </Title>
                <Text size="xl" style={{ maxWidth: '800px', margin: '0 auto', color: '#495057', lineHeight: 1.6 }}>
                    Explore the vibrant life and community of the Abayudaya through our collection of images showcasing their schools, traditions, and daily life.
                </Text>
            </motion.div>

            {/* Image Grid */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <Grid gutter="md">
                    {allImages.map((image, index) => (
                        <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                                onMouseEnter={() => setHoveredImage(index)}
                                onMouseLeave={() => setHoveredImage(null)}
                                style={{
                                    cursor: 'pointer',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    boxShadow: hoveredImage === index 
                                        ? '0 12px 30px rgba(0,0,0,0.2)' 
                                        : '0 4px 15px rgba(0,0,0,0.1)',
                                    transition: 'box-shadow 0.3s ease'
                                }}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    style={{
                                        width: '100%',
                                        height: '250px',
                                        objectFit: 'cover',
                                        transition: 'transform 0.3s ease'
                                    }}
                                />
                            </motion.div>
                        </Grid.Col>
                    ))}
                </Grid>
            </motion.div>

            {/* Footer Info */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ textAlign: 'center', marginTop: '4rem' }}
            >
                <Text size="lg" style={{ color: '#495057', lineHeight: 1.6 }}>
                    {allImages.length} images showcasing the Abayudaya community, their schools, and daily life in Uganda.
                </Text>
            </motion.div>
        </Container>
    );
};

export default Gallery;
