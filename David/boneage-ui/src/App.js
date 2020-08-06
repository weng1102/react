import React, { Component } from 'react';
import BoneAgeStudies from './Components/boneage-studies';
import logo from './su.png';
import './App.css';

class App extends Component {
  constructor() {
    super();  // always call base constructor (with props?)
    this.state = {
      studies: [
        {
          id: '1',
          name: 'ascension 1',
        },
        {
          id: '2',
          name: 'ascension 2',
        },
        {
          id: '3',
          name: 'ascension 3',
        },
        {
          id: '4',
          name: 'ascension 4',
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Bone Age UI</h1>
        </header>
        <div className="App-intro">
          My App
          <BoneAgeStudies studies={this.state.studies}/>
        </div>
      </div>
    );
  }
}

export default App;
