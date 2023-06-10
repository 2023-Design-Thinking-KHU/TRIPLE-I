import HomeHeader from "./HomeHeader";
import HomeList from "./HomeList";
import Home from "../images/Home.png";
import Note from "../images/Note.jpg"
import { Link } from "react-router-dom";
import list3 from "../images/list3.png"
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

export default function HomePage() {
  return (
    <>
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            flex: 1,
            backgroundImage: `url(${Home})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <HomeHeader />
            <div style={{ display: "flex", justifyContent: "center" }}>
          <Link
          to="Explanation"
          style={{ textDecoration: "none",marginLeft:50,marginTop:100 }}
        >
            <img src={list3} alt="Image 1" style={{width: "300px",height:"300px" }} />
        </Link>
          </div>
          </div>
          <div style={{marginTop:10,marginLeft:700}}>
          <HomeList/>
          </div>
        </div>
      </div>
    </>
  );
}
