import { CSSProperties } from 'react';
import styled from 'styled-components';
import { SCProps, StyleType } from '../models';

export const ModalBtnSx: CSSProperties = {
  color: 'white',
  fontSize: '1.5rem',
  width: '80%',
  borderRadius: '10px',
  flexDirection: 'row',
  gap: 16,
  padding: 16,
  justifyContent: 'start',
};
export const StyledModlaLayOut = styled('div')<SCProps>`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  z-index: 100;
  top: 0;
  left: 0;
  backdrop-filter: blur(10px);
  background-color: rgba(200, 200, 200, 0.5);

  width: 100vw;
  height: 100vh;
`;

export const StyledModal = styled('div')<SCProps>`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
  top: 0;
  left: 0;
  backdrop-filter: blur(10px);
  background-color: rgba(200, 200, 200, 0.5);

  ${(props) =>
    props.isPhone
      ? `
        width: 100vw;
        height: 100vh;
      `
      : `
        width: 60vw;
        height: 80vh;
        border-radius: .5rem;
          box-shadow: 5px 5px 8px 2px rgba(50, 50, 50, 0.5);
      `}
  button {
    margin: 1rem;
  }
`;
export const ModalContainer = styled('div')({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  // gap: '1rem',
});
export const ModalTitle = styled('h3')({
  color: 'black',
  fontSize: '2rem',
  textAlign: 'center',
});
export const ModalBtnContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  gap: 16,
  padding: 16,
  width: '100%',
});

export const agreeBtnSx: StyleType = `
background-color: #0c941c;
    color:#fff;
    font-size:1.2rem;
    font-weight:bold;

`;

export const denyBtnSx: StyleType = `
    background: #c72424;
    color:#fff;
    font-size:1.2rem;
    font-weight:bold;
`;

export const UploadButtonSx: CSSProperties = {
  backgroundColor: '#111112',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '80%',
  width: '25%',
  borderRadius: '10%',
  color: 'white',
};
