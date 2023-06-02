import HomeHeader from "./HomeHeader";
import AssessmentIcon from '@mui/icons-material/Assessment';
import { Divider } from "@mui/material";
import Table2 from "../component/Table2";
export default function Result() {
  return( 
  <div>
    <HomeHeader/>
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
            포트폴리오 결과
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
          fontSize: 30,
          position: "absolute",
          top: "25%",
          alignItems: "center",
          display: "flex",
          marginLeft: 140,
        }}
      >
      <h6 style={{ color: "gray" }}>포트폴리오 최적화는 투자자가 투자할<span style={{ color: "black" }}> 자산들의 조합을 최적화하여</span> 예상 <span style={{ color: "black" }}>수익률을 극대화</span>하거나 <span style={{ color: "black" }}>리스크를 최소화</span>하는 것을 말합니다.</h6>
      </div>
      <div
        style={{
          fontSize: 30,
          position: "absolute",
          top: "40%",
          alignItems: "center",
          display: "flex",
          marginLeft:150,
        }}
      >
      <Table2/>
      </div>
  </div>
  );
}
