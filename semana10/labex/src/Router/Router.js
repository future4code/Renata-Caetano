import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../components/HomePage";
import PrivatePage from '../components/Private/PrivatePage';
import Login from '../components/Private/Login';


export default function Router(){
return(
<BrowserRouter>
<Switch>

<Route exact path ='/'>
  <HomePage/>
</Route>

<Route exact path='/PrivatePage'>
  <PrivatePage/>
</Route>

<Route exact path ='/Login'>
  <Login/>
</Route>


</Switch>
</BrowserRouter>
)
}
