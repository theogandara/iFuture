import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
      min-width: 375px;
    }

    body {
        background-color: ${props => props.theme.colors.background};
        font-family: 'Inter', sans-serif;
        color: ${props => props.theme.colors.text};
    }
`
