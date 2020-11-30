import React from 'react';
import styled from "styled-components";
import Logo from './Img/Logo.jpg'


export default function Header() {

const ImgLogo = styled.img`
height:200px;
width:200px;
padding:0;
margin-top:0;
`;
const Header = styled.div`
display:flex;
justify-content:center;
`;

const Titulo =styled.h1` 
color:purple;
text-align:center;
font-size:30px;
`;
return(

<Header>
<Titulo>
<h1>LabeX</h1>
</Titulo>
<ImgLogo src={Logo} alt='superhero'></ImgLogo>
</Header>

);
}