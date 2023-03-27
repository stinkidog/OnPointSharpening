import { Container, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { Fragment } from 'react';
import OPSLogo from '../Assets/OPSLogo.png';
import NavBar from './NavBar';

const Header = () => {
    return (
        <Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', width: 1, height: 1, py: 2 }}>
                <MenuIcon sx={{
                    paddingLeft: {
                        xs: '1.5rem',
                        sm: '2rem'
                    },
                    display: {
                        sm: 'inline-block',
                        md: 'none'
                    }
                }}/>
                <Container>
                    <img src={OPSLogo} alt="" />
                </Container>
                <Container sx={{
                    display: {
                        xs: 'none',
                        sm: 'none',
                        md: 'flex'
                    },
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Box sx={{ textAlign: 'right' }}>
                        <p style={{ fontWeight: '600', textDecoration: 'underline' }}>07393600630</p>
                        <p style={{ fontWeight: '600', textDecoration: 'underline' }}>onpointsharpening@outlook.com</p>
                    </Box>
                </Container>
                <PhoneIphoneIcon sx={{
                    paddingRight: {
                        xs: '1.5rem',
                        sm: '2rem'
                    },
                    display: {
                        sm: 'inline-block',
                        md: 'none'
                    }
                }}/>
            </Box>
            <NavBar />
        </Fragment>
    );
}

export default Header;