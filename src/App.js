import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'TreeSong'
  }
  
  // Use arrow function if you using 'this' to refer a class
  newUsernameChangedHandler = (newUsername) => {
    this.setState({ username: newUsername.target.value});
  }
  
  render() {
    return (
      <div className="App">
        <h1>User I/O</h1>
        <UserInput 
          changed={this.newUsernameChangedHandler}
          currentName={this.state.username}/>
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Roy" />
        <UserOutput userName="Cool" />
      </div>
    );
  }
}

export default App;
