import MailIcon from '@mui/icons-material/Mail';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import Notifications from '@mui/icons-material/Notifications';
import { AppBar, Box, InputBase, styled, Toolbar, Typography, Badge, Avatar, Menu, MenuItem, IconButton } from '@mui/material';
import { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%'
}));

const Icons = styled(Box)(({ theme }) => ({
  gap: '20px',
  display: 'none',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  }
}));

const UserBox = styled(Box)(({ theme }) => ({
  gap: '20px',
  display: 'flex',
  alignItems: 'center',

  [theme.breakpoints.up('sm')]: {
    display: 'none',
  }
}));


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [anchor, setAnchor] = useState<HTMLDivElement | null>(null);

  const handleAvatarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setOpen(!open);
    setAnchor(e.currentTarget);
  };

  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography
          variant='h6'
          letterSpacing={2}
          sx={{
            display: { xs: 'none', sm: 'block' }
          }}
        >
          SanchezSocial
        </Typography>
        <AddBusinessIcon
          sx={{
            display: { xs: 'block', sm: 'none' }
          }}
        />
        <Search><InputBase placeholder='Search...' /></Search>
        <Icons>
          <IconButton color='inherit'>
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton color='inherit'>
            <Badge badgeContent={4} color="error">
              <Notifications />
            </Badge>
          </IconButton>
          <Avatar onClick={handleAvatarClick} sx={{ width: 30, height: 30 }} src="https://avatars.githubusercontent.com/u/64740931?s=48&v=4" />
        </Icons>
        <UserBox>
          <Typography>David</Typography>
          <Avatar onClick={handleAvatarClick} sx={{ width: 30, height: 30 }} src="https://avatars.githubusercontent.com/u/64740931?s=48&v=4" />
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        anchorEl={anchor}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar >
  );
};

export default Navbar;