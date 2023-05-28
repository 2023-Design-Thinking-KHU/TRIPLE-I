import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Radio1() {
  return (
    <div style={{ background: "#f5f5f5", padding: "10px", borderRadius: "4px",marginTop:-40 }}>
    <FormControl >
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="6개월 이내" control={<Radio />} label="6개월 이내" />
        <span style={{ marginLeft: '80px' }}></span>
        <FormControlLabel value="6개월이상~ 1년 이내" control={<Radio />} label="6개월이상~ 1년 이내" />
        <span style={{ marginLeft: '80px' }}></span>
        <FormControlLabel value="1년 이상~2년 이내" control={<Radio />} label="1년 이상~2년 이내" />
        <span style={{ marginLeft: '80px' }}></span>
        <FormControlLabel value="2년 이상~3년 이내" control={<Radio />} label="2년 이상~3년 이내" />
        <span style={{ marginLeft: '80px' }}></span>
        <FormControlLabel value="3년이상" control={<Radio />} label="3년이상" />
      </RadioGroup>
    </FormControl>
    </div>
  );
}