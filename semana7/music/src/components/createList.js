import axios from "axios";
import React from "react";
import styled from 'styled-components';
import Viewlist from './viewList';



export default class CreateList extends React.Component{
    state = {
        nameValue: "",
    };
    
      createPlayList = () => {
        const body = {
          name: this.state.nameValue,
          
        };

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",body,{
            headers: {
              Authorization: "renata-caetano-dumont"
            }
          }
        )
        .then((response) => {
          alert("PlayList criada com sucesso !!!");
          this.setState({ nameValue: "" });
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
  
    onChangeNameValue = (event) => {
      this.setState({ nameValue: event.target.value });
    };
  
    render() {
      return (
        <div>
          <h1>PlayList</h1>
         
          <br/>
          <hr/>
          <p><strong>Criar sua Playlist</strong></p>
          <input value={this.state.nameValue} onChange={this.onChangeNameValue} placeholder ="Digite nome da PlayList"/>
          <button onClick={this.createPlayList}>Create</button>
          <p><strong>Listar Playlists </strong></p>
          <Viewlist />
        </div>
      );
    }
  }
  
 




