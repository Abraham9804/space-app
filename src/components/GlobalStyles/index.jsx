/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

import { createGlobalStyle } from "styled-components";

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

const GlobalStyle = createGlobalStyle`
body{
  width: 100%;
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
}
    *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

`
export default GlobalStyle