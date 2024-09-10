import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      /* Brand */
      @font-face {
        font-family: 'Heading Font Name';
        font-style: normal;
        font-weight: bold;
        font-display: swap;
        src: url("../src/fonts/ElValle.ttf");
      }
      /* Body */
      @font-face {
        font-family: 'Body Font Name';
        font-style: normal;
        font-weight: bold;
        font-display: swap;
        src: url("../src/fonts/CODE\ Light.otf");
      }
       
      `}
  />
)

export default Fonts