import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import foto1 from './img/social-3408791__340.webp' ;
import foto2 from './img/homem.webp'
import foto3 from './img/like.webp'


class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://cdn.pixabay.com/photo/2017/01/18/08/25/social-media-1989152_960_720.jpg'}
        />
         <Post
          nomeUsuario={'Romeu'}
          fotoUsuario={foto2}
          fotoPost={foto1}
        />
         <Post
          nomeUsuario={'Amanda'}
          fotoUsuario={foto3}
          fotoPost={'https://cdn.pixabay.com/photo/2020/06/09/18/11/box-write-in-it-5279529_960_720.jpg'}
        />
      </div>

    );
  }
}

export default App;
