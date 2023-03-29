import React from 'react'
import {
  Box,
  TextField,
  Button,
  Card,
  Stack

} from '@mui/material'
export default function Access() {
  return (
    <>
    <Card sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '60px' }}>
      <Stack>
      <Box padding={1}>
      <TextField label="Enter Doctor's address"  variant="outlined" sx={{ marginRight: '10px' ,width:'600px'}} />
      <Button  variant="contained"
        sx={{ fontSize: '1.2rem', padding: '.6rem 1.2rem' }}
        style={{
          backgroundColor: 'rgb(0, 255, 119)',
          boxShadow: '3px 3px 3px green',
          margin: '3px'
        }}
      >Provide Access</Button>
      </Box>
    <Box>
      
    </Box>
    </Stack>
    </Card>
    </>
  )
}
