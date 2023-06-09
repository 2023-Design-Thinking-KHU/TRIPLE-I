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
import { useDispatch,useSelector } from "react-redux";

export default function Profile({email,onChangeState}) {
  const [anchorEl, setAnchorEl] = React.useState(null); 
  const dispatch=useDispatch();
  const open = Boolean(anchorEl);

  const username=useSelector(state => state.username);
  const isLoggedIn=useSelector(state => state.isLoggedIn);
  const volatility=useSelector(state => state.volatility);
  const expectedReturn=useSelector(state => state.expectedReturn);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // 로그아웃 처리 로직
    dispatch({ type:'UPDATE_login',payload:false});
    onChangeState(isLoggedIn);
    // 필요한 다른 작업 수행 (예: 로그아웃 API 호출 등)
  };

  useEffect(() => {
    if (!isLoggedIn) {
      // 로그아웃된 상태이므로 필요한 작업을 수행합니다.
      window.location.reload();
    }
  }, [isLoggedIn]);

  const handleDownload = () => {
      const downloadURL = 'https://triplei.herokuapp.com/media/weights.csv'; // Update with your actual URL
      fetch(downloadURL)
        .then((response) => response.blob())
        .then((blob) => {
          // Create a temporary URL for the downloaded file
          const url = URL.createObjectURL(blob);
          // Create a link element
          const link = document.createElement('a');
          link.href = url;
          link.download = 'weights.csv'; // Set the filename for the downloaded file
          // Programmatically click the link to start the download
          link.click();
          // Clean up the temporary URL and link element
          URL.revokeObjectURL(url);
          link.remove();
        })
        .catch((error) => {
          console.error('Error downloading file:', error);
        });
  };
  
 
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
         <h4 style={{marginRight:20,textAlign:'center'}}>투자성향</h4>
         <h4 style={{marginRight:12,textAlign:'center',opacity: 0.7}}>테스트 하세요</h4>
         <Divider />
         <h4 style={{marginRight:20,textAlign:'center'}}>포트폴리오 결과</h4>
         <h4 style={{marginRight:12,textAlign:'center',opacity: 0.7}}>테스트 하세요</h4>
         <Button sx={{marginTop:5,marginLeft:8.5}} variant="contained" onClick={handleDownload}>결과 파일</Button>
        <MenuItem sx={{marginTop:5}} onClick={handleClose}>
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