import { SnackbarProvider } from 'notistack';
import { RouterProvider } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import router from './pages/RouterIndex';
import AppProvider from './redux/AppProvider';

export const App = () => {
  return (
    <AppProvider>
      <SnackbarProvider />
      <RouterProvider router={router} />
      <Loader />
    </AppProvider>
  );
};
