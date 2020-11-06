import { createGlobalStyle } from 'styled-components'
import colors from '../utils/colors'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    max-height: 100vh;
    max-width: 100vw;

    height: 100%;
    width: 100%;

    min-height:100vh;

    display: flex;
    flex-direction: column;
    background: ${colors.light};
  }

  *, button, input{
    border: 0;
    background: none;
    font-family: 'Ubuntu Regular';
    font-size: 16px;
    color:${colors.dark};
  }

  ::-webkit-scrollbar {
  -webkit-appearance: none;
  }

  ::-webkit-scrollbar:vertical {
    width: 5px;
  }

  ::-webkit-scrollbar:horizontal {
    height: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${colors.dark};
    border-radius: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${colors.light};
    border-radius: 5px;
  }
`

export default GlobalStyles
