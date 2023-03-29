// import React from 'react'

// export default function Header() {
//   return (
//     <div>Header</div>
//   )
// }

// import React from 'react';
// import { AppBar, Toolbar, Button } from '@mui/material';
// import { makeStyles } from '@mui/material/styles';
// import { useTheme } from '@mui/material/styles';

// const useStyles = makeStyles((theme : Theme) => ({
//   appBar: {
//     backgroundColor: '#fff',
//     boxShadow: 'none',
//   },
//   circle: {
//     width: '40px',
//     height: '40px',
//     borderRadius: '50%',
//     backgroundColor: '#4caf50',
//     marginRight: '30px',
//     marginTop: '40px',
//   },
//   title: {
//     flexGrow: 1,
//     textAlign: 'center',
//   },
//   button: {
//     margin: 'auto',
//     width: '150px',
//   },
// }));

// export default function Header() {
//   const classes = useStyles();

//   return (
//     <AppBar position="static" className={classes.appBar}>
//       <Toolbar>
//         <div className={classes.circle}></div>
//         <div className={classes.title}></div>
//         <div className={classes.button}>
//           <Button color="primary">Home</Button>
//           <Button color="primary">Access</Button>
//           <Button color="primary">Records</Button>
//         </div>
//       </Toolbar>
//     </AppBar>
//   );
// }


import React from 'react';
import { AppBar, Toolbar, Button, Stack} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

const Circle = styled('div')({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: '#4caf50',
  marginRight: '30px',
  display:'inline-block',
  marginTop: '4px',
});

const Title = styled('div')({
  flexGrow: 1,
  textAlign: 'center',
  color:'gray',
  fontSize:'2rem',
  position:'absolute',
  left:'70px',
  display:'inline-block'
});
const Left = styled('div')({
  flexGrow: 1,
  textAlign: 'center',
  color:'gray',
  fontSize:'2rem',
  position:'absolute',
  left:'70px'
});

const ButtonContainer = styled('div')({

});

export default function Header() {
  return (
    <AppBar position="static" sx={{background:'#F9F6EE', boxShadow: '0 4px 6px -6px #000' }}>
      <Toolbar>
        <Stack
         spacing={{ xs: 10, sm: 130, md: 130 }}
        direction={{ xs: 'column', sm: 'row' }}
        >
        <Left>
        <Circle></Circle>
        <Title>0xdjfoigdsovonvo</Title>
        </Left>
        <ButtonContainer
        sx={{marginLeft:'auto'}}>
          <Button color="secondary"
          sx={{fontSize:'1rem'}}
          >Home</Button>
          <Button color="secondary"
          sx={{fontSize:'1rem'}}
          >Access</Button>
          <Button color="secondary"
          sx={{fontSize:'1rem'}}
          >Records</Button>
          <Button color="secondary"
          sx={{fontSize:'1rem'}}
          >Add Records</Button>
        </ButtonContainer>
        </Stack>

      </Toolbar>
    </AppBar>
  );
}
