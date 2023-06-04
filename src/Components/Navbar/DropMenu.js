import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

function DropMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const closeTimer = React.useRef(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleOpen = () => {
      clearTimeout(closeTimer.current);
      setAnchorEl(true);
    }

    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleMouseLeave = () => {
      if (!open) {
        setAnchorEl(null);
      }
    };
    // const handleClose = () => {
    //    closeTimer.current = setTimeout(() => {
    //   setAnchorEl(null);
    // }, 200);
    // };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseEnter={handleClick}
        onMouseLeave={handleMouseLeave}   
      >
        Dashboard
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClick={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  )
}

export default DropMenu