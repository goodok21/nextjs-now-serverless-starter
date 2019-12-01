import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Gilroy';
    src: url('/fonts/Gilroy-Regular.eot');
    src: local('Gilroy Regular'), local('Gilroy-Regular'),
        url('/fonts/Gilroy-Regular.eot?#iefix') format('embedded-opentype'),
        url('/fonts/Gilroy-Regular.woff2') format('woff2'),
        url('/fonts/Gilroy-Regular.woff') format('woff'),
        url('/fonts/Gilroy-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Gilroy';
    src: url('/fonts/Gilroy-Bold.eot');
    src: local('Gilroy Bold'), local('Gilroy-Bold'),
        url('/fonts/Gilroy-Bold.eot?#iefix') format('embedded-opentype'),
        url('/fonts/Gilroy-Bold.woff2') format('woff2'),
        url('/fonts/Gilroy-Bold.woff') format('woff'),
        url('/fonts/Gilroy-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url('/fonts/Gilroy-RegularItalic.eot');
    src: local('Gilroy Regular Italic'), local('Gilroy-RegularItalic'),
        url('/fonts/Gilroy-RegularItalic.eot?#iefix') format('embedded-opentype'),
        url('/fonts/Gilroy-RegularItalic.woff2') format('woff2'),
        url('/fonts/Gilroy-RegularItalic.woff') format('woff'),
        url('/fonts/Gilroy-RegularItalic.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url('/fonts/Gilroy-BoldItalic.eot');
    src: local('Gilroy Bold Italic'), local('Gilroy-BoldItalic'),
        url('/fonts/Gilroy-BoldItalic.eot?#iefix') format('embedded-opentype'),
        url('/fonts/Gilroy-BoldItalic.woff2') format('woff2'),
        url('/fonts/Gilroy-BoldItalic.woff') format('woff'),
        url('/fonts/Gilroy-BoldItalic.ttf') format('truetype');
    font-weight: 700;
    font-style: italic;
  }

  body {
    font-family: ${({ fontLoaded }) =>
      fontLoaded ? 'Gilroy, ' : ''}sans-serif;
  }
`

export default GlobalStyle
