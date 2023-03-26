import { useEffect, useState } from 'react';
// =>> Styles
import {
  ButtonSx,
  CloseButtonSx,
  IconSx,
  ModalContainer,
  StyledModal,
  StyledModlaLayOut,
} from '../../styles';
// =>> Icons
import { AiFillCloseCircle } from 'react-icons/ai';
// =>> Component
import NewFileModal from './NewFileModal';
// =>> Services
import { sharingInformationService } from '../../services/sharing-information.service';
import AlertModal from './AlertModal';
import { postImg } from '../../services/post-image-on-db.service';
import { downloadImage } from '../../utilities/download-image';
import { useResize } from '@/Hooks/useResize';

const ModalComponent = () => {
  const subscription$ = sharingInformationService.getSubject();
  const { isPhone } = useResize();
  useEffect(() => {
    subscription$.subscribe((data: any) => {
      data && setOpen(data?.modal_open);
      data && setModalOf(data?.modal);
    });
  });
  const [open, setOpen] = useState<boolean>(false);
  const [modalOf, setModalOf] = useState('');

  return (
    <>
      {open ? (
        <StyledModlaLayOut>
          <StyledModal isPhone={isPhone}>
            <button
              onClick={() => setOpen(false)}
              style={{ ...ButtonSx, ...CloseButtonSx }}
            >
              <AiFillCloseCircle style={IconSx} />
            </button>
            <ModalContainer>
              {modalOf === 'newFile' ? (
                <NewFileModal />
              ) : modalOf === 'downloadFile' ? (
                <AlertModal
                  label="¿Seguro que deseas descargar la imagen?"
                  labelButtonAgree="Si. Descargar"
                  actionAgree={() => downloadImage()}
                />
              ) : modalOf === 'uploadFile' ? (
                <AlertModal
                  label="¿Seguro que deseas subir la imagen?"
                  labelButtonAgree="Si. Subir"
                  actionAgree={() => postImg()}
                />
              ) : null}
            </ModalContainer>
          </StyledModal>
        </StyledModlaLayOut>
      ) : null}
    </>
  );
};

export default ModalComponent;
