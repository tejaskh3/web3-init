import React from 'react';
import { Box, TextField, Button, Card, Stack, Typography } from '@mui/material';

export default function Recrod() {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '55%',
        left: '50%',
        width: '60%',
        transform: 'translate(-50%, -50%)',
        justifyContent: 'center',
        padding: '5px',
        border: '#2b4e71 solid 2px ',
        textAlign: 'center',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        background: '#F9F6EE',
        marginBottom: '3rem'
      }}
    >
      <Typography sx={{position:'absolute', left:'10px',}} variant ='h5'>DATE </Typography>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 14 }}
        marginBottom="2rem"
        marginTop="2rem"
      >
        <Typography marginTop={'1rem'} variant="h6">
          Symptops
        </Typography>
        <ul>
          <li>cough</li>
          <li>fever</li>
          <li>canver</li>
        </ul>
      </Stack>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        marginBottom="2rem"
        spacing={{ xs: 1, sm: 2, md: 14 }}
      >
        <Typography marginTop={'1rem'} variant="h6">
          Diagnosis
        </Typography>
        <ul>
          <li>Over-the-counter pain relievers to reduce fever and relieve </li>
          <li>fever Oxygen therapy (if oxygen levels are low)</li>
          <li>canver Oxygen therapy (if oxygen levels are low)</li>
        </ul>
      </Stack>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 14 }}
        marginBottom="2rem"
      >
        <Typography marginTop={'1rem'} variant="h6">
          Report
        </Typography>
        <ul>
          <Button
            variant="contained"
            // sx={{ fontSize: '1.2rem', padding: '.6rem 1.2rem' }}
            style={{
              display: 'inline',
              marginLeft: '0px',
              backgroundColor: 'rgb(63, 125, 92)',
              boxShadow: '3px 3px 3px green',
              marginTop: '10px'
            }}
          >
            Blood Report
          </Button>
          <Button
            variant="contained"
            // sx={{ fontSize: '1.2rem', padding: '.6rem 1.2rem' }}
            style={{
              display: 'inline',
              marginLeft: '10px',
              backgroundColor: 'rgb(63, 125, 92)',
              boxShadow: '3px 3px 3px green',
              marginTop: '10px'
            }}
          >
            Endoscopy Report
          </Button>
        </ul>
      </Stack>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 14 }}
        marginBottom="2rem"
      >
        <Typography marginTop={'1rem'} variant="h6">
          Medications
        </Typography>
        <ul>
          <li>
            Amoxicillin - take 500mg orally three times a day for 7-10 days
          </li>
          <li>
            Acetaminophen - take 500mg orally every 6 hours as needed for fever
            and pain
          </li>
          <li>
            Codeine cough syrup - take 10-20 ml orally every 4-6 hours as needed
            for cough
          </li>
        </ul>
      </Stack>
    </Box>
  );
}
