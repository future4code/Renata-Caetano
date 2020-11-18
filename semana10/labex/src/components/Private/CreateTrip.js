import React from 'react';
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Header from '../Header'


const Container=styled.div`
background-color:white;
width: 100vw;
height: 100vh;
 `;
  
const Conteudo =styled.div` 
color:purple;
text-align:center;
font-size:20px;
`;
 const ButtonRetornar =styled.button` 
 background-color: #f4ecf4;
 border: 1px solid blueviolet;
 border-radius:5px;
 color: blueviolet;
 text-align: center;
 text-decoration: none;
 font-size: 15px;
 padding:5px;
 cursor: pointer;
 &:hover {
 background-color:blueviolet;
 color:white;
  } `;

 
export default function CreateTrip () {
  const history = useHistory();
  
    
  const goToPrivatePage = () => {
    history.push("/PrivatePage")
  };
return(
<Container>
  <Header/>
  <Conteudo>
  <h3><u><i>Criar sua viagem</i></u></h3>
  <ButtonRetornar onClick={goToPrivatePage}>Retornar</ButtonRetornar>
  </Conteudo>
  </Container>
  );
  }
