import { SCProps } from '@/models';
import { Box, styled } from '@mui/material';

export const LoginScreen = styled('div')<SCProps>`
  width: 100vw;
  height: 100vh;
  background: rgb(74, 72, 72);
  background: linear-gradient(
    180deg,
    rgba(74, 72, 72, 1) 30%,
    rgba(247, 69, 252, 1) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.isPhone
      ? `
          background: rgb(74, 72, 72);
          background: linear-gradient(
            180deg,
            rgba(74, 72, 72, 1) 30%,
            rgba(247, 69, 252, 1) 100%
          );
        justify-content: center;
        align-items: center;
      `
      : `
          background: rgb(74, 72, 72);
          background: linear-gradient(
            150deg,
            rgba(74, 72, 72, 1) 30%,
            rgba(247, 69, 252, 1) 100%
          );
        justify-content: space-around;
        align-items: center;

      `}
`;

export const LoginContainer = styled(Box)<SCProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  ${(props) =>
    props.isPhone
      ? ``
      : `
        width:80vw;
        height:80vh;

      `}
`;

export const LoginMainContent = styled(Box)<SCProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-size: 2rem;
  letter-spacing: 0.05rem;
  text-align: center;

  span {
    font-size: 3rem;
    text-transform: uppercase;
    background: -webkit-linear-gradient(
      164deg,
      rgba(34, 193, 195, 1) 0%,
      rgba(253, 187, 45, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  h3 {
    font-size: 2rem;
    letter-spacing: 0.25rem;
    text-transform: uppercase;
  }
  ${(props) =>
    props.isPhone
      ? `
        height: 50vh;
        justify-content: center;
      `
      : `
        justify-content: space-between;
        height: 100vh;
        padding-block: 15vh;
    `}
`;

export const LogoContainer = styled('div')`
  width: 50%;
  height: 50%;
`;

export const Image = styled('img')`
  width: 100%;
  height: 100%;
`;

export const EnterLike = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 35vw;
  border-radius: 0.75rem;
  height: 80vh;
  padding: 1rem;
  background-color: rgba(200, 200, 200, 0.1);
  backdrop-filter: blur(5px);
  box-shadow: 5px 5px 8px 2px rgba(50, 50, 50, 0.5);
  h3 {
    font-size: 3rem;
    font-family: 'Helvetica', arial, sans-serif;
    background: -webkit-linear-gradient(
      80deg,
      rgba(254, 30, 150, 1) 0%,
      rgba(253, 187, 45, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
  }
`;

export const StyledBtnContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;
  paddinginline: 1rem;
`;
