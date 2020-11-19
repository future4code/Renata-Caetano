import React, { useState, useEffect } from 'react';
import {CardStyle,CardInfo,Photo,FooterStyle,Gostar,X} from './Styled/styled'
import axios from 'axios';
import gostar from './img/gostar.png';
import x from './img/x.png';

export default function Card(props) {
    const [profile, setProfile] = useState({});
    
    const getProfile =()=>{
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/renata-caetano-dumont/person")
            .then((response) => {
                setProfile(response.data.profile)
            }).catch((error) => {
                console.log(error)
            })
        }

    useEffect(() => {
        getProfile();
    }, [])

   const choosePerson = (response) =>{
     const body = {
         id: profile.id,
         choice: response
     }
     axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/renata-caetano-dumont/choose-person",body)
     .then(() => {
        getProfile();
     }).catch((error) => {
         console.log(error)
     })
   } 
    return (
        <CardStyle>
                     
            <CardInfo>
                <Photo
                    src={profile.photo}
                    alt="Fotos de pessoas"
                    width="300"
                    height="230"
                />
                <h3>
                {profile.name}, {profile.age}
                </h3>
                <p>{profile.bio}</p>
            
            </CardInfo>
            
        <FooterStyle>

        <X src={x} alt='x' onClick={()=>choosePerson(false)} /> 


        <Gostar src={gostar} alt='coracao' onClick={()=>choosePerson(true)}/> 
        
        </FooterStyle>
             
        </CardStyle>
    );
}

























