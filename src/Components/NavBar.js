import { Box, Link } from '@mui/material';

const NavBar = () => {
    return(
        <Box sx={{ display: 'flex', width: 1, justifyContent: 'center', gap: 5, alignItems: 'center', backgroundColor: '#393939', height: 60 }}>
            <Link href="" underline='hover' color={'white'}>HOME</Link>
            <Link href="" underline='hover' color={'white'}>MOBILE SERVICE</Link>
            <Link href="" underline='hover' color={'white'}>SCISSOR PRICES</Link>
            <Link href="" underline='hover' color={'white'}>KNIVES PRICES</Link>
            <Link href="" underline='hover' color={'white'}> TOOLS & GARDENING PRICES</Link>
            <Link href="" underline='hover' color={'white'}>ANIMAL GROOMING TOOLS</Link>
            <Link href="" underline='hover' color={'white'}>GALLERY</Link>
            <Link href="" underline='hover' color={'white'}>CONTACT</Link>
        </Box>
    );
}

export default NavBar;
