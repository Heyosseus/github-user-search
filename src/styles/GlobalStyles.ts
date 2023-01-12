import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Space Mono', monospace;
        overflow-x: hidden;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
`;
