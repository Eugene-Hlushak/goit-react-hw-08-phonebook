import { Outlet } from 'react-router-dom/dist';
import { Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userLogout } from 'redux/auth/authOperations';
import {
  Link,
  LinkBox,
  LogoutBtn,
  AppHeader,
  User,
} from './SharedLayout.styled';
import { selectUserIsLoggedin, selectUser } from 'redux/auth/authSelectors';
import { Box, Toolbar, Typography } from '@mui/material';

const SharedLayout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const userLoggedIn = useSelector(selectUserIsLoggedin);

  return (
    <>
      {/* #faa41bf8 #7c8848 #a5b400*/}
      <AppHeader position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" noWrap component="div">
            Phonebook
          </Typography>
          <Box>
            {!userLoggedIn ? (
              <LinkBox>
                <Link to="/" sx={{ mr: '10px' }}>
                  Login
                </Link>
                <Link to="/register">Register</Link>
              </LinkBox>
            ) : (
              <LinkBox>
                <Link to="/contacts" sx={{ mr: '10px' }}>
                  Contacts
                </Link>
                {user.name && <User>Welcome, {user.name}</User>}
                <LogoutBtn
                  variant="outlined"
                  type="submit"
                  onClick={() => {
                    dispatch(userLogout());
                  }}
                >
                  Logout
                </LogoutBtn>
              </LinkBox>
            )}
          </Box>
        </Toolbar>
      </AppHeader>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default SharedLayout;
