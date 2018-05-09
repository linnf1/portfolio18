import React from 'react';
import Slider from './Slider.js'
import Scroll from './Scroll.js'
import './Body.css';
import icons from './imgs/icons.png'

const Body = () => {
	return(
		     <div>
          <header className="torq tc dev1">
            <div className="mw9 pa3 pt2-ns ph10-l">
              <time className="f6 dib ttu tracked"><small></small></time>
              <h3 className="f1 f1-m f-headline measure-narrow h-title mv0">
                <span className="tc bg-white-60 lh-copy black pa1 tracked-tight">
                  Portfolio:
                </span>
              </h3>
            
              <h4 className="f3 fw1 georgia i"></h4>
              <div className='dev1'></div>              <h5 className="f6 ttu tracked black-80"></h5>
            </div>
          </header>
          
           <Slider />
           
		   <div class="mw9 center black pt0">

              <h3 className="db dtc-ns v-mid-ns f2 f1-m f-headline measure-narrow h-title mv0">
                <span className="tc bg-white-40 lh-copy black pa1 tracked-tight">
                 Skilled with:
                </span>
              </h3>
              
          <div class="db dtc-ns v-mid ph2 pr0-ns pl3-ns">
            <img src={icons} alt="prev" className=""/>
          </div>
        </div>
           
            <article class=" mw0 ph3 ph5-ns pv5 black mb0">
              <h3 className="f2 f1-m f-headline measure-narrow h-title mv0">
                <span className="tc  lh-copy black pa1 tracked-tight">
                </span>
              </h3>
            <h2 class="fw2 f4 lh-copy mt0 mb3">
            </h2>
          </article>
          
           
           <article class="dev2 mw0 center ph3 ph5-ns tc pv5 torq black mb0">
            <h1 class="fw6 f3 f2-ns lh-title mt0 mb3">
              Would you like to work together?
            </h1>
            <h2 class="fw2 f4 lh-copy mt0 mb3">
              Im currently looking for the right job oppurtunity,
            </h2>
            <p class="fw1 f5 mt0 mb3">
              You can call or email me or feel free to use the social links bellow
            </p>
            <div>
            <a class="f6 br-pill dark-green no-underline ba grow pv2 ph3 dib"
              href="https://docs.google.com/document/d/19Yx4vfpkjpC0msdS1VFUo9Eli9UZ2ql8hMyqdUPpkR8/edit?usp=sharing">
              Download my Resume
            </a>
            </div>
          </article>
           
 
               
          <div class="foot tc-l bg-center cover bg-black">
            <div class="w-100 ph3 pv5 bg-black-80">
              <a class="link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2" href="https://github.com/linnf1" title="GitHub">
                <svg class="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"/></svg>
                <span class="f6 ml3 pr2">GitHub</span>
              </a>
              <a class="link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2" href="https://linkedin.com/in/linnf1" title="LinkedIn">
                <svg class="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z" fill-rule="nonzero"/></svg>
                <span class="f6 ml3 pr2">LinkedIn</span>
              </a>
              <a class="link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2" href="" title="phone">
              <svg class="svg-icon" class="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414">
    							<path d="M10,15.654c-0.417,0-0.754,0.338-0.754,0.754S9.583,17.162,10,17.162s0.754-0.338,0.754-0.754S10.417,15.654,10,15.654z M14.523,1.33H5.477c-0.833,0-1.508,0.675-1.508,1.508v14.324c0,0.833,0.675,1.508,1.508,1.508h9.047c0.833,0,1.508-0.675,1.508-1.508V2.838C16.031,2.005,15.356,1.33,14.523,1.33z M15.277,17.162c0,0.416-0.338,0.754-0.754,0.754H5.477c-0.417,0-0.754-0.338-0.754-0.754V2.838c0-0.417,0.337-0.754,0.754-0.754h9.047c0.416,0,0.754,0.337,0.754,0.754V17.162zM13.77,2.838H6.23c-0.417,0-0.754,0.337-0.754,0.754v10.555c0,0.416,0.337,0.754,0.754,0.754h7.539c0.416,0,0.754-0.338,0.754-0.754V3.592C14.523,3.175,14.186,2.838,13.77,2.838z M13.77,13.77c0,0.208-0.169,0.377-0.377,0.377H6.607c-0.208,0-0.377-0.169-0.377-0.377V3.969c0-0.208,0.169-0.377,0.377-0.377h6.785c0.208,0,0.377,0.169,0.377,0.377V13.77z"></path>
    						</svg>
    			       <span class="f6 ml3 pr2">325-26-9428</span>
              </a>
              
              <a class="link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2" href="" title="Linnf@live.com">
                <svg class="svg-icon" class="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414">
    							<path d="M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z"></path></svg>
    			       <span class="f6 ml3 pr2">Linnf@live.com</span>
              </a>

              
            </div>
          </div>
      
      
      
        </div>
		)
}

export default Body;