import React, { Component } from 'react';
import './App.css';
import logo from './prof1.jpg';
import logo2 from './small.png';
import pr from './pr.jpg';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <div className="">
        <div class="cover bg-left bg-center-l fancyhead">
          <div className="bg-black-80 pb5 pb6-m pb10-l">
            <Nav />
            <div className='pl5'>
            <img src={logo} className="ba bw1 b--gold mb4 br-100 h5 w5 floatimg" alt="lf"/>
            </div>
            <div className="tc-l mt4 mt5-m mt6-l ph3">
              <h3 class="f2 f1-m f-headline-l measure-narrow lh-title mv0">
                <span class="bg-black-20 lh-copy white pa1 tracked-tight">
                  Linsey Falkner
                </span>
              </h3>
              <h2 className="f6 gray fw2 ttu tracked">Web Developer | Adventurer | Artist</h2>
              <h2 className="fw1 f3 white-80 mt3 mb4">I'm passionate about learning something new every single day and giving back to my community.</h2>
            </div>
          </div>
        </div> 

        <article>
          <header class="bg-gold sans-serif">
            <div class="mw9 center pa4 pt5-ns ph7-l">
              <time class="f6 mb2 dib ttu tracked"><small></small></time>
              <h3 class="f2 f1-m f-headline-l measure-narrow lh-title mv0">
                <span class="bg-black-90 lh-copy white pa1 tracked-tight">
                  Portfolio
                </span>
              </h3>
              <h4 class="f3 fw1 georgia i">I have been createing websites for sevral years. Here are a few websites and applications I have created,</h4>
              <h5 class="f6 ttu tracked black-80"></h5>
            </div>
          </header>
          <div class="pa4 ph7-l georgia mw9-l center">
              <p class="f5 f3-ns lh-copy measure georgia">
                In 1958 he published a piece in Venture proclaiming what he called "Sturgeon's Revelation"
              </p>
            <p class="f6 f5-ns lh-copy measure i pl4 bl bw1 b--gold mb4">
              I repeat Sturgeon's Revelation, which was wrung out of me after twenty years of wearying defense of science fiction against attacks of people who used the worst examples of the field for ammunition, and whose conclusion was that ninety percent of SF is crud. Using the same standards that categorize 90% of science fiction as trash, crud, or crap, it can be argued that 90% of film, literature, consumer goods, etc. is crap. In other words, the claim (or fact) that 90% of science fiction is crap is ultimately uninformative, because science fiction conforms to the same trends of quality as all other artforms.
            </p>
            <p class="f5 f4-ns lh-copy measure mb4">
            You don't have to bounce a tennis ball very far in San Francisco before it will hit two developers complaining about how many js tools/frameworks there are for development in 2015 and how much unneccessary complexity they add. Doing a search on twitter for 'too many js tools' or 'yet another js framework' returns... a lot of people lamenting the current state of affairs.
          </p>
          </div>
        </article>
      </div>
    );
  }
}

export default App;
