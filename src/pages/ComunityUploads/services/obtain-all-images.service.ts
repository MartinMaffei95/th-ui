import { ApiImage } from './../models/Images.model';
import { sendSnackbar } from '@/services/snackbar.manager';
import { setLoading } from '../../../redux/slices/appSlice';
import { store } from '../../../redux/store/store';

const { VITE_API_URI } = import.meta.env;

export const getAllImages = async (): Promise<ApiImage[] | never> => {
  try {
    store.dispatch(setLoading(true));

    const res = await fetch(`${VITE_API_URI}/thumbnail`);
    const data = await res.json();
    store.dispatch(setLoading(false));

    return data;
  } catch (e) {
    store.dispatch(setLoading(false));
    sendSnackbar.error('Se produjo en el servidor.');
    throw new Error('error');
  }
};
