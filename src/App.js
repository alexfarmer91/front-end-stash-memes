import React from 'react';
import TopBar from './components/TopBar.js'
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <TopBar />
        <p>some text</p>
      </div>
    );
  }
}

export default App;
