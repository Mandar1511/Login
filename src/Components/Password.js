import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../Styling/Final.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#000842',
    },
    secondary:{
      main: '#000000'
    }
  },
});

export default function InputAdornments() {
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const divStyle = {
  color: '#000842',
};

  return (<>
  <p id="pass">
    Password
    </p>
    <div className='muipass'>
    <Box sx={{ display: 'flex', flexWrap: 'wrap'}}>
      <div>
        <FormControl sx={{ m: 1, width: '38ch'}} variant="standard">
          <ThemeProvider theme={theme}>
          <InputLabel style={divStyle} color='primary' id="password" htmlFor="standard-adornment-password">Enter your password</InputLabel>
          <Input
          color='primary'
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                style = {divStyle}
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          </ThemeProvider>
        </FormControl>
      </div>
    </Box>
    </div>
    <ThemeProvider theme={theme}>
      <br></br>
    <FormControlLabel
    className='checkbox'
          value="end"
          control={<Checkbox color='secondary'/>}
          label="Remember me"
          labelPlacement="end"
        />
        </ThemeProvider>
    <a className='forgot' href=" ">Forgot Password ?</a>
    </>
  );
}
