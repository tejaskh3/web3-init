import React from 'react'
import {Button, Typography,Box,Stack  }from '@mui/material';
import Header from './Header';
import CoverImage from './CoverImage';

const sxStyle ={
  color:'red',
  width:300,

}
export default function Landing() {
  return (
    <div>
      <Stack mt={0}
      // direction="row" spacing={70}
      direction={{ xs: 'column', sm: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 80}}

      >
      <Header></Header>
      <Box sx={{ w: 30, mt: '4rem', ml:'4rem', display:'inline-block',positon: 'absolute', }}>
        <Stack
        mx={3} my={4}
         direction={{ xs: 'column', sm: 'row' }}
         spacing={{ xs: 1, sm: 2, md: 3 }}
         >
          <Button variant="contained" size='large'
          sx={{ fontSize: '1.2rem', padding:'.6rem 1.2rem' }}
          style={{ backgroundColor: 'rgb(0, 255, 119)' , boxShadow: "3px 3px 3px green"}}
          >
            Login
          </Button>
          <Button variant="contained"
          sx={{ fontSize: '1.2rem', padding:'0 1.2rem' }}
          style={{ backgroundColor: 'rgb(0, 255, 119)' }}
          >
            Register
          </Button>
        </Stack>
      </Box>
      </Stack>
      <CoverImage></CoverImage>
    </div>
  );
}
