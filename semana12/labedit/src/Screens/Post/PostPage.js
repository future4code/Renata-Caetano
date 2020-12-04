import React from 'react';
import Header from '../../Components/Header/Header'
import {useHistory}from 'react-router-dom';
import * as S from '../../Components/StyledGeral'
import { goToFeedPage} from '../../Routes/Cordinator';

function PostPage() {
  const history=useHistory();
  return (    <div>
<Header/>
  <S.Container>
  <S.FeedCard>
        <S.Ppost><u><i><b>Escreva seu Comentário</b></i></u></S.Ppost>
        <S.InputPost></S.InputPost>
        <S.ButtonEnter>Postar</S.ButtonEnter>
        
 </S.FeedCard>
  <S.ButtonBack onClick={()=>goToFeedPage(history)}>Voltar</S.ButtonBack>
  </S.Container>
  </div>

  )
}

export default PostPage;