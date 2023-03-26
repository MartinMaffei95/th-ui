import { FooterSx } from '@/pages/Home/styled-components';
import styled, { CSSProperties } from 'styled-components';

export const StyledCameraComponent = styled('div')`
  width: '100%',
  height: '100%',
`;

export const StyledCameraFooter = styled('div')({
  ...FooterSx,
  ...{
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    bottom: 0,
    width: '100vw',
    height: '15vh',
    backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(41, 41, 41, 0.5)',
  },
});

export const flipBtnSx = `
    border-radius: 5%;
              background: rgba(20, 20, 20, .8);
              padding: 1rem;
              border: none;
              `;

export const takePhotoBtnSx = `
    border-radius: 5%;
              background: rgba(20, 20, 20, .8);
              padding: 1rem;
              border: 2px white solid;
              `;

export const StyledCameraBtnsContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '100%',
});

export const StyledPhotoTaken = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(20, 20, 20, 0.8);
  position: absolute;
  top: 00;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 80;
`;

export const StyledPhotoTakenBtnContainer = styled('div')`
  display: flex;
  gap: 1rem;
`;

export const CameraButtonSx: CSSProperties = {
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
