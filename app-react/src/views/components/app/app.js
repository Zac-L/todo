import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from 'views/pages/home/home';
import LoginPage from 'views/pages/login/login';
import SignupPage from 'views/pages/signup/signup';
import TodosPage from 'views/pages/todos-list/todos-list';
import NotFoundPage from 'views/pages/not-found/not-found';



class App extends Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/todos" component={TodosPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
