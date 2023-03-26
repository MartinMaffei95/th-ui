import GeneralButton from '../../../../components/Buttons/GeneralButton';
import { agreeBtnSx, denyBtnSx } from '../../../../styles';
import {
  flipBtnSx,
  StyledPhotoTaken,
  StyledPhotoTakenBtnContainer,
} from '../../styled-components';
type PhotoTakenTypes = {
  savePhoto: Function;
  cleanImage: Function;
  photo: any;
};

const PhotoTaken = ({ savePhoto, cleanImage, photo }: PhotoTakenTypes) => {
  return (
    <StyledPhotoTaken>
      <div
        style={{
          height: '80vh',
          width: '100%',
        }}
      >
        <img
          src={photo || undefined}
          alt="Taken photo"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />
      </div>
      <StyledPhotoTakenBtnContainer>
        <GeneralButton
          label="Guardar"
          sx={agreeBtnSx}
          action={() => savePhoto()}
          // icon={<MdOutlineCameraswitch style={IconSx} />}
        />
        <GeneralButton
          label="Borrar"
          sx={denyBtnSx}
          action={() => cleanImage()}
          // icon={<MdOutlineCameraswitch style={IconSx} />}
        />
      </StyledPhotoTakenBtnContainer>
    </StyledPhotoTaken>
  );
};

export default PhotoTaken;
