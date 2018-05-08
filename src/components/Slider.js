import React from 'react';
import './Slider.css';
import tab1 from './1tab.jpg';

const Slider = () => {
	return(
      <div id='slider'>
      <div class="tabs">
          <input type="radio" name="tabs" id="tabone"/>
          <label for="tabone" className="dim "><img src={tab1}
           className="db w-100 br--top" alt="first"/></label>
          }
					<div className="tab pa4 ph7-l georgia mw9-l center">
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
          
          <input type="radio" name="tabs" id="tabtwo"/>
          <label for="tabtwo" className="dim "><img src="http://placekitten.com/g/300/300"
           className="db w-100 br--top" alt="first"/></label>
					<div className="tab pa4 ph7-l georgia mw9-l center">
              <h1>Overtime Logging Application2</h1>
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

          <input type="radio" name="tabs" id="tabthree"/>
          <label for="tabthree"className="dim "><img src="http://placekitten.com/g/300/300"
           className="db w-100 br--top" alt="first"/></label>
					<div className="tab pa4 ph7-l georgia mw9-l center">
              <h1>Overtime Logging Application3</h1>
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

          <input type="radio" name="tabs" id="tabfour"/>
          <label for="tabfour" className="dim "><img src="http://placekitten.com/g/300/300"
           className="db w-100 br--top" alt="first"/></label>
					<div className="tab pa4 ph7-l georgia mw9-l center">
              <h1>Overtime Logging Application4</h1>
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

          <input type="radio" name="tabs" id="tabfive"/>
          <label for="tabfive" className="dim "><img src=""
           className="db w-100 br--top" alt="first"/></label>
					<div className="tab pa4 ph7-l georgia mw9-l center">
              <h1>Overtime Logging Application5</h1>
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
      </div>
		)
}

export default Slider;

