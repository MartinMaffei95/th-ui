import { Box } from '@mui/material';
import styled from 'styled-components';
import { SCProps } from '@/models';

export const StyledErrorContainer = styled(Box)<SCProps>`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  flex-direction: column;
  background: rgb(74, 72, 72);
  background: linear-gradient(
    180deg,
    rgba(74, 72, 72, 1) 30%,
    rgba(247, 69, 252, 1) 100%
  );
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    .container_info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-block: 1rem;
      align-items: center;
      text-align: center;
      width: 90%;
      height: 90%;
    }
  }
  .container:first-child {
    color: white;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 1) 50%,
      rgba(0, 0, 0, 0) 100%
    );
    backdrop-filter: blur(5px);
    width: 100%;
    height: 100%;
    margin: auto;
  }

  h3 {
    font-size: 4rem;
  }
  img {
    width: 80%;
    align-self: end;
    margin-top: auto;
  }

  @media (min-width: 450px) {
    img {
      width: 60%;
    }
  }
  @media (min-width: 650px) {
    flex-direction: row;
    img {
      width: 80%;
    }
    .container:first-child {
      color: white;
      background: none;
      .container_info {
        background-color: rgba(200, 200, 200, 0.1);
        backdrop-filter: blur(5px);
        box-shadow: 5px 5px 8px 2px rgba(50, 50, 50, 0.5);
        padding: 1rem;
        border-radius: 0.75rem;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        padding-block: 0;
        width: 90%;
        height: 50%;
      }
    }
  }
`;
