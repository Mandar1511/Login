import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import '../Styling/Final.css'
function Email() {
  return (
    <>
    <h2 id="logo">Your Logo</h2>
    <h1 id="sign-in">Sign in</h1>
    <p id="p1">
        if you do not have an account registered
    </p>
    <p id = "p2">
        You can <a className="register_here" href="">register here !</a>
    </p>
    <p id="email">
        Email
    </p>
     <Box className="box1" sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <MailOutlineIcon sx={{ color: '#000842', mr: 1, my: 0.5 }} />
        <TextField  sx={{width:300}} InputLabelProps={{style: { color: '#000842'},}} color='info' id="standard-basic" label="Enter your email address" variant="standard" />
      </Box>
    </>
  )
}
export default Email;
