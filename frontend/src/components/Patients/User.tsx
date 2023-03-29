// import React from 'react'
// import {
//   Box,
//   Typography,
//   Stack,
//   Paper,

// } from '@mui/material'
// import { styled } from '@mui/material/styles';
// import { relative } from 'path';
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// export default function First() {
//   return (
//     <Box>
//       <Box
//       sx={{
//         position:'absolute',
//         right:'3rem'
//       }}
//       >
//         0xijofihgfiehghoeghohogrg
//       </Box>
//       <Stack
//       marginLeft={'600px'}
//       marginTop={'20px'}
//       direction={{ xs: 'column', sm: 'row' }}
//       spacing={{ xs: 1, sm: 2, md: 4 }}

//       >
//         <Item>Home</Item>
//   <Item >Access</Item>
//   <Item>Track Records</Item>
//       </Stack>
//     </Box>
//   )
// }

import React from 'react'
import {
  Box,
  Typography,
  Stack,
  Paper,

} from '@mui/material'
import { styled } from '@mui/material/styles';
import { relative } from 'path';
import Header from './Header';
import Home from './Home';
import Access from './Access';
import Records from './Records';
import Record from './Record';
import AddRecords from './AddRecords';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function First() {
  return (
    <>
    <Header></Header>
     {/* <Home></Home> */}
      {/* <Access></Access> */}
      {/* <AddRecords></AddRecords> */}
    <Records></Records>

    </>


  )
}
