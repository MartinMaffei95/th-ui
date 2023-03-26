import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import Layout from '../layout/Layout';
import CameraComponent from './CameraPage/CameraComponent';
import ComunityUploads from './ComunityUploads/ComunityUploads';
import Error404 from './Errors/Error404';
import Home from './Home/Home';
import Login from './Login/Login';
import { useAuth0 } from '@auth0/auth0-react';
import MyImages from './ComunityUploads/MyImages';
import UserImage from '@/pages/ComunityUploads/UserImage';
import Error500 from '@/pages/Errors/Error500';

const RequireAuth = () => {
  const { isAuthenticated, user } = useAuth0();
  if (localStorage.getItem('user') || isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to="/auth/login" replace={true} />;
  }
};

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <RequireAuth />
      </Layout>
    ),

    children: [
      {
        path: '',
        element: <Home />,
      },

      {
        path: 'comunity',
        element: <ComunityUploads />,
      },
      {
        path: 'images',
        children: [
          {
            path: '',
            element: <MyImages />,
          },
          {
            path: ':thid',
            element: <UserImage />,
          },
        ],
      },
    ],
  },
  {
    path: '/camera',
    children: [
      {
        path: '',
        element: <CameraComponent />,
      },
    ],
  },

  {
    path: '/auth',
    children: [
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
  {
    path: '*',
    element: <Error404 />,
  },
]);

export default router;
