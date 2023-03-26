import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
     @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');

  * {
    font-family: 'Roboto Condensed', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;

.viewer {
  width: 70vw;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  outline: red solid 2px;
  position: relative;
  overflow: hidden;
}
.output {
  height: 100%;
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.3);
  display: flex;
}

.output img {
  outline: red solid 2px;

  overflow: hidden;

  top: 0;
  left: 0;
  transform-origin: top left;
}

  }
`;
