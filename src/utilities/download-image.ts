import { sendSnackbar } from '@/services/snackbar.manager';
import { setLoading } from '../redux/slices/appSlice';
import { store } from '../redux/store/store';
import { sharingInformationService } from '../services/sharing-information.service';

export const downloadImage = () => {
  const subscription$ = sharingInformationService.getSubject();
  // dispatch the loading event - start
  store.dispatch(setLoading(true));
  // gett the image
  const { croppedImg } = store.getState()?.image;
  // Create downlod <a/> tag
  let a = document.createElement('a');
  // Setting the href with the base64 image
  a.href = `${croppedImg}`;
  // Put the name for the file
  a.download = `${
    Date.now() + Date.now() * Math.round(Math.random() * 1000)
  }.png`;

  // dispatch the loading event - end, close modal and push a notification to user
  store.dispatch(setLoading(false));
  sharingInformationService.setSubject({
    modal_open: false,
    modal: 'uploadFile',
  });
  sendSnackbar.success('Comenzando descarga 😎');
  //  Start download!
  a.click();
};
