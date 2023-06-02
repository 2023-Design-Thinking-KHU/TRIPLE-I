import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Radio3() {
  return (
    <div style={{ background: "#f5f5f5", padding: "10px", borderRadius: "4px",marginTop:-40 }}>
    <FormControl >
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="10% 이내" control={<Radio />} label="10% 이내" />
        <span style={{ marginLeft: '80px' }}></span>
        <FormControlLabel value="10% 초과~20% 이내" control={<Radio />} label="10% 초과 ~ 20% 이내" />
        <span style={{ marginLeft: '80px' }}></span>
        <FormControlLabel value="20% 초과~30% 이내" control={<Radio />} label="20% 초과 ~ 30% 이내" />
        <span style={{ marginLeft: '80px' }}></span>
        <FormControlLabel value="30% 초과~40% 이내" control={<Radio />} label="30% 초과 ~ 40% 이내" />
        <span style={{ marginLeft: '80px' }}></span>
        <FormControlLabel value="40% 이상" control={<Radio />} label="40% 이상" />
      </RadioGroup>
    </FormControl>
    </div>
  );
}