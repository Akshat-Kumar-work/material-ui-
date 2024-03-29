import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
const navBar = () => {
  return (
    <AppBar position='static'>

    <Toolbar>

    <Typography variant='h6' flexGrow={1}> 
                Akshat
            </Typography>
            
            <Button variant='text' color='inherit' startIcon={<LoginIcon></LoginIcon>}>
                Login
            </Button>

            <Button variant='text' color='inherit' endIcon={<LogoutIcon/>}>
                Logout
            </Button>

    </Toolbar>
          
    </AppBar>
  )
}

export default navBar;