import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`

#root{
  width: 100%;
  height: 100%;
}

html{
  min-height: 100%;
  min-width: 100%;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root{
    --dark-grey: #333333;
    --light-grey: #808080;
    --yellow: #FFB612;
    --red: #dc0a17;
    --green: #2FC022;
    --whitesmoke: #f5f5f5;
    --black: #000000;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  button{
    cursor: pointer;
  }
`;
 
export default GlobalStyle;