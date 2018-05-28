
import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <List text="some text" />
        
        <p>
        this is some text
        </p>
      </div>
    );
  }
}

class List extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Just a list trial for {this.props.text}</h1>
        <ul>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
        </ul>
      </div>
    );
  }
}

/*
import React from "react";
var App = React.createClass({
  
  getInitialState: function() {
    return {
      mydatabase: []
    };
  },

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(members => this.setState({ members: members }));
  },

  render: function() {
    return (
        <div className="Users">
          <h1>Name</h1>
          {this.state.members.map(member =>
            <div key={member.id}>{member.name}</div>
          )}
        </div>
    );
  }

});

module.exports = App;
*/
export default App;
