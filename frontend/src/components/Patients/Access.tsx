import React from 'react'
import {
  Box,
  TextField,
  Button,
  Card,
  Stack,
  Typography

} from '@mui/material'
import { fontSize } from '@mui/system'
export default function Access() {
  return (

    <Card sx={{  display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '60px', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',background:'#F9F6EE' ,
    marginLeft:'9rem',width:'80%'
    }}>
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
    <Box marginTop={'2rem'} marginBottom={'2rem'}>
      {/* here we will have to use to show data from backend  */}
      <Stack
      direction='row'
      marginTop={'1rem'}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      >
      <Typography variant='h5'>Dr. Full Name</Typography>
      <Typography sx={{fontSize:'1.3rem'}}>0x29319c9436f4bC72E8b91f9E19afb0e1cA554748</Typography>
      <Button sx={{color:'red', border:'red' }} variant='outlined' color="error" >Remove Access</Button>
      </Stack>

      <Stack
      direction='row'
      marginTop={'1rem'}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      >
      <Typography variant='h5'>Dr. Full Name</Typography>
      <Typography sx={{fontSize:'1.3rem'}}>0x29319c9436f4bC72E8b91f9E19afb0e1cA554748</Typography>
      <Button sx={{color:'red', border:'red' }} variant='outlined' color="error" >Remove Access</Button>
      </Stack>
      <Stack
      direction='row'
      marginTop={'1rem'}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      >
      <Typography variant='h5'>Dr. Full Name</Typography>
      <Typography sx={{fontSize:'1.3rem'}}>0x29319c9436f4bC72E8b91f9E19afb0e1cA554748</Typography>
      <Button sx={{color:'red', border:'red' }} variant='outlined' color="error" >Remove Access</Button>
      </Stack>
      <Stack
      direction='row'
      marginTop={'1rem'}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      >
      <Typography variant='h5'>Dr. Full Name</Typography>
      <Typography sx={{fontSize:'1.3rem'}}>0x29319c9436f4bC72E8b91f9E19afb0e1cA554748</Typography>
      <Button sx={{color:'red', border:'red' }} variant='outlined' color="error" >Remove Access</Button>
      </Stack>
      

    </Box>
    </Stack>
    </Card>

  )
}
