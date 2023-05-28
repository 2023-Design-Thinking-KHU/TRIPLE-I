import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function Radio4() {
  return (
    <div
      style={{
        background: "#f5f5f5",
        paddingLeft:"20px", 
        borderRadius: "4px",
        marginTop: -40,
        backgroundSize: "200% auto",
        flexDirection: "column",
      }}
    >
      <FormControl  >
        <RadioGroup
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="column-radio-buttons-group"
        >
          <FormControlLabel
            value="1"
            control={<Radio />}
            label="현재 일정한 수입이 발생하고 있으며, 향후 현재 수준을 유지하거나 증가할 것으로 예상"
          />

          <FormControlLabel
            value="2"
            control={<Radio />}
            label="현재 일정한 수입이 발생하고 있으나, 향후 감소하거나 불안정할 것으로 예상"
          />

          <FormControlLabel
            value="3"
            control={<Radio />}
            label="현재 일정한 수입이 발생하고 있으나, 향후 감소하거나 불안정할 것으로 예상"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
