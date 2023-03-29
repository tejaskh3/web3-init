import React from 'react';
import {
  FormControl,
  FormLabel,
  TextField,
  Button,
  Box,
  Typography,
  Input,
  Stack
} from '@mui/material';

export default function AddRecords() {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '56%',
        left: '50%',
        width: '60%',
        transform: 'translate(-50%, -50%)',
        justifyContent: 'center',
        padding: '5px',
        border: '#2b4e71 solid 2px ',
        textAlign: 'center',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        background: '#F9F6EE',
        marginBottom:'3rem'
      }}
    >
      <FormControl>
        <Typography variant="h3">Add Records</Typography>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          marginTop="1rem"
        >
          <Typography marginTop={'1rem'} variant="h6">
            Symptoms
          </Typography>
          <TextField
          fullWidth
          label="Symptoms"
          id="fullWidth"
          sx={{ margin: '3px' }}
        />
        </Stack>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          marginTop="1rem"
        >
        <Typography marginTop={'1rem'} variant="h6">
            Diagnosis
          </Typography>
        <TextField
          fullWidth
          label="Diagnosis"
          id="fullWidth"
          sx={{ margin: '3px' }}
        />
        </Stack>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          marginTop="1rem"
        >
        <Typography marginTop={'1rem'} variant="h6">
            Treatment
          </Typography>
        <TextField
          fullWidth
          label="Treatment"
          id="fullWidth"
          sx={{ margin: '3px' }}
        />
        </Stack>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          marginTop="1rem"
        >
        <Typography marginTop={'1rem'} variant="h6">
            Reports
          </Typography>
        <Input
          fullWidth
          // label="Report"
          type="file"
          // id="fullWidth"
          // sx={{ margin: '3px' }}
        />
        </Stack>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          marginTop="1rem"
        >
        <Typography marginTop={'1rem'}  variant="h6">
            Medications
          </Typography>
        <Input
          fullWidth
          // label="Report"
          type="file"
          id="fullWidth"
          sx={{ margin: '3px' }}
        />
        </Stack>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          marginTop="1rem"
        >
        <Typography marginTop={'1rem'} variant="h6">
            Hospital
          </Typography>
        <TextField
          fullWidth
          label="Hospital"
          id="fullWidth"
          sx={{ margin: '3px' }}
        />
        </Stack>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          marginTop="1rem"
        >
        <Typography marginTop={'1rem'} variant="h6">
            Start Date
          </Typography>
        <Input
          fullWidth
          type='date'
          id="fullWidth"
          sx={{ margin: '3px' }}
        />
        </Stack>

      </FormControl>
      <Button
        variant="contained"
        sx={{ fontSize: '1.2rem', padding: '.6rem 1.2rem' }}
        style={{
          display:'block',
          margin:'auto',
          backgroundColor: 'rgb(0, 255, 119)',
          boxShadow: '3px 3px 3px green',
          marginTop: '10px'
        }}
      >
        Add Recorde
      </Button>
    </Box>
  );
}
