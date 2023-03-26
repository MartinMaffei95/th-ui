import { sharingInformationService } from '../services/sharing-information.service';

export const newFile = () => {
  try {
    sharingInformationService.setSubject({
      modal_open: true,
      modal: 'newFile',
    });
  } catch (e) {
    console.error(e);
  }
};
