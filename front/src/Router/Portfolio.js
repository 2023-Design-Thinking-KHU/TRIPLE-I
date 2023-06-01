import HomeHeader from "./HomeHeader";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { Divider, Box } from "@mui/material";
import Radio5 from "../component/Test5";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
export default function Portfolio() {
  const ariaLabel = { "aria-label": "description" };
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
          <AssessmentIcon
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
            위험선호도
          </li>
          <Divider
            sx={{
              backgroundColor: "red",
              height: "100%",
              marginTop: "8px",
              width: "1200px",
              marginLeft: "140px",
              borderWidth: "2px", // 굵기를 2px로 설정
              borderStyle: "solid",
            }}
          />
        </ul>
      </div>
      <div
        style={{
          fontSize: 25,
          position: "absolute",
          top: "32%",
          alignItems: "center",
          display: "flex",
          marginLeft: 155,
        }}
      >
        투자가능금액:
      </div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 5 },
          marginTop: 25,
          marginLeft: 35,
        }}
        noValidate
        autoComplete="off"
      >
        <Input placeholder="금액을 입력하세요." inputProps={ariaLabel} />
      </Box>
      <div
        style={{
          fontSize: 30,
          position: "absolute",
          top: "43%",
          alignItems: "center",
          display: "flex",
          marginLeft: 150,
        }}
      >
        <Radio5 />
      </div>
      <div
        style={{
          fontSize: 30,
          position: "absolute",
          top: "100%",
          alignItems: "center",
          display: "flex",
          marginLeft: 670,
        }}
      >
        <Link to="/Result">
          <Button sx={{ fontSize: 30 }} variant="contained">
            결과보기
          </Button>
        </Link>
      </div>
    </div>
  );
}
