import React from 'react';
import * as S from '../StyledGeral'
import comentarios from '../../Assests/IMG/comentarios.svg'
import like from '../../Assests/IMG/like.png'
import nolike from '../../Assests/IMG/nolike.png'
import {goToPostPage}from '../../Routes/Cordinator'
import {useHistory}from 'react-router-dom';


export default function CardPost(props) {
    const history=useHistory();
  return (
<S.FeedCard>
    <section>
<S.Ppost>{props.username}</S.Ppost>
<hr/>
</section>
<section>
{props.text}
<hr/>
</section>
<S.Footer>
<S.AreaImg>
<S.ImgNoLike src={nolike}alt='nao gostei'/> <b> {props.votesCount} </b><S.ImgLikes src={like} alt='gostar'/>
</S.AreaImg>
<S.ImgComentario onClick={()=>goToPostPage(history)} src={comentarios} /><b>{props.commentsCount}</b>
</S.Footer>




</S.FeedCard>
  )


}

