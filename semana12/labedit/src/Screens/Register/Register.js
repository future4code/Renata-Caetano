import React from 'react';
import Header from '../../Components/Header/Header';
import {useHistory}from 'react-router-dom';
import * as S from '../../Components/StyledGeral'
import {useForm}from '../../Hooks/useForm'
import {register}from '../../Services/User'
import { useUnprotectPage } from '../../Hooks/useUnprotectPage';
import { goToHomePage } from '../../Routes/Cordinator';


function Register() {
  useUnprotectPage()
    const history=useHistory();
    const {form,onChange}=useForm({username:'',email:'',password:''})


    const changeInput=(event)=>{
      const{value,name}=event.target;
      onChange(value,name);
    }
    const formSend=(event)=>{
      event.preventDefault();
        register(form,history)
    }
  return (
  <div>
   <Header/>
  <S.Container>
  <form onSubmit={formSend}>
<input value={form.username} placeholder = 'Username' onChange={changeInput}name='username'></input>
<br></br>

<input value={form.email} placeholder ='Email'onChange={changeInput}type='email'name='email'></input>
<br></br>
<input value={form.password} placeholder = 'Password' type='password'onChange={changeInput}name='password'></input>
<br></br>
<S.ButtonEnter type='submit'>Cadastrar</S.ButtonEnter>
<S.ButtonBack onClick={()=>goToHomePage(history)}>Voltar</S.ButtonBack>
</form>


</S.Container>

</div> 

  )
}

export default Register;