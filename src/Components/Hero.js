import HeroImage from '../Assets/Hero.jpg';
import { Box, Container, Typography, Button } from '@mui/material';

const Hero = () => {
    return (
        <Box position={'relative'} height="500px">
            <img
                src={HeroImage}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}
            />
            <Container fixed>
                <Box position="absolute" top="25%" left="50%" transform="translate(-50%, -50%)" textAlign="right" color="white">
                    <Typography variant="h1" sx ={{
                        fontSize:{
                            xs: '2rem',
                            sm: '3rem',
                            md: '3.5rem'
                        },
                        color: 'yellow',
                        margin: '0',
                        fontWeight: 600
                    }}>
                        Knife, Scissors & Tools
                    </Typography>
                    <Typography variant="h3" sx={{

                    }}>
                        Sharpening Services <br />
                        in Winchester
                    </Typography>
                    <Typography variant="h3" sx={{
                        color: 'rgb(224, 60, 61)',
                        textDecoration: 'underline'
                    }}>
                        07393600630
                    </Typography>
                    <Button variant="contained" sx={{
                        marginTop: '1rem',
                        backgroundColor: 'yellow',
                        color: 'black',
                        '&:hover': {
                            backgroundColor: 'rgb(224, 60, 61)',
                            color: 'white'
                        },
                        width: '40%',
                        padding: '0.5rem'
                    }}>
                        Get in touch
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}

export default Hero;