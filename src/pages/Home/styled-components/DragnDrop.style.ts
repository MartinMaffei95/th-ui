import styled from 'styled-components';
import { CSSProperties } from 'react';

export const StyledFormFileUpload = styled('form')({
  width: '100%',
  maxWidth: '100%',
  height: '100%',
  padding: '1rem',
  textAlign: 'center',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const InputFileUploadSx: CSSProperties = {
  display: 'none',
};

export const StyledLabelFileUpload = styled('label')`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-radius: 1rem;
  border-style: dashed;
  border-color: #cbd5e1;
  background: rgba(221, 225, 232, 0.25);
  backdrop-filter: blur(10px);

  .upload {
    color: black;
    position: relative;
    backgorund: green;
  }
  .upload::before {
    content: '';
    width: 0%;
    height: 4px;
    position: absolute;
    bottom: -5px;
    left: 0;
    background: black;
    z-index: 100;
    transition: 0.25s ease-in-out;
  }
  .upload:hover::before {
    width: 100%;
  }
`;
export const TextContainerDnD = styled('div')`
  font-size: 1.4rem;
`;
export const StyledUploadButtonDnD = styled('button')`
  cursor: pointer;
  padding: 0.25rem;
  font-size: 1.4rem;
  border: none;
  font-family: 'Oswald', sans-serif;
  background-color: transparent;
`;

// export const UploadButton:hover {
//   text-decoration-line: underline,
// }
