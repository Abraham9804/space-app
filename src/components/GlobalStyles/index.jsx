/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

import { createGlobalStyle } from "styled-components";
import GandhiSansRegular from "./fonts/GandhiSans-Regular.otf";
import GandhiSansBold from "./fonts/GandhiSans-Bold.otf";
/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

const GlobalStyle = createGlobalStyle`

@font-face{
  font-family: "GandhiSansRegular";
  src: url(${GandhiSansRegular});
}

@font-face{
  font-family: "GandhiSansBold";
  src: url(${GandhiSansBold});
}

body{
  width: 100%;
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  font-family: "GandhiSansRegular";
}
    *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

`
export default GlobalStyle