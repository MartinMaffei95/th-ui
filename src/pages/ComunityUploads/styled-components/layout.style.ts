import { Box } from '@mui/material';
import styled from 'styled-components';

export const StyledImagesLayout = styled('div')`
  max-width: 100vw;
  height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: rgb(74, 72, 72);
  background: linear-gradient(
    0deg,
    rgba(74, 72, 72, 1) 30%,
    rgba(247, 69, 252, 1) 100%
  );
`;

export const DataDisplayer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: stretch;
  color: white;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 30%,
    rgba(0, 0, 0, 0.5) 100%
  );
  .data {
    border-right: 0;
    border-left-width: 2px;
    border-style: solid;
    border-image: linear-gradient(to bottom, white 30%, rgba(0, 0, 0, 0)) 1 100%;
    width: 100%;
    bottom: 0;
    left: 0;
    padding-block: 0.5rem;
    padding-inline: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const ImageContiner = styled(Box)`
  align-self: center;
  margin-block: auto;
  background: rgba(150, 150, 150, 0.25);
  backdrop-filter: blur(10px);
  width: 80vw;
  height: 75vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  overflow: hidden;
  .image {
    width: 100%;
    height: 100%;
  }

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;
