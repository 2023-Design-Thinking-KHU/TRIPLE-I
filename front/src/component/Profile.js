import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import img4 from "../images/4.png";
import img5 from "../images/5.png";
import CancelIcon from "@mui/icons-material/Cancel";

export default function Profile({ email, onChangeState }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const danger = useSelector((state) => state.danger);
  const amount = useSelector((state) => state.amount);
  const correct = useSelector((state) => state.correct);
  const username = useSelector((state) => state.username);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const volatility = useSelector((state) => state.volatility);
  const expectedReturn = useSelector((state) => state.expectedReturn);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // 로그아웃 처리 로직
    dispatch({ type: "UPDATE_login", payload: false });
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
    const downloadURL = "https://triplei.herokuapp.com/media/weights.csv"; // Update with your actual URL
    fetch(downloadURL)
      .then((response) => response.blob())
      .then((blob) => {
        // Create a temporary URL for the downloaded file
        const url = URL.createObjectURL(blob);
        // Create a link element
        const link = document.createElement("a");
        link.href = url;
        link.download = "weights.csv"; // Set the filename for the downloaded file
        // Programmatically click the link to start the download
        link.click();
        // Clean up the temporary URL and link element
        URL.revokeObjectURL(url);
        link.remove();
      })
      .catch((error) => {
        console.error("Error downloading file:", error);
      });
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 ,border: "2px solid gray"}}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar>
            <AccountCircleIcon sx={{ width: 55, height: 55 }} />
            </Avatar>
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
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> 프로필 수정
        </MenuItem>
        <MenuItem onClick={handleClose}>{email}</MenuItem>
        <Divider />
        {correct >= 4 ? (
          <div style={{ textAlign: "center" }}>
            <CancelIcon style={{ color: "red", fontSize: 48 }} />
            <h4>투자 부적합</h4>
          </div>
        ) : (
          <>
            <h4 style={{ textAlign: "center" }}>
              {danger === 0 ? "테스트 하세요" : "투자 성향"}
            </h4>
            {danger !== 0 && (
              <div style={{ textAlign: "center" }}>
                {danger === 1 && <img src={img5} alt="Result" />}
                {danger === 2 && <img src={img4} alt="Result" />}
                {danger === 3 && <img src={img3} alt="Result" />}
                {danger === 4 && <img src={img2} alt="Result" />}
              </div>
            )}
          </>
        )}

        <Divider />
        <h4 style={{ textAlign: "center", marginRight: 13 }}>
          포트폴리오 결과
        </h4>
        <h5 style={{fontSize:15,marginLeft:8}}>
        투자가용금액:{amount}<br /><br />
        예상 수익률:{expectedReturn}<br /><br />
        연간 위험도:{volatility}<br />
        </h5>
        <Button
          sx={{ marginLeft: 8.5 }}
          variant="contained"
          onClick={handleDownload}
        >
          결과 파일
        </Button>
        <MenuItem sx={{ marginTop: 5 }} onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <Button onClick={handleLogout}>로그아웃</Button>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
