import { sendSnackbar } from '@/services/snackbar.manager';
import { setLoading } from '../../../redux/slices/appSlice';
import { store } from '../../../redux/store/store';
import { BasicUserLogged } from '../../../models';
import { ApiImage } from '@/pages/ComunityUploads/models';
import { LoginContainer } from '@/pages/Login/styled-components';
const { VITE_API_URI } = import.meta.env;

export const getMyImages = async (): Promise<ApiImage[] | Error> => {
  try {
    store.dispatch(setLoading(true));

    const user: BasicUserLogged = JSON.parse(
      localStorage.getItem('user') as string
    );
    const res = await fetch(
      `${VITE_API_URI}/thumbnail/?nickname=${user?.nickname}`
    );
    const data = await res.json();
    store.dispatch(setLoading(false));
    return data;
  } catch (e) {
    store.dispatch(setLoading(false));
    sendSnackbar.error('Se produjo en el servidor.');
    throw new Error('error');
  }
};
