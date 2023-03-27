import React from 'react';
import { FormControl, FormLabel, TextField, Button, Box, Typography } from '@mui/material';
export default function DoctorRegister() {
  return (
    <Box
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
        background:'#F9F6EE',


    }}
    >
    <FormControl>
      <Typography variant='h3'>Register</Typography>
      <TextField fullWidth label="Full Name" id="fullWidth"
      sx={{margin:'5px' }}
      />
      <TextField fullWidth label="Age" id="fullWidth"
      sx={{margin:'3px'}}
      />
      <TextField fullWidth label="gender" id="fullWidth"
      sx={{margin:'3px'}}
      />
      <TextField fullWidth label="Wallet Address" id="fullWidth"
      sx={{margin:'3px'}}
      />
      <TextField fullWidth label="email" id="fullWidth"
      sx={{margin:'3px'}}
      />
      <TextField fullWidth label="Password" id="fullWidth"
      sx={{margin:'3px'}}
      />
      <TextField fullWidth label="Password" id="fullWidth"
      sx={{margin:'3px'}}
      />


    </FormControl>
    <Button  variant="contained"
        sx={{ fontSize: '1.2rem', padding: '.6rem 1.2rem' }}
        style={{
          backgroundColor: 'rgb(0, 255, 119)',
          boxShadow: '3px 3px 3px green',
          margin: '3px'
        }}
      >
        Continue
      </Button>
    </Box>
  );
}
