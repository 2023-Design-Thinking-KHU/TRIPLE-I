import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function Radio2() {
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
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="매우 낮은 수준"
            control={<Radio />}
            label="매우 낮은 수준"
          />

          <FormControlLabel
            value="낮은 수준"
            control={<Radio />}
            label="낮은 수준"
          />

          <FormControlLabel
            value="높은 수준"
            control={<Radio />}
            label="높은 수준"
          />

          <FormControlLabel
            value="매우 높은 수준"
            control={<Radio />}
            label="매우 높은 수준"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
