import * as React from "react";
import HomeHeader from "./HomeHeader";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { Divider, Typography } from "@mui/material";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Money from "../images/money.png"
export default function Explanation() {
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <div>
      <HomeHeader />
      <div
        style={{
          fontSize: 30,
          position: "absolute",
          top: "20%",
          alignItems: "center",
          display: "flex",
        }}
      >
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <MonetizationOnIcon
            sx={{
              fontSize: 30,
              marginLeft: 17,
              marginTop: 3,
            }}
          />

          <li
            style={{
              display: "inline",
              listStyle: "none",
              paddingLeft: "1px",
              color: "black",
            }}
          >
            금융상품 설명 및 투자방법 안내
          </li>
          <Divider
            sx={{
              backgroundColor: "red",
              height: "100%",
              marginTop: "8px",
              width: "1480px",
              marginLeft: "140px",
              borderWidth: "2px", // 굵기를 2px로 설정
              borderStyle: "solid",
            }}
          />
        </ul>
      </div>
      <div
        style={{
          fontSize: 30,
          position: "absolute",
          top: "21%",
          alignItems: "center",
          display: "flex",
          marginLeft: 140,
        }}
      >
        <h6 style={{ fontSize: 35, color: "black" }}>투자상품</h6>
      </div>
      <div
        style={{
          position: "absolute",
          top: "40%",
          alignItems: "center",
          marginLeft: 140,
          border: "1px solid black",
          padding: 10,
        }}
      >
        <List component="nav" aria-label="secondary mailbox folder">
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
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
              backgroundColor: "black",
              height: "100%",
              marginTop: "8px",
              width: "700px",
              borderWidth: "1px", // 굵기를 2px로 설정
              borderStyle: "solid",
            }}
          />
          <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
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
              backgroundColor: "black",
              height: "100%",
              marginTop: "8px",
              width: "700px",
              borderWidth: "1px", // 굵기를 2px로 설정
              borderStyle: "solid",
            }}
          />
          <ListItemButton
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
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
              backgroundColor: "black",
              height: "100%",
              marginTop: "8px",
              width: "700px",
              borderWidth: "1px", // 굵기를 2px로 설정
              borderStyle: "solid",
            }}
          />
          <ListItemButton
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}
          >
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
              backgroundColor: "black",
              height: "100%",
              marginTop: "8px",
              width: "700px",
              borderWidth: "1px", // 굵기를 2px로 설정
              borderStyle: "solid",
            }}
          />
          <ListItemButton
            selected={selectedIndex === 4}
            onClick={(event) => handleListItemClick(event, 4)}
          >
            <Typography
              style={{
                fontSize: 30,
                textShadow: "10px 5px 4px rgba(0, 0, 0, 0.3)",
              }}
            >
              해외선물
            </Typography>
          </ListItemButton>
          <Divider
            sx={{
              backgroundColor: "black",
              height: "100%",
              marginTop: "8px",
              width: "700px",
              borderWidth: "1px", // 굵기를 2px로 설정
              borderStyle: "solid",
            }}
          />
          <ListItemButton
            selected={selectedIndex === 5}
            onClick={(event) => handleListItemClick(event, 5)}
          >
            <Typography
              style={{
                fontSize: 30,
                textShadow: "10px 5px 4px rgba(0, 0, 0, 0.3)",
              }}
            >
              펀드
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
      >
        <img
          src={Money}
          alt="Money"
          style={{ marginTop: 50, width: "550px", height: "440px" }}
        />
      </div>
    </div>
  );
}
