import { useEffect } from 'react';
import ButtonsContainer from './components/ButtonsContainer/ButtonsContainer';
import { BasicUserLogged } from './models';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import {
  Image,
  LoginContainer,
  LoginScreen,
  LoginMainContent,
  LogoContainer,
  EnterLike,
} from './styled-components';
import { useResize } from '@/Hooks/useResize';

const Login = () => {
  const { isPhone } = useResize();
  const { user, isAuthenticated } = useAuth0();
  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    if (isAuthenticated && user?.name && user?.email) {
      const userLogged: BasicUserLogged = {
        name: user?.name,
        nickname: user?.email,
        type: 'authorized',
      };
      const userData = JSON.stringify(userLogged);
      localStorage.setItem('user', userData);

      navigate('/');
    }
  }, [isAuthenticated]);

  return (
    <LoginScreen isPhone={isPhone}>
      {isPhone ? (
        <LoginContainer isPhone={isPhone}>
          <LoginMainContent isPhone={isPhone}>
            <LogoContainer>
              <Image src="/logo.svg" alt="logo img" />
            </LogoContainer>
            <div>
              <h2>
                Vamos a <span>crear</span>!
              </h2>
              <h3>Algo fantástico</h3>
            </div>
          </LoginMainContent>
          <ButtonsContainer />
        </LoginContainer>
      ) : (
        <>
          <LoginMainContent isPhone={isPhone}>
            <LogoContainer>
              <Image src="/logo.svg" alt="logo img" />
            </LogoContainer>
            <div>
              <h2>
                Vamos a <span>crear</span>!
              </h2>
              <h3>Algo fantástico</h3>
            </div>
          </LoginMainContent>
          <EnterLike>
            <h3>Ingresar como:</h3>
            <ButtonsContainer />
          </EnterLike>
        </>
      )}
    </LoginScreen>
  );
};

export default Login;
