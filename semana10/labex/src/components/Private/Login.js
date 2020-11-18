import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Logo from '../Img/Logo.jpg'

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
   const Container=styled.div`
   background-color:white;
   width: 100vw;
   height: 100vh;
    `;
     
   const Conteudo =styled.div` 
   padding:100px;
   color:purple;
   text-align:center;
   font-size:20px;
   `;
   const ButtonLogin =styled.button` 
   background-color: #f4ecf4;
   border: 1px solid blueviolet;
   border-radius:5px;
   color: blueviolet;
   text-align: center;
   text-decoration: none;
   font-size: 15px;
   padding:5px;
   margin:20px;
   width:70px;
   cursor: pointer;
   &:hover {
   background-color:blueviolet;
   color:purple;
   

   } `;
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
     color:purple;
 
  
     } `;


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  
  const goToHomePage = () => {
    history.push("/")
  };
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      history.push("/PrivatePage");
    }
    
  }, [history]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (p) => {
    setPassword(p.target.value);
  };

  const login = () => {
    const body = {
      email: email,
      password: password
    };
  

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/renata-caetano-dumont/login",
        body
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        history.push("/PrivatePage");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
  
    <Container>
      <Header>
      <Titulo>
      <h1>LabeX</h1>
      </Titulo>
      <ImgLogo src={Logo} alt='superhero'></ImgLogo>
      </Header>
<Conteudo>
     <p> <input value={email} onChange={handleEmail} placeholder= 'E-mail' /></p>
     <p> <input value={password} onChange={handlePassword} placeholder= 'password' type='password'/></p>
      <ButtonLogin onClick={login}>Login</ButtonLogin>
      <ButtonRetornar onClick={goToHomePage}>Retornar</ButtonRetornar>
</Conteudo>
  </Container>
  );
}

