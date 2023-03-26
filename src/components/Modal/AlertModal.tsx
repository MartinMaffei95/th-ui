// =>> Styles
import {
  agreeBtnSx,
  denyBtnSx,
  ModalBtnContainer,
  ModalContainer,
  ModalTitle,
} from '../../styles';

// =>> Observer RxJs
import { sharingInformationService } from '../../services/sharing-information.service';
import GeneralButton from '../Buttons/GeneralButton';

const AlertModal = ({
  label = '',
  actionAgree = () => {},
  labelButtonAgree = '',
}: {
  label: string;
  labelButtonAgree?: string;
  actionAgree?: Function;
}) => {
  const denyAction = () => {
    sharingInformationService.setSubject({
      modal_open: false,
      modal: 'uploadFile',
    });
  };
  return (
    <ModalContainer>
      <ModalTitle>{label}</ModalTitle>
      <ModalBtnContainer>
        <GeneralButton
          sx={agreeBtnSx}
          action={() => actionAgree()}
          label={labelButtonAgree}
        />
        <GeneralButton
          sx={denyBtnSx}
          action={() => denyAction()}
          label="Cancelar"
        />
      </ModalBtnContainer>
    </ModalContainer>
  );
};

export default AlertModal;
