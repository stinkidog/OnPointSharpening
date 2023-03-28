import { Box, Link } from '@mui/material';

const NavBar = () => {
    return (
        <Box sx={{
            display: {
                xs: 'none',
                sm: 'none',
                md: 'flex'
            },
            justifyContent: 'center',
            gap: 4,
            alignItems: 'center',
            backgroundColor: '#393939',
            height: 60,
            paddingLeft: "1rem",
            paddingRight: "1rem"
        }}>
            <Link href="" underline='hover' color={'white'} sx={{ fontSize: { xl: '16px', lg: '14px', md: '11px'} }}>HOME</Link>
            <Link href="" underline='hover' color={'white'} sx={{ fontSize: { xl: '16px', lg: '14px', md: '11px'} }}>MOBILE SERVICE</Link>
            <Link href="" underline='hover' color={'white'} sx={{ fontSize: { xl: '16px', lg: '14px', md: '11px'} }}>SCISSOR PRICES</Link>
            <Link href="" underline='hover' color={'white'} sx={{ fontSize: { xl: '16px', lg: '14px', md: '11px'} }}>KNIVES PRICES</Link>
            <Link href="" underline='hover' color={'white'} sx={{ fontSize: { xl: '16px', lg: '14px', md: '11px'} }}> TOOLS & GARDENING PRICES</Link>
            <Link href="" underline='hover' color={'white'} sx={{ fontSize: { xl: '16px', lg: '14px', md: '11px'} }}>ANIMAL GROOMING TOOLS</Link>
            <Link href="" underline='hover' color={'white'} sx={{ fontSize: { xl: '16px', lg: '14px', md: '11px'} }}>GALLERY</Link>
            <Link href="" underline='hover' color={'white'} sx={{ fontSize: { xl: '16px', lg: '14px', md: '11px'} }}>CONTACT</Link>
        </Box>
    );
}

export default NavBar;
