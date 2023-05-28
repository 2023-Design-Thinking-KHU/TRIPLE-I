import HomeHeader from "./HomeHeader";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Radio1 from "../component/Test1";
import Radio2 from "../component/Test2"; 
import Radio3 from "../component/Test3";
import Radio4 from "../component/Test4";
import Button from '@mui/material/Button';

export default function TestPage() {
  return (
    <div>
      <HomeHeader  />
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
          <AttachMoneyIcon
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
            투자성향 진단
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
          top: "30%",
          alignItems: "center",
          display: "flex",
          marginLeft: 140,
        }}
      >
        <div>
          <h6>
            01.고객님께서 투자하고자 하는 자금의 투자가능기간은 얼마나 되십니까?
          </h6>
          <Radio1 />
        </div>
      </div>
      <div
        style={{
          fontSize: 30,
          position: "absolute",
          top: "50%",
          alignItems: "center",
          display: "flex",
          marginLeft: 140,
        }}
      >
        <div>
          <h6>
            02.고객님께서는 금융상품 투자에 대한 본인의 지식수준이 어느 정도라고 생각하십니까?
          </h6>
          <Radio2/>
        </div>
      </div>
      <div
        style={{
          fontSize: 30,
          position: "absolute",
          top: "85%",
          alignItems: "center",
          display: "flex",
          marginLeft: 140,
        }}
      >
        <div>
          <h6>
           03.고객님께서 투자하고자 하는 자금은 고객님의 전체 금융자산(부동산 등을 제외) 중 어느 정도의 비중을 차지합니까?
          </h6>
          <Radio3/>
        </div>
      </div> 
      <div
        style={{
          fontSize: 30,
          position: "absolute",
          top: "105%",
          alignItems: "center",
          display: "flex",
          marginLeft: 140,
        }}
      >
        <div>
          <h6>
          04.다음 중 고객님의 수입원을 가장 잘 나타내는 것은 어느 것 입니까?
          </h6>
          <Radio4/>
        </div>  
        </div>
        <div
        style={{
          fontSize: 30,
          position: "absolute",
          top: "145%",
          alignItems: "center",
          display: "flex",
          marginLeft: 700,
        }}
      >
        <Button sx={{fontSize:30}}variant="contained">결과보기</Button> 
        </div>
    </div>
  );
}
