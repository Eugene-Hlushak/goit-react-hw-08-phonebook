import Contacts from 'pages/Contacts';
import Login from 'pages/Login';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom/dist';
import Register from 'pages/Register';
import { Routes, Route } from 'react-router-dom';
import { userRefresh } from 'redux/auth/authOperations';
import SharedLayout from './SharedLayout/SharedLayout';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userRefresh());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </div>
  );
};
