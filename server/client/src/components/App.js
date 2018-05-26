import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Dashboard from './Dashboard';
import Header from './Header';
import Profile from './Profile';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="container">
            <Route exact path="/" component={Profile} />
            <Route path="/dashboard" component={Dashboard} />
          </div>
        </div>
      </BrowserRouter>
    )
  }
};

export default connect(null, actions)(App);