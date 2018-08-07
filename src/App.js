import React, { Component } from 'react';
import Sample1 from './images/2.jpg';
import Sample2 from './images/1.jpg';
import Sample3 from './images/3.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Isks Autographs">
          <h1 className="title">Loop</h1>
        </header>
        <img className="Image" src={Sample1} />
        <img className="Image"src={Sample2} />
        <img className="Image"src={Sample3} />
        <div className="Price">
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
