import { SiAuth0 } from 'react-icons/si';
import { BsIncognito } from 'react-icons/bs';
import GeneralButton from '../../../../components/Buttons/GeneralButton';
import {
  auth0BtnSx,
  inviteBtnSx,
  StyledBtnContainer,
} from '../../styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { BasicUserLogged } from '../../models';
import { Box, styled } from '@mui/material';

const ButtonsContainer = () => {
  const { loginWithPopup } = useAuth0();
  const navigate: NavigateFunction = useNavigate();

  const loginLike = async (loginType: 'guest' | 'user') => {
    if (loginType === 'guest') {
      const guestUser: BasicUserLogged = {
        name: 'Pepito el Sin Nombre',
        nickname: `guest-${uuidv4()}`,
        type: 'guest',
      };
      const guestData = JSON.stringify(guestUser);
      localStorage.setItem('user', guestData);
      navigate('/');
    }
    if (loginType === 'user') {
      try {
        loginWithPopup();
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <StyledBtnContainer>
      <GeneralButton
        testId="Login-Auth0"
        label="Auth0"
        action={() => {
          loginLike('user');
        }}
        icon={<SiAuth0 />}
        sx={auth0BtnSx}
      />
      <GeneralButton
        testId="Login-Guest"
        label="Invitado"
        action={() => {
          loginLike('guest');
        }}
        icon={<BsIncognito />}
        sx={inviteBtnSx}
      />
    </StyledBtnContainer>
  );
};

export default ButtonsContainer;
