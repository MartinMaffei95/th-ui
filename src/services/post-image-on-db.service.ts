import { sendSnackbar } from './snackbar.manager';
import { previewImage, uploadImage } from '@/redux/slices/imageSlice';
import { setLoading } from '../redux/slices/appSlice';
import { store } from '../redux/store/store';
import { base64ToFile } from '../utilities/base64-to-file';
import { sharingInformationService } from './sharing-information.service';

const { VITE_API_URI } = import.meta.env;

export const postImg = async () => {
  try {
    const subscription$ = sharingInformationService.getSubject();

    store.dispatch(setLoading(true));

    const { croppedImg } = store.getState()?.image;

    if (!croppedImg) return;
    const user = JSON.parse(localStorage.getItem('user') as string);

    const imageOnFile = await base64ToFile(croppedImg);
    const formData = new FormData(); // Creating the form data
    // constructing the form data with the data
    formData.append('thumbnail', imageOnFile);
    formData.append('uploaded_by', user.nickname);
    formData.append('name', user.name);

    const response = await fetch(`${VITE_API_URI}/thumbnail`, {
      method: 'POST',
      body: formData,
    });
    const data = await response.json;
    sharingInformationService.setSubject({
      modal_open: false,
      modal: 'uploadFile',
    });

    store.dispatch(uploadImage(''));
    store.dispatch(previewImage(''));
    store.dispatch(setLoading(false));
    sendSnackbar.success('Imagen subida correctamente');
    return data;
  } catch (error) {
    console.error(error);
    store.dispatch(setLoading(false));
    sendSnackbar.error('se produjo un error.');
    throw new Error('error');
  }
};
