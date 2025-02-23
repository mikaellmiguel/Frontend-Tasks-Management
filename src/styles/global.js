import {createGlobalStyle} from "styled-components";



export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    body {
        background: #191919;
        overflow: hidden;
    }

    textarea, select {
        background: transparent;
        border: 2px solid #BBBBBB;
        color: #FFFFFF;
        border-radius: 8px;
        padding: 0.5rem;

        &::placeholder {
            color: #BBBBBB;
        }
    }

    textarea {
        resize: none;
    }

    select > option {
        color: #000000;
        background-color: #FFFFFF;
    }
`;