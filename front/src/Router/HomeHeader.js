import React from "react";
import { Box, Button, Toolbar, AppBar, Divider } from "@mui/material";
import { Link } from "react-router-dom/dist";
import { useState, useEffect } from "react";
import Profile from "../component/Profile";
import { useLocation } from "react-router-dom";
import { ElevatorSharp } from "@mui/icons-material";
export default function HomeHeader({ style }) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const pk = localStorage.getItem('pk');
  const location = useLocation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [propensity,setpropensity]=useState("");
  const fetchProfile = () => {
   fetch(
        `https://triplei.herokuapp.com/users/profile/${pk}`,
        {
          method: 'GET',
          headers:{
            'Content-Type':'application/json',
          }
        }
      ).then(response=>{
        if(response.ok){
          return response.json();
        }else{
          throw new Error("프로필 불러오기 실패");
        }
      })
      .then(data=>{
        setUsername(data.username);
        setEmail(data.email);
        setpropensity(data.propensity);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  
  
  const handleLogout = () => {
    // Perform logout logic
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (isLoggedIn && !username && !email) {
      fetchProfile();
    }
  }, [isLoggedIn]);

  return (
    <AppBar
      position="static"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0, // Set the background color to transparent
        "& a": {
          textDecoration: "none",
        },
      }}
      style={{ backgroundColor: "black", position: "fixed", zIndex: 1 }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{ display: "flex", alignItems: "center", textDecoration: "none" }}
        >
          <Link to="/" sx={{ textDecoration: "none", color: "black" }}>
            <img
              src={process.env.PUBLIC_URL + "./img/Logo.PNG"}
              style={{
                width: "200px",
                height: "140px",
                marginLeft: "8rem",
                marginRight: "9rem",
              }}
            />
          </Link>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              flexGrow: 1, // Added flexGrow to push the buttons to the right
              marginLeft: 80,
            }}
          >
            {isLoggedIn ? (
              <>
                <Profile email={email} onChangeState={handleLogout} sx={{ zIndex: 1 }}></Profile>
                <Button sx={{ color: "white", fontSize: 20 }}>
                  {username}
                </Button>
              </>
            ) : (
              <>
                <Link to="/SignIn">
                  <Button sx={{ color: "white", fontSize: 20 }}>로그인</Button>
                </Link>
                <Link to="/SignUp">
                  <Button
                    sx={{ color: "white", marginLeft: "1rem", fontSize: 20 }}
                  >
                    회원가입
                  </Button>
                </Link>
              </>
            )}
          </Box>
        </Box>
      </Toolbar>
      <Divider sx={{ backgroundColor: "gray", marginTop: "-4px" }} />
    </AppBar>
  );
}
