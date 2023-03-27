import React from 'react';
import { Box, Stack } from '@mui/material';
import PatientRecord from './images/PatientRecord.jpg';
export default function Description() {
  return (
    <Box
      sx={{
        display: 'inline-block',
        position: 'absolute',
        right: '20px',
        width: '800px',
        height: '400px',
        // backgroundImage: 'url(PatientRecord)',
        color: 'red'
      }}
    >
      <Stack
      direction={{ xs: 'column', sm: 'row' }} spacing={2}
      >
        <Stack
      direction="column" spacing={2}
        >
          <h1>hii There</h1>
          <h1>hii There</h1>
        </Stack>
        <img src={PatientRecord} alt="Patient Record" />
      </Stack>
    </Box>
  );
}
