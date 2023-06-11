import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Link } from "react-router-dom";
import list1 from "../images/list1.png";
import list2 from "../images/list2.png";
import list3 from "../images/list3.png";
import service from "../images/service.jpg";
export default function HomeList() {
  return (
    <div
      style={{
        backgroundColor:"tan"
      }}
    >

      <h2 style={{color:"white",fontSize:70,textAlign:'center'}}>SERVICE</h2>
      <Box
        sx={{
          marginRight: 5,
          marginTop: 0,
          borderRadius: "10px",
          borderRadius: "10px",
        }}
      >
        <List
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Link to="/Test" style={{ textDecoration: "none" }}>
            <ListItem>
              <ListItemButton>
                <img
                  src={list1}
                  alt="Image 1"
                  style={{ width: "300px", height: "300px" }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/Main" style={{ textDecoration: "none" }}>
            <ListItem>
              <ListItemButton>
                <img
                  src={list2}
                  alt="Image 1"
                  style={{ width: "300px", height: "300px" }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="Explanation" style={{ textDecoration: "none" }}>
            <img
              src={list3}
              alt="Image 1"
              style={{
                marginLeft: 24,
                marginTop: 16,
                width: "300px",
                height: "300px",
              }}
            />
          </Link>
        </List>
      </Box>
    </div>
  );
}
