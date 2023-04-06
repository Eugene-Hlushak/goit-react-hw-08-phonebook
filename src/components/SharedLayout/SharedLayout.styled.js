import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
`;
export const Navigation = styled.nav`
  padding: 15px;
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  box-shadow: 3px 3px 3px 3px lightgray;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;

  &.active {
    color: tomato;
  }
`;
