import styled, {createGlobalStyle} from 'styled-components';
import BGImage from './images/background.jpg';

export const GlobalStyle = createGlobalStyle`
html{
    height:100%;
}
body{
    background-image:url(${BGImage});
    background-size:cover;
    background-position: center center;
    display:flex;
    justify-content:center;
}
button{
    background-color:lightblue;
    border:1px solid yellow;
    border-radius:5px;
    margin:5px 0;
    width:100%;
    height:30px;
    cursor:pointer;
}
*{
    box-sizing:border-box;
}
`