import { CameraButtonSx } from '@/pages/CameraPage/styled-components';
import { ChangeEvent, useRef } from 'react';
// ==> Icons
import { FiCamera } from 'react-icons/fi';
// ==> ReactRouterDom
import { NavigateFunction, useNavigate } from 'react-router-dom';
// ==> Styles
import { IconSx, ModalBtnSx } from '../../../styles';
// ==> Functions
import { convertToBase64 } from '../../../utilities/convert-to-base-64';

const TakePicture = () => {
  const navigate: NavigateFunction = useNavigate();

  const redirectTo = (to: string) => {
    navigate(`/${to}`);
  };

  return (
    <button
      style={{ ...CameraButtonSx, ...ModalBtnSx }}
      onClick={() => redirectTo('camera')}
    >
      <FiCamera style={IconSx} />
      <p>Tomar foto</p>
    </button>
  );
};

export default TakePicture;
