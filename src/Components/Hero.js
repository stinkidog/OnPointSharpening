import HeroImage from '../Assets/Hero.jpg';
import { Box, Container, Typography, Button } from '@mui/material';

const Hero = () => {
    return (
        <Box position={'relative'} height="500px" sx={{
            height: {
                xs: '200px',
                sm: '400px',
                md: '500px'
            },
            background: {
                xs: 'rgba(0,0,0,0.5)',
                sm: 'rgba(0,0,0,0.5)',
                md: 'rgba(0,0,0,0.2)'
            }
        }}>
            <img
                src={HeroImage}
                alt=""
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: -1
                }}
            />
            <Container fixed>
                <Box
                    position="absolute"
                    top="25%"
                    color="white"
                    sx={{
                        position: {
                            sm: 'relative',
                            md: 'absolute'
                        },
                        left: {
                            sm: '0',
                            md: '40%',
                            lg: '50%'
                        },
                        textAlign: {
                            sm: 'center',
                            md: 'right'
                        },
                        transform: {
                            xs: 'translateY(12%)',
                            sm: 'translateY(45%)',
                            md: 'translate(0%, -5%)',
                            lg: 'translate(5%, -5%)',
                            xl: 'translate(10%, -5%)'
                        }
                    }}
                >
                    <Typography variant="h1" sx={{
                        fontSize: {
                            xs: '1.5rem',
                            sm: '2rem',
                            md: '3rem',
                            lg: '3rem',
                            xl: '3.5rem'
                        },
                        color: 'yellow',
                        margin: '0',
                        fontWeight: 600
                    }}>
                        Knife, Scissors & Tools
                    </Typography>
                    <Typography variant="h3" sx={{
                        fontSize: {
                            xs: '1.5rem',
                            sm: '2rem',
                            md: '3rem',
                            lg: '3rem',
                            xl: '3.5rem'
                        },
                    }}>
                        Sharpening Services <br />
                        in Winchester
                    </Typography>
                    <Typography variant="h3" sx={{
                        color: 'rgb(224, 60, 61)',
                        textDecoration: 'underline',
                        fontSize: {
                            xs: '1.5rem',
                            sm: '2rem',
                            md: '3rem',
                            lg: '3rem',
                            xl: '3.5rem'
                        }
                    }}>
                        07393600630
                    </Typography>
                    <Button variant="contained"
                        sx={{
                            marginTop: '1rem',
                            backgroundColor: 'yellow',
                            color: 'black',
                            '&:hover': {
                                backgroundColor: 'rgb(224, 60, 61)',
                                color: 'white'
                            },
                            padding: {
                                xs: '0.2rem',
                                sm: '0.5rem'
                            },
                            width: {
                                xs: '30%',
                                sm: '40%'
                            },
                            fontSize: {
                                xs: '10px',
                                sm: '12px'
                            }
                        }}>
                        Get in touch
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}

export default Hero;