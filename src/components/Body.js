import React from 'react';
import './Body.css';


const Body = () => {
	return(
		     <div>
          <header className="bg-gold sans-serif">
            <div className="mw9 center pa4 pt5-ns ph7-l">
              <time className="f6 mb2 dib ttu tracked"><small></small></time>
              <h3 className="f2 f1-m f-headline-l measure-narrow lh-title mv0">
                <span className="bg-black-90 lh-copy white pa1 tracked-tight">
                  Portfolio
                </span>
              </h3>
              <h4 className="f3 fw1 georgia i">I have been createing websites for sevral years. Here are a few websites and applications I have built,</h4>
              <h5 className="f6 ttu tracked black-80">Words</h5>
            </div>
          </header>
          <div className="pa4 ph7-l georgia mw9-l center">
              <h1>Overtime Logging Application</h1>
              <p className="f5 f3-ns lh-copy measure georgia">
                This was an application for a company to track it's employees requests for overtime each week.<br />
                <strong> Technologies used: </strong>
              </p>

            <p className="f6 f5-ns lh-copy measure i pl4 bl bw1 b--gold mb4">
              HTML <br/> CSS <br/> Ruby on Rails
            </p>
            <p className="f5 f4-ns lh-copy measure mb4">
            You can look at a demo of it, here:
          </p>
          </div>
          


        </div>
		)
}

export default Body;