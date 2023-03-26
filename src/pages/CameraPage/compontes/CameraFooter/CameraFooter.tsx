import {
  MdExitToApp,
  MdOutlineCameraAlt,
  MdOutlineCameraswitch,
} from 'react-icons/md';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import GeneralButton from '../../../../components/Buttons/GeneralButton';
import { IconSx } from '../../../../styles';
import {
  StyledCameraBtnsContainer,
  StyledCameraFooter,
} from '../../styled-components';

type CameraFooterTypes = {
  takePhoto: Function;
  flipCamera: Function;
};

const CameraFooter = ({ takePhoto, flipCamera }: CameraFooterTypes) => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <StyledCameraFooter>
      <StyledCameraBtnsContainer data-testid="camera-footer">
        <GeneralButton
          label=""
          sx="flipBtnSx"
          action={() => flipCamera()}
          icon={<MdOutlineCameraswitch style={IconSx} />}
        />
        <GeneralButton
          label=""
          sx="takePhotoBtnSx"
          icon={<MdOutlineCameraAlt style={IconSx} />}
          action={() => takePhoto()}
        />
        <GeneralButton
          label=""
          sx="flipBtnSx"
          action={() => navigate('/')}
          icon={
            <MdExitToApp
              style={{ ...IconSx, ...{ transform: 'rotate(180deg)' } }}
            />
          }
        />
      </StyledCameraBtnsContainer>
    </StyledCameraFooter>
  );
};

export default CameraFooter;
