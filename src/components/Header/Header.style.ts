import { List } from '@mui/material';
import styled from 'styled-components';

export const TopMenu = styled('header')`
  background: #fef;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  height: 10vh;
  width: 100vw;
  overflowy: hidden;
  zindex: 100;
  padding-inline: 0.5rem;
  button {
    background: none;
    border: none;
    font-size: 2rem;
    display: flex;
    justify-items: center;
    align-items: center;
  }
`;

export const LogoutBtnContainer = styled(List)`
  display: flex;
  justify-content: center;
`;
