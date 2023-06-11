import HomeHeader from "./HomeHeader";
import HomeList from "./HomeList";
import Home from "../images/Home.png";
import Note from "../images/Note.jpg"
import { Link } from "react-router-dom";
import list3 from "../images/list3.png"
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import service from "../images/service.jpg"
import about from "../images/about.jpg"
export default function HomePage() {
  return (
    <>
      <div
        style={{
          display: "flex",
          height: "100vh",
        }}
      >
        <div
          style={{
            flex: 1,
            backgroundImage: `url(${Home})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <HomeHeader />
          </div>
          <div style={{ flex: 1, width: 1100, marginTop: 880 }}>
            <HomeList />
          </div>  
        </div>
      </div>
    </>
  );
  
}
