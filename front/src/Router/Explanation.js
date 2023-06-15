import * as React from "react";
import HomeHeader from "./HomeHeader";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { Divider, Typography } from "@mui/material";
import img1 from "../images/04.jpg";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Money from "../images/money.png";
import "../component/MOD.css";
import img11 from "../images/11.png";
import img12 from "../images/12.png";
import img13 from "../images/13.png";
import img14 from "../images/14.png";
import img15 from "../images/15.png";
import img16 from "../images/16.png";
import img17 from "../images/17.png";
import img18 from "../images/18.png";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Explanation() {
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  const [open, setOpen] = useState(false);

  const state1 = useSelector((state) => state.state1);
  const state2 = useSelector((state) => state.state2);
  const state3 = useSelector((state) => state.state3);
  const state4 = useSelector((state) => state.state4);
  const state5 = useSelector((state) => state.state5);
  const state6 = useSelector((state) => state.state6);
  const state7 = useSelector((state) => state.state7);
  const state8 = useSelector((state) => state.state8);

  const handle1 = () => {
    dispatch({
      type: "UPDATE_state1",
      payload: true,
    });
    setOpen(true);
  };

  const handle2 = () => {
    dispatch({
      type: "UPDATE_state2",
      payload: true,
    });
    setOpen(true);
  };

  const handle3 = () => {
    dispatch({
      type: "UPDATE_state3",
      payload: true,
    });
    setOpen(true);
  };

  const handle4 = () => {
    dispatch({
      type: "UPDATE_state4",
      payload: true,
    });
    setOpen(true);
  };
  const handle5 = () => {
    dispatch({
      type: "UPDATE_state5",
      payload: true,
    });
    setOpen(true);
  };
  const handle6 = () => {
    dispatch({
      type: "UPDATE_state6",
      payload: true,
    });
    setOpen(true);
  };
  const handle7 = () => {
    dispatch({
      type: "UPDATE_state7",
      payload: true,
    });
    setOpen(true);
  };
  const handle8 = () => {
    dispatch({
      type: "UPDATE_state8",
      payload: true,
    });
    setOpen(true);
  };

  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch({
      type: "UPDATE_state1",
      payload: false,
    });
    dispatch({
      type: "UPDATE_state2",
      payload: false,
    });
    dispatch({
      type: "UPDATE_state3",
      payload: false,
    });
    dispatch({
      type: "UPDATE_state4",
      payload: false,
    });
    dispatch({
      type: "UPDATE_state5",
      payload: false,
    });
    dispatch({
      type: "UPDATE_state6",
      payload: false,
    });
    dispatch({
      type: "UPDATE_state7",
      payload: false,
    });
    dispatch({
      type: "UPDATE_state8",
      payload: false,
    });
    setOpen(false);
  };
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <div>
      {open && (
        <div className="modal-overlay2">
          <div className="modal12">
            <div className="modal-content2">
              {state1 === true ? <img src={img11} alt="Image 11" /> : null}
              {state2 === true ? <img src={img12} alt="Image 12" /> : null}
              {state3 === true ? <img src={img13} alt="Image 13" /> : null}
              {state4 === true ? <img src={img14} alt="Image 13" /> : null}
              {state5 === true ? <img src={img15} alt="Image 13" /> : null}
              {state6 === true ? <img src={img16} alt="Image 13" /> : null}
              {state7 === true ? <img src={img17} alt="Image 13" /> : null}
              {state8 === true ? <img src={img18} alt="Image 13" /> : null}
              <div style={{ marginLeft: 360 }}>
                <button onClick={handleClose}>확인</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <img
        src={img1}
        style={{ marginLeft: 140, marginTop: 94, height: 150 }}
      ></img>
      <HomeHeader />
      <div
        style={{
          fontSize: 30,
          position: "absolute",
          top: "18%",
          alignItems: "center",
          display: "flex",
        }}
      >
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}></ul>
      </div>
      <div
        style={{
          fontSize: 30,
          position: "absolute",
          marginTop: -80,
          alignItems: "center",
          display: "flex",
          marginLeft: 140,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          marginTop: 50,
          alignItems: "center",
          marginLeft: 140,
          border: "4px solid black",
          padding: 10,
          backgroundColor: "#F5DEB3",
        }}
      >
        <List component="nav" aria-label="secondary mailbox folder">
          <ListItemButton selected={selectedIndex === 0} onClick={handle1}>
            <Typography
              style={{
                fontSize: 30,
                textShadow: "10px 5px 4px rgba(0, 0, 0, 0.3)",
              }}
            >
              예금
            </Typography>
          </ListItemButton>
          <Divider
            sx={{
              backgroundColor: "gray",
              height: "100%",
              marginTop: "8px",
              width: "1300px",
              borderWidth: "1px", // 굵기를 2px로 설정
              borderStyle: "solid",
            }}
          />
          <ListItemButton selected={selectedIndex === 1} onClick={handle2}>
            <Typography
              style={{
                fontSize: 30,
                textShadow: "10px 5px 4px rgba(0, 0, 0, 0.3)",
              }}
            >
              적금
            </Typography>
          </ListItemButton>
          <Divider
            sx={{
              backgroundColor: "gray",
              height: "100%",
              marginTop: "8px",
              width: "1300px",
              borderWidth: "1px", // 굵기를 2px로 설정
              borderStyle: "solid",
            }}
          />
          <ListItemButton selected={selectedIndex === 2} onClick={handle3}>
            <Typography
              style={{
                fontSize: 30,
                textShadow: "10px 5px 4px rgba(0, 0, 0, 0.3)",
              }}
            >
              채권
            </Typography>
          </ListItemButton>
          <Divider
            sx={{
              backgroundColor: "gray",
              height: "100%",
              marginTop: "8px",
              width: "1300px",
              borderWidth: "1px", // 굵기를 2px로 설정
              borderStyle: "solid",
            }}
          />
          <ListItemButton selected={selectedIndex === 3} onClick={handle4}>
            <Typography
              style={{
                fontSize: 30,
                textShadow: "10px 5px 4px rgba(0, 0, 0, 0.3)",
              }}
            >
              주식
            </Typography>
          </ListItemButton>
          <Divider
            sx={{
              backgroundColor: "gray",
              height: "100%",
              marginTop: "8px",
              width: "1300px",
              borderWidth: "1px", // 굵기를 2px로 설정
              borderStyle: "solid",
            }}
          />
          <ListItemButton selected={selectedIndex === 4} onClick={handle5}>
            <Typography
              style={{
                fontSize: 30,
                textShadow: "10px 5px 4px rgba(0, 0, 0, 0.3)",
              }}
            >
              펀드
            </Typography>
          </ListItemButton>
          <Divider
            sx={{
              backgroundColor: "gray",
              height: "100%",
              marginTop: "8px",
              width: "1300px",
              borderWidth: "1px", // 굵기를 2px로 설정
              borderStyle: "solid",
            }}
          />
          <ListItemButton selected={selectedIndex === 5} onClick={handle6}>
            <Typography
              style={{
                fontSize: 30,
                textShadow: "10px 5px 4px rgba(0, 0, 0, 0.3)",
              }}
            >
              코인
            </Typography>
          </ListItemButton>
          <Divider
            sx={{
              backgroundColor: "gray",
              height: "100%",
              marginTop: "8px",
              width: "1300px",
              borderWidth: "1px", // 굵기를 2px로 설정
              borderStyle: "solid",
            }}
          />
          <ListItemButton selected={selectedIndex === 5} onClick={handle7}>
            <Typography
              style={{
                fontSize: 30,
                textShadow: "10px 5px 4px rgba(0, 0, 0, 0.3)",
              }}
            >
              파생상품
            </Typography>
          </ListItemButton>
          <Divider
            sx={{
              backgroundColor: "gray",
              height: "100%",
              marginTop: "8px",
              width: "1300px",
              borderWidth: "1px",
              borderStyle: "solid",
            }}
          />
          <ListItemButton selected={selectedIndex === 6} onClick={handle8}>
            <Typography
              style={{
                fontSize: 30,
                textShadow: "10px 5px 4px rgba(0, 0, 0, 0.3)",
              }}
            >
              부동산
            </Typography>
          </ListItemButton>
        </List>
      </div>
      <div
        style={{
          position: "absolute",
          top: "33%",
          alignItems: "center",
          marginLeft: 890,
        }}
      ></div>
    </div>
  );
}
