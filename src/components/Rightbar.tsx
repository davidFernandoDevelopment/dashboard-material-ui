import Box from '@mui/material/Box';

const Rightbar = () => {
    return (
        <Box
            bgcolor='steelblue'
            flex={2}
            p={2}
            sx={{
                display: { xs: 'none', sm: 'block' }
            }}
        >
            RightBar
        </Box>
    );
};

export default Rightbar;