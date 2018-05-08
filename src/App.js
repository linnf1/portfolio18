import React, { Component } from 'react';
import './App.css';
import logo from './prof1.jpg';
import Nav from './components/Nav';
import Body from './components/Body';

class App extends Component {
  render() {
    return (
      <div className="">
        <div id='showcase' className="showcase">
          <div className="bg-black-70 pb5 pb6-m pb10-l">
            <Nav />

            <div className='pl5'>
            <img src={logo} className="ba bw1 b--gold mb4 br-100 h5 w5 floatimg" alt="lf"/>
            </div>
            <div className="tc-l mt4 mt5-m mt6-l ph3">
              <h3 className="f2 f1-m f-headline-l measure-narrow lh-title mv0">
                <span className="bg-black-20 lh-copy white pa1 tracked-tight">
                  Linsey Falkner
                </span>
              </h3>
              <h2 className="f6 gray fw2 ttu tracked">Web Developer | Adventurer | Artist</h2>
              <h2 className="fw1 f3 white-80 mt3 mb4">I'm passionate about learning something new every single day and perfecting my skills.</h2>
            </div>
          </div>
        </div> 

        <Body />

        
      </div>
    );
  }
}

export default App;
