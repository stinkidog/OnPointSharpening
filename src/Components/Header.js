import { Container, Box } from '@mui/material';
import OPSLogo from '../Assets/OPSLogo.png';

const Header = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', width: 1, height: 1, py: 2 }}>
            <Container>
                <img src={OPSLogo} />
            </Container>
            <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Box sx={{ textAlign: 'right'}}>
                    <p>07393600630</p>
                    <p>onpointsharpening@outlook.com</p>
                </Box>
            </Container>
        </Box>
    );
}

export default Header;