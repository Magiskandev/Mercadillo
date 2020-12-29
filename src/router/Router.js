import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Login from '../pages/Login'
import Register from '../pages/Register'
import Main from '../pages/Main'
import Profile from '../pages/Profile'
import Home from '../pages/Home'

class Router extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default Router;
