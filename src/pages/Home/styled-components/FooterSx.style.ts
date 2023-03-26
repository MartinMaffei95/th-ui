import { CSSProperties } from 'react';

//# Footer

export const FooterContainerSx: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  bottom: 0,
  width: '100vw',
  height: '30vh',
};

export const FooterSx: CSSProperties = {
  display: 'flex',
  marginTop: 'auto',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  backgroundColor: '#111112',
  top: 0,
  width: '100vw',
  height: '10vh',
  zIndex: 20,
};

//## Section Selected
export const sectionSelectedSx: CSSProperties = {
  backgroundColor: 'rgba(41, 41, 41, 0.2)',
  backdropFilter: 'blur(10px)',
  display: 'flex',
  top: 0,
  width: '100vw',
  height: '100%',
  zIndex: 10,
};

// ### Settings
export const SettingContainerSx: CSSProperties = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
};
export const SettingButtonSx: CSSProperties = {
  backgroundColor: '#111112',
  display: 'flex',
  gap: '.2rem',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '80%',
  width: '25%',
  borderRadius: '10%',
  color: 'white',
};
