import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Isks Autographs">
          <h1 className="title">Loop</h1>
        </header>
        <div className="Price">
        <img src={"./images/1.jpg"} />
          <p>$5</p>
          <p>$10</p>
          <p>$15</p>
        </div> 
        
        <button type="button" id="boop" name="boop">boop</button>
        <p>Inquiries @ YungIskk</p>
      </div>
    );
  }
}

export default App;
