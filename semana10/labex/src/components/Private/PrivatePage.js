import React from 'react';
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Logo from '../Img/Logo.jpg'

 const PrivatePage = () => {
  const history = useHistory();

  const goToCreateTrip = () => {
    history.push('/CreateTrip')
  };
  const goToDetailTrip = () => {
    history.push("/DetailTrip")
  };
  const goToListTrip = () => {
    history.push("/ListTrip")
  };
  const goToHomePage = () => {
    history.push("/")
  };

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
  const ButtonTrip =styled.button` 
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
  color:purple;
  
  } `;
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
<Container>
    <Header>
    <Titulo>
    <h1>LabeX</h1>
    </Titulo>
    <ImgLogo src={Logo} alt='superhero'></ImgLogo>
    </Header>

<Conteudo>
<p>Vamos marcar um viagem?</p>
<ButtonTrip onClick={goToCreateTrip}>Criar Viagem</ButtonTrip>
<p>Vamos espiar as viagens marcadas?</p>
<ButtonTrip onClick={goToListTrip}>Listar Viagem</ButtonTrip>
<p>Quer mais detalhes sobre as viagens?</p>
<ButtonTrip onClick={goToDetailTrip}>Detalhes das Viagens</ButtonTrip>
<p>Página Inicial? Não vá embora sem criar sua viagem combinado?</p>
<ButtonTrip onClick={goToHomePage}>Retornar</ButtonTrip>
</Conteudo>
    
   
   
   

  

   </Container>
  )

}
export default PrivatePage;