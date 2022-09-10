import { Box, Stack } from '@mui/material';
import { Feed, Navbar, Rightbar, Sidebar } from './components';


function App() {

  return (
    <Box>
      <Navbar />
      <Stack
        direction='row'
        spacing={[0, 2]}
        justifyContent='space-between'
      >
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
