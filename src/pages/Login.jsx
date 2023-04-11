import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom/dist';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from 'redux/auth/authOperations';
import { selectUserIsLoggedin } from 'redux/auth/authSelectors';
import {
  Box,
  ThemeProvider,
  createTheme,
  TextField,
  Button,
} from '@mui/material';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const userLoggedIn = useSelector(selectUserIsLoggedin);

  const theme = createTheme({
    palette: {
      background: {
        contactList: '#c76161',
      },
    },
    text: {
      primary: '#10100f54',
      secondary: '#343434d0',
    },
  });

  if (userLoggedIn) {
    return <Navigate to="/contacts" replace />;
  }

  const signIn = e => {
    e.preventDefault();
    dispatch(userLogin({ email, password }));
  };

  return (
    <ThemeProvider theme={theme}>
      <Box component={'form'} onSubmit={signIn}>
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button variant="outlined" type="submit">
          Submit
        </Button>

        <Link to="/register">Haven't an accaunt yet? Register.</Link>
      </Box>
    </ThemeProvider>
  );
}
