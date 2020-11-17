import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../components/HomePage";
import PrivatePage from '../components/Private/PrivatePage';
import Login from '../components/Private/Login';
import CreateTrip from '../components/Private/CreateTrip'
import DetailTrip from '../components/Private/DetailTrip'
import ListTrip from '../components/Private/ListTrips'

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

<Route exact path ='/CreateTrip'>
  <CreateTrip/>
</Route>

<Route exact path ='/DetailTrip'>
  <DetailTrip/>
</Route>

<Route exact path ='/ListTrip'>
  <ListTrip/>
</Route>




</Switch>
</BrowserRouter>
)
}
