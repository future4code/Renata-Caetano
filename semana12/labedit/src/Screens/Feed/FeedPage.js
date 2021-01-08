import React from 'react';
import Header from '../../Components/Header/Header';
import {useHistory}from 'react-router-dom';
import * as S from '../../Components/StyledGeral'
import { goToLoginPage} from '../../Routes/Cordinator';
import {useProtectPage}from '../../Hooks/useProtectPage'
import {useRequestData}from '../../Hooks/useRequestData'
import {BaseUrl}from '../../Constants/BaseUrl'
import CardPost from '../../Components/CardPost/CardPost'
import {useForm}from '../../Hooks/useForm'
import {createPost} from '../../Services/User'

function FeedPage() {
    const history=useHistory();
    useProtectPage()
    const { form, onChange } = useForm({ text: "", title: "" });

    const changeInput = (event) => {
      const { value, name } = event.target;
      onChange(value, name);
    };
  
    const formSend = (event) => {
      event.preventDefault();
      createPost(form, history);
    };

    const data = useRequestData(`${BaseUrl}/posts`)

  return (
   <div>
   <Header/>
  <S.FeedContainer>
  
    <S.FeedCard>
    <form onSubmit={formSend}>
    <S.Ppost><u><i><b>Nome</b></i></u></S.Ppost>
          <input name="title" value={form.title} onChange={changeInput} />

        <S.Ppost><u><i><b>Escreva seu Post</b></i></u></S.Ppost>
      
        <textarea
            type="text"
            name="text"
            value={form.text}
            onChange={changeInput}
          />

      
        <S.ButtonPost type='submit'>Postar</S.ButtonPost>
        </form>
    </S.FeedCard>
<div>




</div>


  {data && data.posts.map((posts => {
                return <CardPost
                    key={posts.id}
                    id={posts.id}
                    username={posts.username}
                    title={posts.title}
                    text={posts.text}
                    commentsCount={posts.commentsCount}
                    votesCount={posts.votesCount}
                   
                />
              
            }))}
            
<S.ButtonBack onClick={()=>goToLoginPage(history)}>Voltar</S.ButtonBack>

</S.FeedContainer>

  </div>

  )
}

export default FeedPage;