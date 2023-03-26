import React from 'react'
import {Box, Typography} from '@mui/material'
export default function Header() {
  return (
      <Box
      sx={{ml:'10%', mt:'1.5rem',color:'teal',width:'100%'}}
      >
        <Typography variant='h2'

        >
          Healtrack
        </Typography>
        <Typography variant='h6'
        sx={{ml:'20%',color:'teal'}}
        >
          A path for healtheir track.....
        </Typography>
      </Box>
  )
}

