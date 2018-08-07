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

        <div className="one">

        <div className="two"> 
          <div className="threeone"> 
            <img className="Image" src={Sample1} />
              <p className="Price">$5</p>
            </div> 

            <div className="threetwo">
            <img className="Image"src={Sample2} />
            <p className="Price">$10</p>
            </div> 

            <div className="threethree"> 
            <img className="Image"src={Sample3} />
            <p className="Price">$15</p>
            </div> 

          </div> 
        </div> 
        
        
        <button type="button" id="boop" name="boop">boop</button>
        <p>Inquiries @ YungIskk</p>
      </div>
    );
  }
}

export default App;
