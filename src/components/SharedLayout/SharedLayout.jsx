import { Outlet } from 'react-router-dom/dist';
import { Navigation, Link, Header, Container } from './SharedLayout.styled';
const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Navigation>
          <Link to="/">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/contacts">Contacts</Link>
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
