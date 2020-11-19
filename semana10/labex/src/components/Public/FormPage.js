
import React, { useState } from "react";
import styled from "styled-components";
import Header from '../Header';
import PublicPage from '../Public/PublicPage';
import { useHistory } from "react-router-dom";

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
 const useForm = (initialValues) => {
   
    const [form, setForm] = useState(initialValues);
  
    const onChange = (value, name) => {
     const newForm={ ...form, [name]: value };
     setForm(newForm);
    };
    return { form, onChange };
};



    
export default function FormPage() {
    const history = useHistory();
    const goToPublicPage = () => {
        history.push("/PublicPage")
      };

    const { form, onChange } = useForm({ name: "", age: "", email: "" });
  
    const handleInputChange = (event) => {
      const { value, name } = event.target;
  
      onChange(value, name);
    };
  
    const onSubmitForm = (event) => {
      event.preventDefault();
      console.log(form);
    };

return(
<Container>
  <Header/>
  <Conteudo>
  <h3><u><i>Formulário de inscrição </i></u></h3>
  <form onSubmit={onSubmitForm}>
        <input
          value={form.name}
          placeholder={"Nome"}
          onChange={handleInputChange}
          name={"name"}
          type={"text"}
          pattern={"[A-Za-z]{3,}"}
          required
        />
        <input
          value={form.age}
          placeholder={"Idade"}
          onChange={handleInputChange}
          name={"age"}
          type={"number"}
          min="18"
          required
        />
        <input
          value={form.email}
          placeholder={"Email"}
          onChange={handleInputChange}
          name={"email"}
          type={"email"}
          required
        />
        <button>Enviar</button>
      </form>
  <ButtonRetornar onClick={goToPublicPage}>Retornar</ButtonRetornar>
  </Conteudo>
  </Container>
  );
  }

