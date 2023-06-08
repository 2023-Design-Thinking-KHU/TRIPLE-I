import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';

export default function Profit({onChange}) {
    const [selectedValue, setSelectedValue] = useState("");
    const handleRadioChange = (event) => {
        setSelectedValue(event.target.value);
        if (event.target.value === "0.2") {
          onChange(0.2);
        }
        if (event.target.value === "0.4") {
          onChange(0.4);
        }
        if (event.target.value === "0.6") {
          onChange(0.6);
        }
        if (event.target.value === "0.8") {
          onChange(0.8);
        }
        if (event.target.value === "1") {
          onChange(1);
        }
    
      };
  return (
    <div style={{ background: "#f5f5f5", padding: "0px", borderRadius: "4px",marginTop:-100,width:1226,marginLeft:150 }}>
    <FormControl >
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={handleRadioChange}
      >
        <FormControlLabel value="0.2" sx={{marginLeft:1}} control={<Radio />} label="0%~20%" />
        <span style={{ marginLeft: '70px' }}></span>
        <FormControlLabel value="0.4" control={<Radio />} label="20%~50%" />
        <span style={{ marginLeft: '80px' }}></span>
        <FormControlLabel value="0.6" control={<Radio />} label="50%~70%" />
        <span style={{ marginLeft: '80px' }}></span>
        <FormControlLabel value="0.8" control={<Radio />} label="70%~80%" />
        <span style={{ marginLeft: '80px' }}></span>
        <FormControlLabel value="1" control={<Radio />} label="100% 이상" />
      </RadioGroup>
    </FormControl>
    </div>
  );
}