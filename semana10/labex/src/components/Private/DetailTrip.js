import styled from "styled-components";
import Logo from '../Img/Logo.jpg'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useProtectPage from '../Hooks/UseProtectPage'

 export default function DetailTrip () {
  const [trip, setTrip] = useState({});
  useProtectPage();

  useEffect(() => {
    getTripDetail();
  }, []);

  const getTripDetail = () => {
    axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/renata-caetano-dumont/trip/CUE5HJyAcKZgzMu0Wq4R",
        {
          headers: {
            auth: localStorage.getItem("token")
          }
        }
      )
      .then((res) => {
        setTrip(res.data.trip);
      })
      .catch((err) => {
        console.log(err);
      });
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
      <p>{trip.name}</p>
      <p>{trip.planet}</p>
</Conteudo>
  </Container>
  );
  }