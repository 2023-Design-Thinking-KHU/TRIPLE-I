import HomeHeader from "./HomeHeader";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { Divider } from "@mui/material";
import Table2 from "../component/Table2";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { BallTriangle } from "react-loader-spinner";
import Donut from "../component/Donut";
import Piechart from "../component/Donut";
export default function Result() {
  const [isLoading, setIsLoading] = useState(true);
  const [seconds, setSeconds] = useState(0);
  const username = useSelector((state) => state.username);
  const amount = useSelector((state) => state.amount);
  const importance = useSelector((state) => state.importance);
  const profit = useSelector((state) => state.profit);
  const risk = useSelector((state) => state.risk);
  const cleanedWeights = useSelector((state) => state.cleanedWeights);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = {
      name: username,
      amount: amount,
      importance: importance,
      risk: risk,
      profit: profit,
    };
console.log(data);
    try {
      const response = await fetch(
        "https://triplei.herokuapp.com/portfolio/portfolio/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const responseData = await response.json(); // JSON 형식으로 변환된 응답 데이터
        console.log(responseData);
        dispatch({
          type: "UPDATE_allocation",
          payload: responseData.allocation,
        });
        dispatch({
          type: "UPDATE_cleanedWeights",
          payload: responseData.cleaned_weights,
        });
        dispatch({
          type: "UPDATE_leftoverFunds",
          payload: responseData.leftover_funds,
        });
        dispatch({
          type: "UPDATE_expectedReturn",
          payload: responseData["예상 수익률"],
        });
        dispatch({
          type: "UPDATE_volatility",
          payload: responseData["연간 변동성"],
        });
        dispatch({
          type: "UPDATE_sharpIndex",
          payload: responseData["샤프 지수"],
          
        }
        );
        setIsLoading(false);
      } else {
        // POST 요청이 실패한 경우
        console.log("Failed to send data.");
        setIsLoading(false);
      }
    } catch (error) {
      console.log("Error occurred:", error);
      setIsLoading(false);
    }
  };
  return (
    <div>
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
        </div>{" "}
        {isLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              marginTop: "50px",
            }}
          >
            <BallTriangle color="green" height={250} width={250} />
          </div>
        ) : (
          <>
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
              <h6 style={{ color: "gray" }}>
                포트폴리오 최적화는 투자자가 투자할
                <span style={{ color: "black" }}>
                  {" "}
                  자산들의 조합을 최적화하여
                </span>{" "}
                예상 <span style={{ color: "black" }}>수익률을 극대화</span>
                하거나 <span style={{ color: "black" }}>리스크를 최소화</span>
                하는 것을 말합니다.
              </h6>
            </div>
            <div
              style={{
                fontSize: 30,
                position: "absolute",
                top: "40%",
                alignItems: "center",
                display: "flex",
                marginLeft: 120,
              }}
            >
              <Table2 />
            </div>
            <div style={{marginTop:370,marginLeft:700}}>
            <Piechart/>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
