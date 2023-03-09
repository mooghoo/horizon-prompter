import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'BLMelody-Medium';
  font-style: normal;
  font-weight: 300;
  src: url('./public/BLMelody-Medium.woff');
}
  * {
    background: #005640;
    color: #fff;
    font-family: "BLMelody-Medium";
    transition: all 0.50s linear;
  }
`