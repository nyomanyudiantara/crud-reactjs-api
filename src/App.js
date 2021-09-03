import React, { Component } from 'react'
import NavbarComponent from './components/NavbarComponent'
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import HomeContainer from './containers/HomeContainer';
import EditUserContainer from './containers/EditUserContainer';
import DetailUserContainer from './containers/DetailUserContainer';
import CreateUserContainer from './containers/CreateUserContainer';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <BrowserRouter>
          <Route path="/" exact component={HomeContainer}>
          </Route>
          <Route path="/create" exact component={CreateUserContainer}>
          </Route>
          <Route path="/edit/:id" exact component={EditUserContainer}>
          </Route>
          <Route path="/details/:id" exact component={DetailUserContainer}>
          </Route>
        </BrowserRouter>
      </div>
    )
  }
}

