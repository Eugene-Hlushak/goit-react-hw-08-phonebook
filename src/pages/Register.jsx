import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom/dist';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from 'redux/auth/authOperations';
import { selectUserIsLoggedin } from 'redux/auth/authSelectors';
import {
  Box,
  ThemeProvider,
  createTheme,
  TextField,
  Button,
} from '@mui/material';

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

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const userLoggedIn = useSelector(selectUserIsLoggedin);

  const signUp = e => {
    e.preventDefault();
    dispatch(userRegister({ name, email, password }));
  };

  if (userLoggedIn) {
    return <Navigate to="/contacts" replace />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Box component={'form'} onSubmit={signUp}>
        <TextField
          label="Name"
          type="text"
          variant="outlined"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
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

        <Link to="/">Already have an accaunt? Login.</Link>
      </Box>
    </ThemeProvider>
  );
}
