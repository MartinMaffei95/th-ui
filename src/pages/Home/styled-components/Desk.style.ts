import { SCProps } from '@/models';
import { Box, Paper } from '@mui/material';
import styled from 'styled-components';

export const StyledDesk = styled('main')<SCProps>`
  display: flex;
  background: #eee;
  overflow: hidden;
  ${(props) =>
    props.isPhone
      ? `
    height: 83vh;

   `
      : `
     height: 90vh;

     
     `}
`;

export const StyledLateralPanel = styled(Box)`
  width: 20vw;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

export const StyledPanelButtonsContainer = styled(Box)`
  width: 100%;
  height: 6rem;
  background-color: #000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 90;
  position: relative;
`;

export const StyledToolBox = styled(Box)`
  background-color: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: -2rem;
  right: 0;
  height: 6rem;
  width: 100%;
  z-index: 80;

  .section-in {
    height: 100%;
  }
`;

export const StyledPreviewPanelContainer = styled(Box)`
  background-color: #eee;
  height: 100%;
  width: 100%;
  padding: 0.25rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledPreviewPanel = styled(Box)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5%;
  overflow: hidden;
`;
