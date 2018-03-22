import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {
  state = {
    users: [
      {username: ''}
    ]
  }
  
  newUsernameHandler = (newUsername) => {
    this.setState({
      users: [
        { username: newUsername }
      ]
    });
  }
  
  render() {
    return (
      <div className="App">
        <h1>User I/O</h1>
        <UserInput />
        <UserOutput 
        click={this.newUsernameHandler.bind(this, 'Yes')} />
        <button onClick={() => this.newUsernameHandler('song')}>Switch Name</button>
        
      </div>
    );
  }
}

export default App;
