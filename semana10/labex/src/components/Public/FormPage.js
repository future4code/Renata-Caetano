
import React, { useState } from "react";
import styled from "styled-components";
import Header from '../Header';
import PublicPage from '../Public/PublicPage';
import { useHistory } from "react-router-dom";
import Axios from "axios";

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
  
 const ButtonEnviar =styled.button` 
 background-color: #f4ecf4;
 border: 1px solid blueviolet;
 border-radius:5px;
 color: blueviolet;
 text-align: center;
 text-decoration: none;
 font-size: 15px;
 padding:5px;
 margin:10px;
 width:70px;
 cursor: pointer;
 &:hover {
 background-color:blueviolet;
 color:white;

  } `;

 const useForm = (initialValues) => {
   
    const [form, setForm] = useState(initialValues);
  
    const onChange = (value, name) => {
    setForm( { ...form, [name]: value });
     
    };
    return { form, onChange };
};
  
export default function FormPage() {
    const history = useHistory();
    const goToPublicPage = () => {
        history.push("/PublicPage")
      };
  
    const { form, onChange } = useForm({ name: "", age: "", email: "", aplicationText:'',profession:'',country:'' });
  
    const handleInputChange = (event) => {
      const { value, name } = event.target;
  
      onChange(value, name);
    };
  
    const onSubmitForm = (event) => {
      event.preventDefault();
      console.log(form);
    };
    const submitForm = () => {
      Axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/renata-caetano-dumont/trips/9XZy4WB94cAaTKNQIFRo/apply`, form)
          .then(response => {
              console.log(response)
              alert(response.data.message)
          })
          .catch(e => {
              console.log(e)
          })
  }


return(
<Container>
  <Header/>
  <Conteudo>
  <h3><u><i>Formulário de inscrição </i></u></h3>

      <form onSubmit={onSubmitForm}>
       <p> <input
          value={form.name}
          placeholder={'Nome'}
          onChange={handleInputChange}
          name={'name'}
          type={'text'}
          pattern={'[A-Za-z]{3,}'}
          required
        /></p>
        <p><input
          value={form.age}
          placeholder={'Idade'}
          onChange={handleInputChange}
          name={'age'}
          type={'number'}
          min='18'
          required
        /></p>
        <p><input
          value={form.applicationText}
          placeholder={'Texto de aplicação'}
          onChange={handleInputChange}
          name={'applicationText'}
          type={'text'}
          pattern={'[A-Za-z]{30,}'}
          required
        /></p>
      <p>  <input
          value={form.profession}
          placeholder={'Profissão'}
          onChange={handleInputChange}
          name={'profession'}
          type={'text'}
          pattern={"[A-Za-z]{10,}"}
          required
        /></p>
       <p> <input
          value={form.country}
          placeholder={"País"}
          onChange={handleInputChange}
          name={"country"}
          type={"text"}
          required
        /></p>
        <ButtonEnviar type='submit'>Enviar</ButtonEnviar>
      </form>
  
  <ButtonRetornar onClick={goToPublicPage}>Retornar</ButtonRetornar>
  </Conteudo>
  </Container>
  );
  }

