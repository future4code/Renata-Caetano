import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FeedPage from '../Screens/Feed/FeedPage';
import LoginPage from '../Screens/Login/LoginPage';
import PostPage from '../Screens/Post/PostPage';
import Register from '../Screens/Register/Register';
import HomePage from '../Screens/HomePage.js'
// import { Container } from './styles';

function Router() {
  return (
<BrowserRouter>
<Switch>
    
<Route exact path='/'>
    <HomePage/>
</Route>
<Route exact path='/LoginPage'>
    <LoginPage/>
</Route>
<Route exact path='/Register'>
    <Register/>
</Route>
<Route exact path='/PostPage'>
    <PostPage/>
</Route>
<Route exact path='/FeedPage'>
    <FeedPage/>
</Route>
<Route>
    <div>Erro:404</div>
</Route>

</Switch>
</BrowserRouter>
  )
}

export default Router;