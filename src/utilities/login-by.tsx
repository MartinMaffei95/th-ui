import { useAuth0 } from '@auth0/auth0-react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
type BasicUserLogged = {
  nickname: string; // username with uuid or email if use Auth0
  name: string; // name. Is not important here
  type: 'guest' | 'authorized';
};

export const loginLike = async (loginType: 'guest' | 'user') => {
  const { loginWithPopup, user, isAuthenticated } = useAuth0();
  const navigate: NavigateFunction = useNavigate();
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
    const res = await loginWithPopup();
  }
};
