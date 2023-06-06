import React, { useEffect, useRef, useState } from "react";
import {
  Drawer as MUIDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import Logo from '../photo/logo.png';



const drawerWidth = 300;

// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginRight: -drawerWidth,
//     ...(open && {
//       transition: theme.transitions.create('margin', {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginRight: 0,
//     }),
//   }),
// );

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

function Sidenav() {
  const [color, setColor] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
    if (window.scrolY > 0) {
      setIsFixed(true);
      setIsHidden(true);
    } else {
      setIsFixed(false);
      setIsHidden(false);
    }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 600px)'); 

  const itemList = [
    {
      text: 'Home',
      path: '/'
     },
     {
      text: 'About Us',
      path: '/about'
     }, 
     {
      text: 'Contact Us',
      path: '/contact'
      },
      {
        text: 'Drafts',
        path: '/drafts'
      }
    ];

    const {pathname} = useLocation();
    useEffect(() => {
      if (pathname === '/') {
        setIsFixed(isHidden);
      }
    }, [pathname, isHidden]);
  
    const handleItemClick = (path) => {
      navigate(path);
    };

  return (
    <>
    {isMobile ? (
    <Box sx={{ display: 'flex' }} >
    <CssBaseline />
    <AppBar position="fixed" open={open} className="bg-transparent">
      <Toolbar className={`flex justify-between ${isHidden ? 'hidden' : 'block'} ${color ? 'bg-sky-700' : 'transparent'}`}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
          sx={{ ...(open && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>
        <img src={Logo} alt="Logo" component="img" className="w-10 h-10 rounded"/>

      </Toolbar>
    </AppBar>
    <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="temporary"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
    <List>
    {itemList.map((item, index) => {
      const { text, path} = item;
      return (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => handleItemClick(path)}>
                <ListItemIcon>
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
    )} )}
    </List>
  </Drawer>
  </Box>
    ) : null}
    </>
  )
}

export default Sidenav
