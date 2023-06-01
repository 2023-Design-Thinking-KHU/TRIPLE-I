import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import AddIcon from "@mui/icons-material/Add";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Link } from "react-router-dom";

export default function HomeList() {
    return (
      <Box
        sx={{
          marginRight:5,
          marginTop:10,
          width: 600,
          bgcolor: "background.paper",
          backgroundColor: "transparent",
          border: "3px solid black",
          borderRadius: "10px",
        }}
      >
        <List>
          <Link to="/Test"  style={{ textDecoration: "none" }}>
          <ListItem disablePadding sx={{ borderBottom: "3px solid black", py: 4 }}>
            <ListItemButton>
              <ListItemText
                primary={
                  <span
                    style={{
                      fontSize: "30px",
                      fontWeight: "bold",
                      color: "black",
                      textShadow: "1px 1px 4px rgba(0, 0, 0, 0)",
                    }}
                  >
                    투자 성향 테스트
                  </span>
                }
              />
              <AddCircleIcon sx={{ color: "black", fontSize: 40 }} />
            </ListItemButton>
          </ListItem>
          </Link>
          <Link to="/Main"  style={{ textDecoration: "none" }}>
          <ListItem disablePadding sx={{ borderBottom: "3px solid black", py: 4 }}>
            <ListItemButton>
              <ListItemText
                primary={
                  <span
                    style={{
                      fontSize: "30px",
                      color: "black",
                      fontWeight: "bold",
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0)",
                    }}
                  >
                    포트폴리오 추천
                  </span>
                }
              />
              <AddCircleIcon sx={{ color: "black", fontSize: 40 }} />
            </ListItemButton>
          </ListItem>
          </Link>
          <Link to='Explanation' style={{ textDecoration: "none" }}>
          <ListItem disablePadding sx={{ py: 4 }}>
            <ListItemButton>
              <ListItemText
                primary={
                  <span
                    style={{
                      fontSize: "30px",
                      color: "black",
                      fontWeight: "bold",
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0)",
                    }}
                  >
                    상품설명 및 투자안내
                  </span>
                }
              />
              <AddCircleIcon sx={{ color: "black", fontSize: 40 }} />
            </ListItemButton>
          </ListItem>
          </Link>
        </List>
      </Box>
    );
  }
  
