import { createGlobalStyle } from "styled-components";
import Font from "../styles/Font";

export const GlobalStyle = createGlobalStyle`
    ${Font}
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, button, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
	    padding: 0;
	    border: 0;
        -webkit-font-smoothing:antialiased;
    }

    &:focus {
        outline: 0;
    }

    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
	    display: block;
    }
    body {
        line-height: 1.5;
        font-weight: normal;
        font-family: "SpoqaHanSans", "NotoSansKR", sans-serif;
        font-size: 14px;
        color: #212529;
    }

    ol, ul {
	    list-style: none;
    }

    h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
        line-height: inherit;
    }

    blockquote, q {
	    quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
	    content: '';
	    content: none;
    }

    em, address{
        font-style:normal;
    }

    input[type=search]::-webkit-search-cancel-button,
    input[type=search]::-webkit-search-decoration,
    input[type=search]::-webkit-search-results-button,
    input[type=search]::-webkit-search-results-decoration {
        -webkit-appearance: none;
        -moz-appearance: none;
    }

    input[type=search] {
        -webkit-appearance: none;
        -moz-appearance: none;
        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        box-sizing: content-box;
    }

    audio:not([controls]) {
        display: none;
        height: 0;
    }

    [hidden] {
        display: none;
    }


    html, body {
        max-width: 100%;
        height:100%;
    }

    a {
        text-decoration: none;
        color: #212529;
    }

    a:active, a:focus,
    a:hover {
        outline: 0;
        text-decoration: none;
    }

    img {
        border: 0; /* 1 */
        vertical-align: top;
        -ms-interpolation-mode: bicubic; /* 2 */
    }

    hr, legend, caption {display:none}

    button{
        background-color:transparent;
    }

    button,
    input,
    select,
    textarea {
        vertical-align: top;
    }
    input,
    select,
    textarea{
        background-color:#fff;
    }

    button,
    input {
        border: none;
    }


    button,
    select {
        text-transform: none;
    }
    button, label{
        cursor: pointer;
    }

    fieldset{
        border:none;
    }

    button,
    html input[type="button"], /* 1 */
    input[type="reset"],
    input[type="submit"] {
        -webkit-appearance: none; /* 2 */
        cursor: pointer; /* 3 */
        *overflow: visible;  /* 4 */
    }

    button[disabled],
    html input[disabled] {
        cursor: default;
    }

    input[type="checkbox"],
    input[type="radio"] {
        box-sizing: border-box; /* 1 */
        padding: 0; /* 2 */
        *height: 13px; /* 3 */
        *width: 13px; /* 3 */
    }

    input[type="search"] {
        -webkit-appearance: textfield; /* 1 */
        -moz-box-sizing: content-box;
        -webkit-box-sizing: content-box; /* 2 */
        box-sizing: content-box;
    }

    input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
    }

    button::-moz-focus-inner,
    input::-moz-focus-inner {
        border: 0;
        padding: 0;
    }
    input{
        width:100%;
    }
    textarea{
        overflow:hidden;
        overflow-y:auto;
        resize:none;
        outline:none;
        border:0;
        background:none;
        word-break:break-all
    }

    table {
        table-layout: fixed;
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
    }

    .datepicker {
        table {
            width: auto;
        }
    }
    
    * {
        box-sizing: border-box;
        line-height:inherit;
        letter-spacing: -0.03125rem;
    }

    .blind {
        overflow: hidden;
        position: absolute;
        top: -999px;
        left: 0;
        line-height: 0;
        font-size: 0;
    }
`;