import React from 'react';
import {
  Card,
  Typography,
  Radio,
  Stack,
  Box,
  Button,
  FormControl,
  RadioGroup,
  FormControlLabel
} from '@mui/material';
export default function Popup() {
  return (
    <Card
      variant="outlined"
      // sx={{ position:'inline-block' ,margin: 'auto', justifyContent: 'center' }}
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '300px',
        transform: 'translate(-50%, -50%)',
        justifyContent: 'center',
        padding: '5px',
        border: '#2b4e71 solid 2px ',
        textAlign: 'center',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        background:'#F9F6EE'

      }}
    >
      <Box sx={{ color: '#2b4e71' }}>
        <Typography variant="h2">Sign Up</Typography>
        <Typography variant="h5" color={'black'}>
          Register as
        </Typography>
      </Box>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Doctor" />
          <FormControlLabel value="male" control={<Radio />} label="Patient" />
        </RadioGroup>
      </FormControl>
      <Button
        variant="contained"
        sx={{ fontSize: '1.2rem', padding: '.6rem 1.2rem' }}
        style={{
          backgroundColor: 'rgb(34, 139, 34)',
          boxShadow: '3px 3px 3px green',
          margin: '3px'
        }}
      >
        Continue
      </Button>
    </Card>
  );
}
