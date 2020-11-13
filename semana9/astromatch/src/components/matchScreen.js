import React, { useState, useEffect } from 'react';
import {CardStyle,CardInfo,Photo,ImgMatch,ButtonClear} from './Styled/styled'
import axios from 'axios';

export default function MatchScreen(props) {
    const [match, setMatch] = useState([]);
  
    const clear=()=>{
    axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/renata-caetano-dumont/clear")
    .then(() => {
        getMatch()
        window.alert('Clear OK')  
    
    }).catch((error) => {
        console.log(error)
    })
  
  }
useEffect(() => {
    getMatch();
  }, []);

    const getMatch =()=>{
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/renata-caetano-dumont/matches")
            .then((response) => {
                setMatch(response.data.matches)
            }).catch((error) => {
                console.log(error)
            })
        }
    const viewMatch = match.map((user)=>{
        return <div key={user.id}>
        <p> <ImgMatch src={user.photo}></ImgMatch>{user.name}</p>
        </div>
    })

    return (
        <CardStyle>
        <CardInfo>
           {viewMatch}
           </CardInfo>
            
           <ButtonClear onClick={clear}>Clear</ButtonClear>
             
        </CardStyle>
    );
}

























