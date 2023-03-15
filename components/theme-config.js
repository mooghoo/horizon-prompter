import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'BLMelody-Medium';
  font-style: normal;
  font-weight: 300;
  src: url('/BLMelody-Medium.woff') format('woff');
}
  * {
    background: #005640;
    color: #fff;
    font-family: "BLMelody-Medium";
  }
`