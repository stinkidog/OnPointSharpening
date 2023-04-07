import Header from '../Components/Header';
import Hero from '../Components/Hero';
import { Box, Typography, Button, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Hairdressing from '../Assets/hairdressing.jpg';
import Gardening from '../Assets/gardening.jpg';
import PetGrooming from '../Assets/petGrooming.jpg';
import Tools from '../Assets/tools.jpg';
import Kitchen from '../Assets/kitchen.jpg';
import { useState, useEffect } from 'react';

const Home = () => {

    const [isSmallerThanSm, setIsSmallerThanSm] = useState(window.innerWidth <= 900);
    const [hoveredImage, setHoveredImage] = useState(null);

    useEffect(() => {
        const handleResize = () => setIsSmallerThanSm(window.innerWidth <= 900);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    });

    const handleImageHover = (tag) => {
        setHoveredImage(tag);
    }

    const handleImageExit = () => {
        setHoveredImage(null);
    }

    const images = [
        {
            src: Hairdressing,
            tag: "Scissors"
        },
        {
            src: Gardening,
            tag: "Garden Tools"
        },
        {
            src: PetGrooming,
            tag: "Grooming Equipment"
        },
        {
            src: Tools,
            tag: "Woodworking Tools"
        },
        {
            src: Kitchen,
            tag: "Culinary Tools"
        }
    ]

    return (
        <>
            <Header />
            <Hero />
            <Box sx={{
                padding: '2rem',
                background: '#e5e5e5'
            }}>
                <Typography
                    sx={{
                        fontWeight: '600',
                        fontSize: {
                            md: '40px',
                            xl: '40px'
                        }
                    }}
                >
                    Sharpening up your life!
                </Typography>
            </Box >
            <Box sx={{
                padding: '2rem'
            }}>
                <Typography sx={{
                    padding: {
                        xs: '4% 10%',
                        sm: '2% 15%',
                        md: '1% 10%',
                        lg: '0% 0%'
                    },
                    color: 'red',
                    fontWeight: '600',
                    fontSize: {
                        sm: '14px',
                        md: '16px'
                    }
                }}>
                    FOR A QUICK VIEW OF MY UP AND COMING EVENTS PLEASE SEE BOTTOM OF PAGE.
                </Typography>
                <Typography sx={{
                    padding: {
                        xs: '1% 5%',
                        sm: '1% 10%',
                        md: '1% 15%',
                        lg: '1% 20%',
                        xl: '1% 25%'
                    },
                    lineHeight: '1.5'
                }}>
                    Hello and thank you for visiting my page, I'm Becky of On Point Sharpening Services.
                    I sharpen knives, scissors, clipper blades and tools in Winchester and surrounding areas in Hampshire.
                    I am a dedicated knife and scissor sharpening expert covering an extensive range of domestic and commercial knives and scissors.
                    I always offer top-quality services at affordable prices. Contact me today if you require a visit or any questions you may have.
                    I've not listed everything I can sharpen so if you can't see it please just ask. Many thanks and see you soon!
                </Typography>
                <Button variant="contained"
                    sx={{
                        marginTop: '1rem',
                        backgroundColor: 'rgb(224, 60, 61)',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'yellow',
                            color: 'black'
                        },
                        padding: '1rem',
                        width: {
                            xs: '50%',
                            sm: '40%',
                            md: '30%',
                            lg: '20%'
                        },
                        fontSize: {
                            xs: '10px',
                            sm: '12px'
                        }
                    }}>
                    Get in touch
                </Button>
            </Box>
            <Box sx={{
                padding: '2rem',
                background: '#e5e5e5'
            }}>
                <Typography
                    sx={{
                        fontWeight: '600',
                        fontSize: {
                            md: '20px',
                            xl: '30px'
                        }
                    }}
                >
                    My sharpening services at a glance:
                </Typography>
            </Box >
            <Grid container spacing={1} justifyContent="center" paddingTop={1}>
                {images.map((image) => (
                    <Grid xl={true} lg={true} md={true} sm={8} xs={10}>
                        <div 
                            style={{position: 'relative', overflow: 'hidden'}}
                            onMouseEnter={() => handleImageHover(image.tag)}
                            onMouseLeave={() => handleImageExit()}
                        >
                            <img
                                src={image.src}
                                alt=""
                                style={{
                                    width: '100%',
                                    height: isSmallerThanSm ? '150px' : 'auto',
                                    objectFit: isSmallerThanSm ? 'cover' : 'contain',
                                    transformOrigin: 'center',
                                    transition: 'opacity 0.3s ease, transform 0.6s ease',
                                    opacity: hoveredImage === image.tag ? 0.2 : 1,
                                    transform: hoveredImage === image.tag ? 'scale(1.2)' : 'scale(1)'      
                                }}   
                            />
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 600,
                                fontSize: '18px',
                                opacity: hoveredImage === image.tag ? 1 : 0,
                                transition: 'opacity 0.5s ease',
                                cursor: 'default'
                                }}
                            >
                                {image.tag}
                            </div>
                        </div>
                    </Grid>
                ))}
            </Grid>
            <Box paddingTop={2}>
                <Typography sx={{
                    padding: {
                        xs: '4% 10%',
                        sm: '2% 15%',
                        md: '1% 10%',
                        lg: '0% 0%'
                    },
                    color: 'red',
                    fontWeight: '600',
                    fontSize: {
                        xs: '18px',
                        md: '24px'
                    }
                }}>
                    How can we get your items sharpened?
                </Typography>
                <Typography sx={{
                    padding: {
                        xs: '1% 10%',
                        sm: '1% 10%',
                        md: '1% 15%',
                        lg: '1% 20%',
                        xl: '1% 25%'
                    },
                    lineHeight: '1.5',
                    textAlign: 'left'
                }}>
                    <b>- You come to me.</b> Come visit me at one of the events listed at the bottom of this page. Leave your items with me to have sharpened and once you’ve finished pop back to collect your newly sharpened items.<br />
                    <b>- I come to you!</b> That’s right, I come to you and sharpen all your scissors, knives or any other blunt instrument. <br />
                    <b>- Drop off service.</b> At the address below are lockers. Leave your items in one of the lockers, take the key, text me your name and locker number, I sharpen, text you and you collect - simple. Please ensure you leave the key in the locker once you've collected your items ready for the next customer. I will always endeavour to get your items sharpened same day as drop off. No items will be left in lockers over night. <br />
                    <b>- Postal service.</b> Fill out the contact form below and let me know which items are on their way, ensure you put all your contact details and return address within the parcel. Please ensure all parcels are well packaged, make certain it's stiffly packed and all sharp edges/tips are sufficiently padded thus not damaging your items or postal mail handlers. Yes I can re- tip a knife but what would I do with a postie? <b><u>I do not accept responsibility for loss or damage of any items. Please remember to get proof of postage.</u></b>
                </Typography>
                <Typography sx={{
                    paddingTop: '2rem',
                    fontWeight: '600',
                    color: 'red'
                }}>
                    How convenient is that?
                </Typography>
                <Typography sx={{
                    fontWeight: '600',
                    fontSize: '18px',
                    padding: {
                        xs: '8% 10%',
                        sm: '2% 10%',
                        md: '2% 15%',
                        lg: '2% 20%',
                        xl: '2% 25%'
                    }
                }}>
                    Having your tools sharpened, rather than replacing them, is better for the environment and more cost effective.
                </Typography>
            </Box>
        </>
    );
}

export default Home;