import React from "react"
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@mui/material'
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

const Login = () => {
    const paperStyle={padding : 20, height:'70vh', width:280, margin: "20px auto"}
    const avatarStyle={backgroundColor: 'green'}
    const btnstyle={margin:'8px 0'}
    return (
        // <Grid
        // }}
        // >
            <Paper elevation={10} style={paperStyle}
            // sx={{position:'absolute',top:'0'}}
            >
                <Grid>
                  <Avatar style={avatarStyle}>hii</Avatar>
                   <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign In</Button>
                <Typography>
                    <Link href="#">Forgot password?</Link>
                </Typography>
                <Typography> Do you have an account?
                    <Link href="#">Sign Up</Link>
                </Typography>

            </Paper>
        // </Grid>

    )
}

export default Login
