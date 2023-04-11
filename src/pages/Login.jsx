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
  Stack,
} from '@mui/material';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const userLoggedIn = useSelector(selectUserIsLoggedin);

  const theme = createTheme({
    palette: {
      background: {
        btn: '#126c00af',
      },
    },
    text: {
      paper: '#fff',
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
      <Box
        component={'form'}
        onSubmit={signIn}
        sx={{
          display: 'flex',
          p: '20px',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: '#dee6bbc5',
        }}
      >
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          sx={{ mb: '10px', width: '500px' }}
        />

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          sx={{ mb: '10px', width: '500px' }}
        />
        <Button
          variant="outlined"
          type="submit"
          sx={{
            bgcolor: '#3fb400',
            color: theme.text.paper,
            mb: '10px',
            width: '500px',
          }}
        >
          Submit
        </Button>

        <Link to="/register">Haven't an account yet? Register.</Link>
      </Box>
    </ThemeProvider>
  );
}
