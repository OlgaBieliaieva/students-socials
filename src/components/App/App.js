// import { useEffect } from 'react';
// import { lazy } from 'react';
// import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// import { PrivateRoute } from './PrivateRoute';
// import { RestrictedRoute } from './RestrictedRoute';
// import { refreshUser } from '../redux/auth/operations';
// import { useAuth } from '../hooks/useAuth';
//PAGES
import {Home} from '../../pages/Home';
import {Users} from '../../pages/Users';
//COMPONENTS
// import { Loader } from './Loader/Loader';

// const Home = lazy(() => import('../../pages/Home'));
// const Users = lazy(() => import('../../pages/Users'));

export const App = () => {
  //   const dispatch = useDispatch();
  //   const { isRefreshing } = useAuth();

  //   useEffect(() => {
  //     dispatch(refreshUser());
  //   }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
};
