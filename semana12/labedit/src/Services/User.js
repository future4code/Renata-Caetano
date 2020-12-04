import axios from "axios";
import { BaseUrl } from '../Constants/BaseUrl';
import  {goToFeedPage}  from '../Routes/Cordinator';

export const login = (body, history) => {
  axios
    .post(`${BaseUrl}/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      goToFeedPage(history);
    })
    .catch((err) => {
      alert("Email ou senha inválidos :(");
      console.log(err.mensage);
    });
};

export const register = (body, history) => {
  axios
  .post(`${BaseUrl}/signup`, body)
  .then((res) => {
    localStorage.setItem("token", res.data.token);
    goToFeedPage(history);
  })
  .catch((er) => {
    alert("Username ja cadastrado(");
    console.log(er.mensage);
  });
};


  export const createPost = (body, history) => {
    const token = localStorage.getItem("token");
    axios
      .post(`${BaseUrl}/posts`, body, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => {
        goToFeedPage(history);
      })
      .catch((erro) => {
        console.log(erro.mensage);
      });
  };

  