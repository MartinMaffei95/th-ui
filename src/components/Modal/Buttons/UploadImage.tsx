import { ChangeEvent, useRef } from 'react';
// ==> Icons
import { TfiGallery } from 'react-icons/tfi';
// ==> Redux
import { useDispatch } from 'react-redux';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { uploadImage } from '../../../redux/slices/imageSlice';
// ==> Styles
import { IconSx, ModalBtnSx, UploadButtonSx } from '../../../styles';

// ==> Functions
import { convertToBase64 } from '../../../utilities/convert-to-base-64';
import { sharingInformationService } from '@/services/sharing-information.service';

const UploadImage = () => {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate: NavigateFunction = useNavigate();

  const fx = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.files) {
      const img = await convertToBase64(e?.target?.files[0]);
      dispatch(uploadImage(img));
      navigate('/');
      sharingInformationService.setSubject({
        modal_open: false,
        modal: '',
      });
    }
  };
  return (
    <button
      style={{ ...UploadButtonSx, ...ModalBtnSx }}
      onClick={() => inputRef.current?.click()}
    >
      <TfiGallery style={IconSx} />
      <label htmlFor="up-file">Galeria</label>
      <input
        ref={inputRef}
        style={{ display: 'none' }}
        type="file"
        onChange={(e) => {
          fx(e);
        }}
      />
    </button>
  );
};

export default UploadImage;
