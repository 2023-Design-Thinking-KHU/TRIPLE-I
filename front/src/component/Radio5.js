import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";

export default function Radio5({ onChange }) {
  const [selectedValue, setSelectedValue] = useState("");
  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
    if (event.target.value === "안정형") {
      onChange(0.2);
    }
    if (event.target.value === "안정추구형") {
      onChange(0.4);
    }
    if (event.target.value === "위험중립형") {
      onChange(0.6);
    }
    if (event.target.value === "적극투자형") {
      onChange(0.8);
    }
    if (event.target.value === "공격투자형") {
      onChange(1);
    }

  };
  return (
    <div
      style={{
        background: "#f5f5f5",
        paddingLeft: "20px",
        borderRadius: "4px",
        marginTop: -40,
        flexDirection: "column",
      }}
    >
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          onChange={handleRadioChange}
        >
          <FormControlLabel value="안정형" control={<Radio/>} label="안정형" />
          <span style={{ fontSize: "15px" }}>
            예금 또는 적금 수준의 수익률을 기대하며, 투자원금에 손실이 발생하는
            것을 원하지 않음
            <br />
            <br />
          </span>
          <FormControlLabel
            value="안정추구형"
            control={<Radio />}
            label="안정추구형"
          />
          <span style={{ fontSize: "15px" }}>
            투자원금의 손실위험은 최소화하고, 이자소득이나 배당소득 수준의
            안정적인 투자를 목표로 함. 다만, 수익을 위해 단기적인 손실을 수용할
            수 있으며, 예/적금보다 높은 수익을 <br />
            위해 자산 중 일부를 변동성 높은 상품에 투자할 의향이 있음
            <br />
            <br />
          </span>
          <FormControlLabel
            value="위험중립형"
            control={<Radio />}
            label="위험중립형"
          />
          <span style={{ fontSize: "15px" }}>
            투자에는 그에 상응하는 투자위험이 있음을 충분히 인식하고 있으며,
            예/적금보다 높은 수익을 기대할 수 있다면 일정수준의 손실위험을
            감수할 수 있음
            <br />
            <br />
          </span>
          <FormControlLabel
            value="적극투자형"
            control={<Radio />}
            label="적극투자형"
          />

          <span style={{ fontSize: "15px" }}>
            투자원금의 보전보다는 위험을 감내하더라도 높은 수준의 투자수익
            실현을 추구함. 투자자금의 상당 부분을 주식, 주식형펀드 또는 파생상품
            등의 위험자산에 투자할 의향이 있음
            <br />
            <br />
          </span>
          <FormControlLabel
            value="공격투자형"
            control={<Radio />}
            label="공격투자형"
          />
          <span style={{ fontSize: "15px" }}>
            시장평균 수익률을 훨씬 넘어서는 높은 수준의 투자수익을 추구하며,
            이를 위해 자산가치의 변동에 따른 손실 위험을 적극 수용. 투자자금
            대부분을 주식, 주식형펀드 또는 파생상품
            <br /> 등의 위험자산에 투자할 의향이 있음
          </span>
        </RadioGroup>
      </FormControl>
    </div>
  );
}
