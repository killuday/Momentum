import styled from "styled-components";

export const Welcom=styled.div`
font-family: 'Manrope', sans-serif;
position:absolute;
text-align:center;
padding:1rem;
top:50%;
left:50%;
-ms-transform:translate(-50%,50%);
transform:translate(-50%,-50%);
`
export const TimeStamp=styled.p`
font-size:8.2rem;
font-weight:500;
margin:0;
padding:0;

@media screen and (max-width: 600px){
    font-size:5rem;  
}

`
export const Greeting=styled.p`
font-size:3rem;
font-weight:600;
margin:0;
padding:0;

@media screen and (max-width :600px){
    font-size:3rem;
}

`