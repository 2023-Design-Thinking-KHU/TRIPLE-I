import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useLocation } from "react-router-dom";
import { Button} from '@mui/material';
import { useState,useEffect } from 'react';

export default function Profile({email,onChangeState}) {
  const location = useLocation();
  const [islogin, setislogin] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null); 
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // 로그아웃 처리 로직
    setislogin(false);
    localStorage.setItem('isLoggedIn', 'false');
    onChangeState(islogin);
    // 필요한 다른 작업 수행 (예: 로그아웃 API 호출 등)
  };

  useEffect(() => {
    if (!islogin) {
      // 로그아웃된 상태이므로 필요한 작업을 수행합니다.
      window.location.reload();
    }
  }, [islogin]);
 
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar ><AccountCircleIcon sx={{ width: 55, height: 55 }}/></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> 프로필 수정
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {email}
        </MenuItem>
        <Divider />
         <h4 style={{marginRight:12,marginLeft:10}}>투자성향:</h4>
         <h4 style={{marginRight:12,textAlign:'center'}}>테스트 하세요</h4>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon >
          <Button onClick={handleLogout}>
          로그아웃
          </Button >
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}