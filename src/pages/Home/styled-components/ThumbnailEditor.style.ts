import styled from 'styled-components';
import { SCProps } from '@/models';
export const ThumbnailEditorContainer = styled('div')<SCProps>`
  position: relative;

  height: 100%;
  background: rgb(74, 72, 72);
  background: linear-gradient(
    180deg,
    rgba(74, 72, 72, 1) 30%,
    rgba(247, 69, 252, 1) 100%
  );
  ${(props) =>
    props.isPhone
      ? `
   width: 100%;
   `
      : `
     width: 80vw;
     
     `}
`;
