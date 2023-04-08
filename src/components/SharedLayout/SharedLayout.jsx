import { Outlet } from 'react-router-dom/dist';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import { logoutUser } from 'redux/auth/authOperations';
import { Navigation, Link, Header, Container } from './SharedLayout.styled';
import { selectUserIsLoggedin } from 'redux/auth/authSelectors';

const SharedLayout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const userLoggedIn = useSelector(selectUserIsLoggedin);
  return (
    <Container>
      <Header>
        <h1>Phonebook</h1>
        <Navigation>
          {!userLoggedIn ? (
            <>
              <Link to="/">Login</Link>
              <Link to="/register">Register</Link>
            </>
          ) : (
            <div>
              <Link to="/contacts">Contacts</Link>
              <p>Welcome {user.name}</p>
              <button
                onClick={() => {
                  dispatch(logoutUser());
                }}
              >
                Logout
              </button>
            </div>
          )}
        </Navigation>
        <Outlet />
        {/* <Suspense fallback={<div>Loading page...</div>}>
          <Outlet /> */}
        {/* </Suspense> */}
      </Header>
    </Container>
  );
};
export default SharedLayout;
