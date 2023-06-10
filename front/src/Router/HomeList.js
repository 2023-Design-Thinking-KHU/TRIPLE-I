import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Link } from "react-router-dom";
import list1 from "../images/list1.png"
import list2 from "../images/list2.png"
import list3 from "../images/list3.png"

export default function HomeList() {

  return (
    <Box
    sx={{
     
      marginTop: 10,
      borderRadius: "10px",
    }}
    >
      <List
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}>
        
      <Link
          to="/Test"
          style={{ textDecoration: "none" }}
        >
          <ListItem
          >
            <ListItemButton>
            <img src={list1} alt="Image 1" style={{width: "300px",height:"300px" }} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link
          to="/Main"
          style={{ textDecoration: "none" }}
        >
          <ListItem
          >
            <ListItemButton>
            <img src={list2} alt="Image 1" style={{width: "300px",height:"300px" }} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );
}
