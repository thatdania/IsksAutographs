import React, { Component } from 'react';
import Sample1 from './images/2.jpg';
import Sample2 from './images/1.jpg';
import Sample3 from './images/3.jpg';
import './App.css';
import ReactPlayer from 'react-player'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="IsksAutographs">
          <h1 className="title">LOOP</h1>
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
        
        
        <div className="btnposition"> 
        <a className="boop" href="https://www.instagram.com/yungiskk/?hl=en">boop</a>
        </div>

        <div className="text"> 
        <p>Inquiries @ YungIskk</p>
        </div> 

        <div className="Audio" width="320" height="240">
         return <ReactPlayer url='https://www.youtube.com/watch?v=Urc9lKFe-m8' playing className="Audio2" />
        </div> 

      </div>
    );
  }
}

export default App;
