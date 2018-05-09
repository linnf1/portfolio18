import React from 'react';
import './Slider.css';
import Collapsible from 'react-collapsible';

import t1 from './imgs/tab3.jpg';
import t2 from './imgs/tab1.jpg';
import t3 from './imgs/tab4.jpg';
import t4 from './imgs/tab2.jpg';
import t5 from './imgs/tab4.jpg';
import otmock2 from './imgs/otmock2.jpg';
import brainmock from './imgs/brainmock.jpg';
import hkmock from './imgs/hkmock.jpg';
import robomock from './imgs/robomock.jpg';



const Slider = () => {
	return(
      <div id='tc center'>
      <Collapsible triggerStyle={{float: 'none', margin: '0 auto'}} trigger={
        <div>
       <h1 class="tc grey dim f4 mv0 pv3 ph5">Overtime Logging Application</h1>
        </div>
        }
        >
        
		  <div class="padme mw9 center pt0 pv0-m pv0-ns">
        <div class="db dtc-ns v-mid-ns">
          <p className="lh-copy f5 f3-ns measure georgia">
          This was an application for a company to track it's employees requests for overtime each week.<br />
          <strong> Technologies used: </strong>
        </p>
          <p className="f6 f5-ns lh-copy measure i pl4 bl bw1 b--gold mb4">
            HTML <br/> CSS <br/> Ruby on Rails
          </p>
          <p className="f5 f4-ns lh-copy measure mb4">
          Github and LiveApp links here
        </p>
         
        </div>
        <div class="db dtc-ns v-mid ph2 pr0-ns pl3-ns">
        <img src={otmock2} alt="prev" className=""/>
        
        </div>
        </div>
		
      </Collapsible>
      
        <Collapsible triggerStyle={{background: 'red'}} trigger={
        <div>
       <h1 class="tc dim f4 grey mv0 pv3 ph5">Smart Brain</h1>
        </div>
        }
        >
        
      <div class=" mw9 center pt0 pb1 pv0-m pv0-ns">
        <div class="db dtc-ns v-mid-ns">
          <p className="lh-copy f5 f3-ns measure georgia">
          This was an application for a company to track it's employees requests for overtime each week.<br />
          <strong> Technologies used: </strong>
        </p>
          <p className="f6 f5-ns lh-copy measure i pl4 bl bw1 b--gold mb4">
            HTML <br/> CSS <br/> Ruby on Rails
          </p>
          <p className="f5 f4-ns lh-copy measure mb4">
          Github and LiveApp links here
        </p>
         
        </div>
        <div class="db dtc-ns v-mid ph2 pr0-ns pl3-ns">
        <img src={brainmock} alt="prev" className=""/>
        </div>
        </div>
      </Collapsible>
      
        <Collapsible triggerStyle={{background: 'red'}} trigger={
        <div>
       <h1 class="tc dim f4 grey mv0 pv3 ph5">Hawleyville Kennels</h1>
        </div>
        }
        >
        
      <div class=" mw9 center pt0 pb1 pv0-m pv0-ns">
        <div class="db dtc-ns v-mid-ns">
          <p className="lh-copy f5 f3-ns measure georgia">
          This was an application for a company to track it's employees requests for overtime each week.<br />
          <strong> Technologies used: </strong>
        </p>
          <p className="f6 f5-ns lh-copy measure i pl4 bl bw1 b--gold mb4">
            HTML <br/> CSS <br/> Ruby on Rails
          </p>
          <p className="f5 f4-ns lh-copy measure mb4">
          Github and LiveApp links here
        </p>
         
        </div>
        <div class="db dtc-ns v-mid ph2 pr0-ns pl3-ns">
        <img src={hkmock} alt="prev" className=""/>
        
        </div>
      </div>

      </Collapsible>

        <Collapsible triggerStyle={{background: 'red'}} trigger={
        <div>
       <h1 class="tc dim f4 grey mv0 pv3 ph5">RoboFriends</h1>
        </div>
        }
        >
        
      <div class=" mw9 center pt0 pb1 pv0-m pv0-ns">
        <div class="db dtc-ns v-mid-ns">
          <p className="lh-copy f5 f3-ns measure georgia">
          This was an application for a company to track it's employees requests for overtime each week.<br />
          <strong> Technologies used: </strong>
        </p>
          <p className="f6 f5-ns lh-copy measure i pl4 bl bw1 b--gold mb4">
            HTML <br/> CSS <br/> Ruby on Rails
          </p>
          <p className="f5 f4-ns lh-copy measure mb4">
          Github and LiveApp links here
        </p>
         
        </div>
        <div class="db dtc-ns v-mid ph2 pr0-ns pl3-ns">
        <img src={robomock} alt="prev" className=""/>
        
        </div>
      </div>

      </Collapsible>
      

        <Collapsible triggerStyle={{background: 'red'}} trigger={
        <div>
       <h1 class="tc dim f4 grey mv0 pv3 ph5">Overtime Logging Application2</h1>
        </div>
        }
        >
        
      <div class=" mw9 center pt0 pb1 pv0-m pv0-ns">
        <div class="db dtc-ns v-mid-ns">
          <p className="lh-copy f5 f3-ns measure georgia">
          This was an application for a company to track it's employees requests for overtime each week.<br />
          <strong> Technologies used: </strong>
        </p>
          <p className="f6 f5-ns lh-copy measure i pl4 bl bw1 b--gold mb4">
            HTML <br/> CSS <br/> Ruby on Rails
          </p>
          <p className="f5 f4-ns lh-copy measure mb4">
          Github and LiveApp links here
        </p>
         
        </div>
        <div class="db dtc-ns v-mid ph2 pr0-ns pl3-ns">
        <img src={otmock2} alt="prev" className=""/>
        
        </div>
      </div>

      </Collapsible>
            

      </div>

		)
}

export default Slider;

