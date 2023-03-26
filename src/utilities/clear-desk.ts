import { uploadImage, previewImage } from '@/redux/slices/imageSlice';
import { store } from '@/redux/store/store';

export const clearDesk = () => {
  store.dispatch(uploadImage(''));
  store.dispatch(previewImage(''));
};
