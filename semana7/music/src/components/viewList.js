import axios from "axios";
import React from "react";
import styled from "styled-components";

const DeleteButton = styled.span`
  color: pink;
  margin-left: 10px;
  &:hover {
  cursor: pointer;
}
`;
const VisualizarButton = styled.span`
  color: blue;
  margin-left: 10px;
  &:hover {
  cursor: pointer;
}
`;
const AddButton = styled.span`
  color: green;
  margin-left: 10px;
  &:hover {
  cursor: pointer;
}
`;

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/";

const axiosConfig = {
  headers: {
    Authorization: "renata-caetano-dumont"
  }
};

export default class ViewList extends React.Component {
  state = {
    list: []
  };

  componentDidMount = () => {
    this.getAllPlaylist();
  };
  componentDidUpdate =()=>{
    this.getAllPlaylist();
  };

  getAllPlaylist = () => {
    
    axios.get(baseUrl, axiosConfig)
      .then((response) => {
        this.setState({ list: response.data.result.list });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  deleteList = (listId) => {
    axios
      .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${listId}`, axiosConfig)
      .then((response) => {
      alert("Playlist deletada com sucesso!");
      this.getAllPlaylist();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  render() {
    const renderList = this.state.list.map((list) => {
      return (
        <p key={list.id}>{list.name}
          <DeleteButton onClick={() => this.deleteList(list.id)}> Deletar  </DeleteButton>
          <VisualizarButton onClick={() => this.visualizarList(list.id)}> Visualizar  </VisualizarButton>
          <AddButton onClick={() => this.addMusica(list.id)}> Add Música  </AddButton>
        </p>
      );
    });

    return <div>{renderList}</div>;
  }
}