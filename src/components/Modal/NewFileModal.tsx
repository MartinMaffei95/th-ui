// =>> Styles

// =>> Components
import UploadImage from './Buttons/UploadImage';
import TakePicture from './Buttons/TakePicture';
import { ModalBtnContainer, ModalContainer, ModalTitle } from '../../styles';

const NewFileModal = () => {
  return (
    <ModalContainer>
      <ModalTitle>Cargar imagen desde:</ModalTitle>
      <ModalBtnContainer>
        <UploadImage />
        <TakePicture />
      </ModalBtnContainer>
    </ModalContainer>
  );
};

export default NewFileModal;
