import HomeHeader from "./HomeHeader";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Radio1 from "../component/Test1";
import Radio2 from "../component/Test2";
import Radio3 from "../component/Test3";
import Radio4 from "../component/Test4";
import Radio5 from "../component/Test5";
import Radio6 from "../component/Test6";
import Radio7 from "../component/Test7";
import Radio8 from "../component/Test8";
import Radio9 from "../component/Test9";
import Radio10 from "../component/Test10";
import Radio11 from "../component/Test11";
import Radio12 from "../component/Test12";
import Button from "@mui/material/Button";
import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import img4 from "../images/4.png";
import img5 from "../images/5.png";
import img6 from "../images/01.jpg"
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import * as React from "react";
import "../component/Modal1.css";
import Modal from "@mui/material/Modal";
import CancelIcon from "@mui/icons-material/Cancel";
export default function TestPage() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  const danger = useSelector((state) => state.danger);
  const correct = useSelector((state) => state.correct);

  const sum1 = useSelector((state) => state.sum1);
  const sum2 = useSelector((state) => state.sum2);
  const sum3 = useSelector((state) => state.sum3);
  const sum4 = useSelector((state) => state.sum4);
  const sum5 = useSelector((state) => state.sum5);
  const sum6 = useSelector((state) => state.sum6);
  const sum7 = useSelector((state) => state.sum7);
  const sum8 = useSelector((state) => state.sum8);
  const sum9 = useSelector((state) => state.sum9);
  const sum10 = useSelector((state) => state.sum10);
  const sum11 = useSelector((state) => state.sum11);
  const sum12 = useSelector((state) => state.sum12);

  const handlesubmit = () => {
    const sum1Num = parseInt(sum1);
    const sum2Num = parseInt(sum2);
    const sum3Num = parseInt(sum3);
    const sum4Num = parseInt(sum4);
    const sum5Num = parseInt(sum5);
    const sum6Num = parseInt(sum6);
    const sum7Num = parseInt(sum7);
    const sum8Num = parseInt(sum8);
    const sum9Num = parseInt(sum9);
    const sum10Num = parseInt(sum10);
    const sum11Num = parseInt(sum11);
    const sum12Num = parseInt(sum12);

    const danger = Math.floor(
      (sum1Num +
        sum2Num +
        sum3Num +
        sum4Num +
        sum6Num +
        sum7Num +
        sum8Num +
        sum9Num +
        sum10Num +
        sum11Num +
        sum12Num) /
        11
    );
    const correct = Math.floor((sum3Num + sum5Num + sum6Num + sum9Num) / 4);
    if(4<=correct){
      dispatch({
        type: "UPDATE_danger",
        payload: 0,
      })
    }
    dispatch({
      type: "UPDATE_danger",
      payload: danger,
    });
    dispatch({
      type: "UPDATE_correct",
      payload: correct,
    });
  };

  return (
    <div>
      {open && (
        <div className="modal-overlay2">
          <div className="modal2">
            <div className="modal-content2">
              {4 <= correct  ? (
                <>
                <h2 style={{textAlign:'center'}}>투자 부적합</h2>
                <CancelIcon style={{ color: 'red', fontSize: 100, marginBottom:10,marginLeft:145 }} />
                </>
              ) : (
                <>
                  <h4>당신의 투자 성향은!</h4>
                  {danger === 1 && <img src={img5} alt="Result" />}
                  {danger === 2 && <img src={img4} alt="Result" />}
                  {danger === 3 && <img src={img3} alt="Result" />}
                  {danger === 4 && <img src={img2} alt="Result" />}
                  {danger !== 1 &&
                    danger !== 2 &&
                    danger !== 3 &&
                    danger !== 4 && <img src={img1} alt="Result" />}
                </>
              )}
              <div style={{ marginLeft: 160 }}>
                <Link to="/">
                  <button onClick={handleClose}>확인</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    <img src={img6} style={{marginLeft:140,marginTop:94,height:150}}></img>
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
          <Divider
            sx={{
              backgroundColor: "red",
              height: "100%",
              marginTop: "8px",
              width: "1200px",
              marginTop:13,
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
          <h6>01.현재 연령이 어떻게 되시나요?</h6>
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
          <h6>02.투자하고자 하는 자금의 투자 가능 기간은 얼마나 됩니까?</h6>
          <Radio2 />
        </div>
      </div>
      <div
        style={{
          fontSize: 30,
          position: "absolute",
          top: "88%",
          alignItems: "center",
          display: "flex",
          marginLeft: 140,
        }}
      >
        <div>
          <h6>
            03.만약 투자원금에 손실이 발생할 경우, 다음 중 감수할 수 있는 손실
            수준은 어느 정도입니까?  
          </h6>
          <Radio3 />
        </div>
      </div>
      <div
        style={{
          fontSize: 30,
          position: "absolute",
          top: "110%",
          alignItems: "center",
          display: "flex",
          marginLeft: 140,
        }}
      >
        <div>
          <h6>
            04.현재 투자하고자 하는 자금은 전체 금융자산(부동산 등을 제외한
            주식이나 채권, 예금, 신탁 등) 중 어느 정도의 비중을 차지합니까?
          </h6>
          <Radio4 />
        </div>
      </div>
      <div
        style={{
          fontSize: 30,
          position: "absolute",
          top: "146%",
          alignItems: "center",
          display: "flex",
          marginLeft: 140,
        }}
      >
        <div>
          <h6>05.투자할 자금이 당신의 삶에 미치는 영향이 어느정도 인가요? </h6>
          <Radio5 />
        </div>
      </div>
      <div
        style={{
          fontSize: 30,
          position: "absolute",
          top: "190%",
          alignItems: "center",
          display: "flex",
          marginLeft: 140,
        }}
      >
        <div>
          <h6>
            06. 현재 가지고 있는 레버리지(빚)는 투자 자금에서 비중은 얼마인가요?
           
          </h6>
          <Radio6 />
        </div>
      </div>
      <div
        style={{
          fontSize: 30,
          position: "absolute",
          top: "230%",
          alignItems: "center",
          display: "flex",
          marginLeft: 140,
        }}
      >
        <div>
          <h6>07. 투자 결정에 대해 직관이 어느정도로 관여하시나요?</h6>
          <Radio7 />
        </div>
      </div>
      <div
        style={{
          fontSize: 30,
          position: "absolute",
          top: "269%",
          alignItems: "center",
          display: "flex",
          marginLeft: 140,
        }}
      >
        <div>
          <h6>08.현재 소유하고 있는 다른 금융 상품이 있나요?</h6>
          <Radio8 />
        </div>
      </div>
      <div
        style={{
          fontSize: 30,
          position: "absolute",
          top: "308%",
          alignItems: "center",
          display: "flex",
          marginLeft: 140,
        }}
      >
        <div>
          <h6>09.당신의 투자할 금액은 소득의 몇 %인가요?</h6>
          <Radio9 />
        </div>
      </div>
      <div
        style={{
          fontSize: 30,
          position: "absolute",
          top: "350%",
          alignItems: "center",
          display: "flex",
          marginLeft: 140,
        }}
      >
        <div>
          <h6>
            10. 주식을 매수한다면, 소형주 대비 우량주 선호도가 어떻게 되시나요?
          </h6>
          <Radio10 />
        </div>
      </div>
      <div
        style={{
          fontSize: 30,
          position: "absolute",
          top: "390%",
          alignItems: "center",
          display: "flex",
          marginLeft: 140,
        }}
      >
        <div>
          <h6>
            11. 주식을 매수한다면, 세계 경제 흐름, 환율, 유가 등을 얼마나
            고려하시나요?
          </h6>
          <Radio11 />
        </div>
      </div>
      <div
        style={{
          fontSize: 30,
          position: "absolute",
          top: "430%",
          alignItems: "center",
          display: "flex",
          marginLeft: 140,
        }}
      >
        <div>
          <h6>
            12. 주식을 매수하고 싶은 종목이 있을 때, 해당 브랜드의 사용 경험이
            얼마나 영향을 미치나요?
          </h6>
          <Radio12 />
        </div>
      </div>
      <div
        style={{
          fontSize: 30,
          position: "absolute",
          top: "480%",
          alignItems: "center",
          display: "flex",
          marginLeft: 500,
        }}
      >
        <Button onClick={handlesubmit} sx={{ fontSize: 30 }} variant="outlined">
          결과저장
        </Button>
      </div>
      <div
        style={{
          fontSize: 30,
          position: "absolute",
          top: "480%",
          alignItems: "center",
          display: "flex",
          marginLeft: 800,
        }}
      >
        <Button onClick={handleOpen} sx={{ fontSize: 30 }} variant="contained">
          결과보기
        </Button>
      </div>
    </div>
  );
}
