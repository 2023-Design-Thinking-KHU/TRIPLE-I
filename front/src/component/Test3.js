import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useDispatch,useSelector } from "react-redux";
export default function Radio3() {
  const dispatch=useDispatch();
  const handleChange = (event) => {
    const value = event.target.value;
    dispatch({
      type: "UPDATE_sum3",
      payload: value,
    });
  };
  return (
    <div style={{ background: "#f5f5f5", padding: "10px", borderRadius: "4px",marginTop:-40 }}>
    <FormControl >
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={handleChange}
      >
        <FormControlLabel value="1" control={<Radio />} label="원금에 손실을 보면 안된다" />
        <span style={{ marginLeft: '80px' }}></span>
        <FormControlLabel value="2" control={<Radio />} label="-25% 이내" />
        <span style={{ marginLeft: '80px' }}></span>
        <FormControlLabel value="3" control={<Radio />} label=" -50% 이내" />
        <span style={{ marginLeft: '80px' }}></span>
        <FormControlLabel value="4" control={<Radio />} label=" -75%" />
        <span style={{ marginLeft: '80px' }}></span>
        <FormControlLabel value="5" control={<Radio />} label="상관 없다 
" />
      </RadioGroup>
    </FormControl>
    </div>
  );
}