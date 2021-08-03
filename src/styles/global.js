import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

html, body, main, header, footer, article, section, figure, img, figcaption, p, div, button, h1, aside, a {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    figcaption {
        display: none;
    }

    body {
        margin: 1rem;
    }

    footer {
        text-align: center;
    }

    h1 {
        margin-bottom: 1rem;
        text-align: center;
    }

    button {
        background-color: lightseagreen;
        border: 1px solid #000;
        border-radius: 1rem;
        margin-top: 1rem;
        padding: 0.5rem;

        &:hover {
            background-color: lightblue;
            cursor: pointer;
        }
    }

    article {
        border: 1px solid #000;
        border-radius: 1rem;
        margin: 0.5rem;
        padding: 1rem;
        text-align: center;
        width: 200px;
    }

    a {
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
}

`;
