
import axios from "axios";
import React from "react";
import styled from "styled-components";

const DelButton = styled.span`
  color: red;
  margin-left: 10px;
`;

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const axiosConfig = {
  headers: {
    Authorization: "renata-caetano-dumont"
  }
};

export default class ViewList extends React.Component {
  state = {
    list: [
        {
            id:'1',
            name:'TESTE'
        }
    ]
  };
 
  render() {
    const renderList = this.state.list.map(list => {
        return<p key={list.id}>{list.name}</p>
            })
       
      return(

    <div>{renderList}</div>
      ) 
    }
  }



  