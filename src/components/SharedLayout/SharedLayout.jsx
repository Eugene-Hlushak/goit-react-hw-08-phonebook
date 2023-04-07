import { Outlet } from 'react-router-dom/dist';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/users/usersSelectors';
import { logoutUser } from 'redux/users/usersOperations';
import { Navigation, Link, Header, Container } from './SharedLayout.styled';
import { selectUserIsLoggedin } from 'redux/users/usersSelectors';

const SharedLayout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const userLoggedIn = useSelector(selectUserIsLoggedin);
  return (
    <Container>
      <Header>
        {userLoggedIn ? (
          <div>
            <p>Welcome {user.name}</p>
            <button
              onClick={() => {
                dispatch(logoutUser());
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <Navigation>
            {!userLoggedIn ? (
              <>
                <Link to="/">Login</Link>
                <Link to="/register">Register</Link>
              </>
            ) : (
              <Link to="/contacts">Contacts</Link>
            )}
          </Navigation>
        )}

        <Outlet />
        {/* <Suspense fallback={<div>Loading page...</div>}>
          <Outlet /> */}
        {/* </Suspense> */}
      </Header>
    </Container>
  );
};
export default SharedLayout;
