import React from 'react';
import './Slider.css';
import Collapsible from 'react-collapsible';

import t1 from './imgs/tab1.jpg';
import t2 from './imgs/tab2.jpg';
import t3 from './imgs/tab3.jpg';
import t4 from './imgs/tab4.jpg';
import t5 from './imgs/tab5.png';
import otmock2 from './imgs/otmock2.jpg';
import brainmock from './imgs/brainmock.jpg';
import hkmock from './imgs/hkmock.jpg';
import robomock from './imgs/robomock.jpg';



const Slider = () => {
	return(
      <div id='tc center'>
      <Collapsible open='true' triggerStyle={{float: 'none', margin: '0 auto'}} trigger={
        <div>
       <h1 class="tc grey dim f4 mv0 pv3 ph5">Overtime Logging Application</h1>
        </div>
        }
        >
        
		  <div class="padme mw9 center pt0 pv0-m pv0-ns">
        <div class="db dtc-ns v-mid-ns">
          <p className="lh-copy f5 f3-ns measure">
          This was an application for a company to track it's employees' requests for overtime each week. It sends SMS messages to the Employees to remind them, and has a dashboard for the Supervisors
          to quickly Approve or Deny requests for overtime.<br />
              <h5 className="f2 f1-m f-headline measure-narrow h-title mv0">
                <span className="tc bg-white-60 lh-copy black pa1 tracked-tight">
                  Technologies Used:
                </span>
              </h5>
        </p>
          <p className="f4 f4-ns lh-copy measure i pl4 bl bw1 b--gold">
           Ruby on Rails<br/ > HTML <br/> CSS 
          </p>
          <h2>
          
      <a class="dim link black-60 bg-transparent hover-black inline-flex items-center tc" href="https://overtime-app-lf.herokuapp.com/" title="play">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJNSURBVGhD7Zk9SORAFMfjiQeHFhZ6t7N+gXeN1x1WcmJtqwhiaysWYmlhJcJxpQfuzqweHhamsJX1ZUkhaGMjaGUp2Ngooo0s65vwNuRA0ezO10J+8GfZTTKZH9lk3ky8jIyM5hk9LXR4tVobfW1Ncod8Oh+IBwbiKg9i3ltd/UCbWgsUqKBILQ6I8xzwSdrcOuQDfvSfCCUSBPGDdnOf10QoVZT5x6AwSLu7yxsiURjwRxbwX0Phdjcd5h7vEYkD4qYP+NJ33/9Ih7tDKhEK3j+XeeCzTj2yGxGphwXiJFcRE9SUXZoRiQN8H8ejEWrSDkpEZEA84QPhT2+4naOmzaJMpB4Q99jmypfyTiedwgzKRSh4/1yj1Lzn++10Kr3oEokD/MJIyaNdhIJXKMQrpK/kMSVCqWJ2tZQ8hkWiRCUPiN9KSx4bInGw5MHzLyspeayKUGTJwyrFuaZKHhdE6sEBNegNN7qoa+lwSURGTr2pa+lw64qI289QGqaupcMZESw8ByqbX6lb6bEtIqcCrMx/Uncax5aIfFL1BcUZZZMz4yI4dqDEovLpsikROZrj57q2BQwDIlW8D/5qX1LSKgK8rLXiTaJDBO+BM+PLripFUMDeQrgaEX6HWek/3vtEzZqnKRFaOWFhoYeas0fDIlhS9If8GzVjn7QisqTAKzFGh7vDe0VkSRGV2K6+ontTJJqOFhecXIFP8ppIVFIAX3P6nUiSF0Sq+Dfaaom3VEnkm6iExIGxkkI5vt/OgtIUg9I4/ZKRkZFhC897BnrP3c5L3wewAAAAAElFTkSuQmCC"/> 
      Live App </a>

      <a class="dim link black-60 bg-transparent inline-flex items-center ma2 tc br2 pa2" href="https://github.com/linnf1/overtime-app" title="github">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAS6SURBVGhD7VlbiBxFFN1oEFRUVIwGBZ+IEiUEIUqICmbFB34YQ3wgGFHU+KMsm0zP7KIDCuKfCREUkeCHiAj6Ia6ID1T0Q4KKJsGYmaqZzcYYw6JGo+Zhcstzu+/0dvfc2eme6U4CzoHDzlbdOvfeetfM0AADDHBsUXY7zqy6rSfJv8c/KmTP9aj+gEd2o0dmE/7+UXbWhSR7qEzmR5S/DY561FgoTY8DODenROY2BDaBIA/HAk9BtNsCjozS7lNF8ejDc3Ypgvk6GVxPJDuNjnii6j6dK/LFo+p2nQLHL8MxqUH1QYzONxXXvEJcFYdxalyIBDZrQeRFJLMPa2y5uMwfJWpeCSc/ac5zJ9ZbhRqPiOv8UKLaBZhOO1WnRZGnLtn7JYT+EayJYqdTJ2IGHCyRXSyh9AeIvaQ58UlmFc6DG9Bz4/i8S7XpRow0fIzxLoiz6OH2etOsUu10Cac3QPh6f4iT4r4DOy1mPvj0RkDPYKEembEx/6BsCn+/47+o29+qYzu2j536OJdQtzdsH9raF8SiBwSiHc8JBLJNLGMoU/0eOH6o7LZfIkUxoP4yXsglatwtRTGgbb3dl/0XHXe5mGQDevH2pGCUSKQhprmCp5ruz24Uk2xAwwlNMCTuTnmfxMH0jEzNuL8DIzR1lpimwxrXPM8fTk0wwtx2FEGJ6ks0PzM0j4ppOvAtVheKkMzuMZqcL01ygZxX06o/Jpl3xTQdeD6qQlGSvUPMcwVvAqo/ENPu96pzJ4hpd6DBJk2oRdR/Jab5A7sl9L/X/DL5vieW3YERiT+KEoSjJ8W0EEDf0/wysS5vFrMuCM4PVaRFPoXFuhDAx3DSZ0gy94nZ7ECQZ6gCEVbIXCXmhQC70zWaX2bqWzEvJmQ967MVYjeKeSHAgr9F8xuwsVLMugM70h5dJCDW0KiYFgJ05FOaXybWz01i1h0IdIsm0mLRuxYS6fhsKJG5Wiy7A4m8qYlECZsVYp4rPGce1Pwx0YF/Z/qODFk/pgkluDdT76RAmRrXcrCKr4BkPxHTdFhDtUtVoSTJ/Fpx9TulWV9Ap9yb4vx6WszTA9lv1cQ0wsFH2JKXrXTuRGmeCmyP98mtmE6fabpRwscRfstI0/RAb69qE8S2jF472FbeIi58cPg6uLZEzetEKgY+TFHvQecNHlFVRyOZD0QiG+Rt8HNC7MMy/XA2yl+JlSdJ9ttRMvNEKoZxmrw4y2iHxMiJRHYg8NVJQfTk+qDOrkvWBfXmtzHafr4v0AE8RaCzT2uvEbYT0rRH+DdR+3FMmAx5VFskt9T2kSFbkdazAjrVtrYK4WN/p/d/JvBUSPYexF+Vav/nBLzsFvCjiL8Dk+Ku4FGDjv6sjRKzQpr0DwgOI5lwkXNia2nbaVLdM5DIZBiwRjIviml+gNPlEJ65TJJ9J8sIaECHfBkLPEbzVtbtPDXgeAUYHlpI7hdsp6/h8/M+M04D2H/R0ooRG0lhSbTAv18gGf1SicDELBXaEiHzF074x6W6ePBPZei1Z3mtJALpPRGy73uueZFUHV3w10GYXhsQxJ89JvI5+B7aDkvRscUITZ2Mu9ZdSOo5KUqFCtXOkY8DDDDAAP8rDA39BzC+EvBmoUJPAAAAAElFTkSuQmCC"/>       
        Github
        </a>
        </h2>

         
        </div>
        <div class="db dtc-ns v-mid ph2 pr0-ns pl3-ns">
        <img className= "smallerimg" src={otmock2} alt="prev"/>
        
        </div>
        </div>
		
      </Collapsible>
      
        <Collapsible triggerStyle={{background: 'red'}} trigger={
        <div>
       <h1 class="grey tc dim f4 mv0 pv3 ph5">Smart Brain</h1>
        </div>
        }
        >
   		  <div class="padme mw9 center pt0 pv0-m pv0-ns">
        <div class="db dtc-ns v-mid-ns">
          <p className="lh-copy f5 f3-ns measure">
          Web application for face recognition game ,where users level up in relation to other users for feeding the most faces into it.<br />
              <h5 className="f2 f1-m f-headline measure-narrow h-title mv0">
                <span className="tc bg-white-60 lh-copy black pa1 tracked-tight">
                  Technologies Used:
                </span>
              </h5>
        </p>
          <p className="f4 f4-ns lh-copy measure i pl4 bl bw1 b--gold">
            React <br/> NodeJS <br/> Javascript <br/> HTML <br/> CSS 
          </p>
          <h2>
          
      <a class="dim link black-60 bg-transparent hover-black inline-flex items-center tc" href="https://smartbrain-lf.herokuapp.com/" title="play">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJNSURBVGhD7Zk9SORAFMfjiQeHFhZ6t7N+gXeN1x1WcmJtqwhiaysWYmlhJcJxpQfuzqweHhamsJX1ZUkhaGMjaGUp2Ngooo0s65vwNuRA0ezO10J+8GfZTTKZH9lk3ky8jIyM5hk9LXR4tVobfW1Ncod8Oh+IBwbiKg9i3ltd/UCbWgsUqKBILQ6I8xzwSdrcOuQDfvSfCCUSBPGDdnOf10QoVZT5x6AwSLu7yxsiURjwRxbwX0Phdjcd5h7vEYkD4qYP+NJ33/9Ih7tDKhEK3j+XeeCzTj2yGxGphwXiJFcRE9SUXZoRiQN8H8ejEWrSDkpEZEA84QPhT2+4naOmzaJMpB4Q99jmypfyTiedwgzKRSh4/1yj1Lzn++10Kr3oEokD/MJIyaNdhIJXKMQrpK/kMSVCqWJ2tZQ8hkWiRCUPiN9KSx4bInGw5MHzLyspeayKUGTJwyrFuaZKHhdE6sEBNegNN7qoa+lwSURGTr2pa+lw64qI289QGqaupcMZESw8ByqbX6lb6bEtIqcCrMx/Uncax5aIfFL1BcUZZZMz4yI4dqDEovLpsikROZrj57q2BQwDIlW8D/5qX1LSKgK8rLXiTaJDBO+BM+PLripFUMDeQrgaEX6HWek/3vtEzZqnKRFaOWFhoYeas0fDIlhS9If8GzVjn7QisqTAKzFGh7vDe0VkSRGV2K6+ontTJJqOFhecXIFP8ppIVFIAX3P6nUiSF0Sq+Dfaaom3VEnkm6iExIGxkkI5vt/OgtIUg9I4/ZKRkZFhC897BnrP3c5L3wewAAAAAElFTkSuQmCC"/> 
      Live App </a>

      <a class="dim link black-60 bg-transparent inline-flex items-center ma2 tc br2 pa2" href="https://github.com/linnf1/face-recognition-app" title="github">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAS6SURBVGhD7VlbiBxFFN1oEFRUVIwGBZ+IEiUEIUqICmbFB34YQ3wgGFHU+KMsm0zP7KIDCuKfCREUkeCHiAj6Ia6ID1T0Q4KKJsGYmaqZzcYYw6JGo+Zhcstzu+/0dvfc2eme6U4CzoHDzlbdOvfeetfM0AADDHBsUXY7zqy6rSfJv8c/KmTP9aj+gEd2o0dmE/7+UXbWhSR7qEzmR5S/DY561FgoTY8DODenROY2BDaBIA/HAk9BtNsCjozS7lNF8ejDc3Ypgvk6GVxPJDuNjnii6j6dK/LFo+p2nQLHL8MxqUH1QYzONxXXvEJcFYdxalyIBDZrQeRFJLMPa2y5uMwfJWpeCSc/ac5zJ9ZbhRqPiOv8UKLaBZhOO1WnRZGnLtn7JYT+EayJYqdTJ2IGHCyRXSyh9AeIvaQ58UlmFc6DG9Bz4/i8S7XpRow0fIzxLoiz6OH2etOsUu10Cac3QPh6f4iT4r4DOy1mPvj0RkDPYKEembEx/6BsCn+/47+o29+qYzu2j536OJdQtzdsH9raF8SiBwSiHc8JBLJNLGMoU/0eOH6o7LZfIkUxoP4yXsglatwtRTGgbb3dl/0XHXe5mGQDevH2pGCUSKQhprmCp5ruz24Uk2xAwwlNMCTuTnmfxMH0jEzNuL8DIzR1lpimwxrXPM8fTk0wwtx2FEGJ6ks0PzM0j4ppOvAtVheKkMzuMZqcL01ygZxX06o/Jpl3xTQdeD6qQlGSvUPMcwVvAqo/ENPu96pzJ4hpd6DBJk2oRdR/Jab5A7sl9L/X/DL5vieW3YERiT+KEoSjJ8W0EEDf0/wysS5vFrMuCM4PVaRFPoXFuhDAx3DSZ0gy94nZ7ECQZ6gCEVbIXCXmhQC70zWaX2bqWzEvJmQ967MVYjeKeSHAgr9F8xuwsVLMugM70h5dJCDW0KiYFgJ05FOaXybWz01i1h0IdIsm0mLRuxYS6fhsKJG5Wiy7A4m8qYlECZsVYp4rPGce1Pwx0YF/Z/qODFk/pgkluDdT76RAmRrXcrCKr4BkPxHTdFhDtUtVoSTJ/Fpx9TulWV9Ap9yb4vx6WszTA9lv1cQ0wsFH2JKXrXTuRGmeCmyP98mtmE6fabpRwscRfstI0/RAb69qE8S2jF472FbeIi58cPg6uLZEzetEKgY+TFHvQecNHlFVRyOZD0QiG+Rt8HNC7MMy/XA2yl+JlSdJ9ttRMvNEKoZxmrw4y2iHxMiJRHYg8NVJQfTk+qDOrkvWBfXmtzHafr4v0AE8RaCzT2uvEbYT0rRH+DdR+3FMmAx5VFskt9T2kSFbkdazAjrVtrYK4WN/p/d/JvBUSPYexF+Vav/nBLzsFvCjiL8Dk+Ku4FGDjv6sjRKzQpr0DwgOI5lwkXNia2nbaVLdM5DIZBiwRjIviml+gNPlEJ65TJJ9J8sIaECHfBkLPEbzVtbtPDXgeAUYHlpI7hdsp6/h8/M+M04D2H/R0ooRG0lhSbTAv18gGf1SicDELBXaEiHzF074x6W6ePBPZei1Z3mtJALpPRGy73uueZFUHV3w10GYXhsQxJ89JvI5+B7aDkvRscUITZ2Mu9ZdSOo5KUqFCtXOkY8DDDDAAP8rDA39BzC+EvBmoUJPAAAAAElFTkSuQmCC"/>       
        Github
        </a>
        </h2>

        </div>
        <div class="db dtc-ns v-mid ph2 pr0-ns pl3-ns">
        <img src={brainmock} alt="prev" className="smallerimg"/>
        </div>
        </div>
      </Collapsible>
      
        <Collapsible triggerStyle={{background: 'red'}} trigger={
        <div>
       <h1 class="grey tc dim f4 mv0 pv3 ph5">Hawleyville Kennels</h1>
        </div>
        }
        >
      		  <div class="padme mw9 center pt0 pv0-m pv0-ns">
        <div class="db dtc-ns v-mid-ns">
          <p className="lh-copy f5 f3-ns measure">
            Website created for client to list and sell their puppies. Has a responsive and easy to use layout for the administrators.<br />
              <h5 className="f2 f1-m f-headline measure-narrow h-title mv0">
                <span className="tc bg-white-60 lh-copy black pa1 tracked-tight">
                  Technologies Used:
                </span>
              </h5>
        </p>
          <p className="f4 f4-ns lh-copy measure i pl4 bl bw1 b--gold">
             Ruby on Rails <br/>HTML <br/> CSS 
          </p>
          <h2>
          
      <a class="dim link black-60 bg-transparent hover-black inline-flex items-center tc" href="http://hawleyvillekennels.com/" title="play">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJNSURBVGhD7Zk9SORAFMfjiQeHFhZ6t7N+gXeN1x1WcmJtqwhiaysWYmlhJcJxpQfuzqweHhamsJX1ZUkhaGMjaGUp2Ngooo0s65vwNuRA0ezO10J+8GfZTTKZH9lk3ky8jIyM5hk9LXR4tVobfW1Ncod8Oh+IBwbiKg9i3ltd/UCbWgsUqKBILQ6I8xzwSdrcOuQDfvSfCCUSBPGDdnOf10QoVZT5x6AwSLu7yxsiURjwRxbwX0Phdjcd5h7vEYkD4qYP+NJ33/9Ih7tDKhEK3j+XeeCzTj2yGxGphwXiJFcRE9SUXZoRiQN8H8ejEWrSDkpEZEA84QPhT2+4naOmzaJMpB4Q99jmypfyTiedwgzKRSh4/1yj1Lzn++10Kr3oEokD/MJIyaNdhIJXKMQrpK/kMSVCqWJ2tZQ8hkWiRCUPiN9KSx4bInGw5MHzLyspeayKUGTJwyrFuaZKHhdE6sEBNegNN7qoa+lwSURGTr2pa+lw64qI289QGqaupcMZESw8ByqbX6lb6bEtIqcCrMx/Uncax5aIfFL1BcUZZZMz4yI4dqDEovLpsikROZrj57q2BQwDIlW8D/5qX1LSKgK8rLXiTaJDBO+BM+PLripFUMDeQrgaEX6HWek/3vtEzZqnKRFaOWFhoYeas0fDIlhS9If8GzVjn7QisqTAKzFGh7vDe0VkSRGV2K6+ontTJJqOFhecXIFP8ppIVFIAX3P6nUiSF0Sq+Dfaaom3VEnkm6iExIGxkkI5vt/OgtIUg9I4/ZKRkZFhC897BnrP3c5L3wewAAAAAElFTkSuQmCC"/> 
      Live App </a>

      <a class="dim link black-60 bg-transparent inline-flex items-center ma2 tc br2 pa2" href="https://github.com/linnf1/hkennels" title="github">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAS6SURBVGhD7VlbiBxFFN1oEFRUVIwGBZ+IEiUEIUqICmbFB34YQ3wgGFHU+KMsm0zP7KIDCuKfCREUkeCHiAj6Ia6ID1T0Q4KKJsGYmaqZzcYYw6JGo+Zhcstzu+/0dvfc2eme6U4CzoHDzlbdOvfeetfM0AADDHBsUXY7zqy6rSfJv8c/KmTP9aj+gEd2o0dmE/7+UXbWhSR7qEzmR5S/DY561FgoTY8DODenROY2BDaBIA/HAk9BtNsCjozS7lNF8ejDc3Ypgvk6GVxPJDuNjnii6j6dK/LFo+p2nQLHL8MxqUH1QYzONxXXvEJcFYdxalyIBDZrQeRFJLMPa2y5uMwfJWpeCSc/ac5zJ9ZbhRqPiOv8UKLaBZhOO1WnRZGnLtn7JYT+EayJYqdTJ2IGHCyRXSyh9AeIvaQ58UlmFc6DG9Bz4/i8S7XpRow0fIzxLoiz6OH2etOsUu10Cac3QPh6f4iT4r4DOy1mPvj0RkDPYKEembEx/6BsCn+/47+o29+qYzu2j536OJdQtzdsH9raF8SiBwSiHc8JBLJNLGMoU/0eOH6o7LZfIkUxoP4yXsglatwtRTGgbb3dl/0XHXe5mGQDevH2pGCUSKQhprmCp5ruz24Uk2xAwwlNMCTuTnmfxMH0jEzNuL8DIzR1lpimwxrXPM8fTk0wwtx2FEGJ6ks0PzM0j4ppOvAtVheKkMzuMZqcL01ygZxX06o/Jpl3xTQdeD6qQlGSvUPMcwVvAqo/ENPu96pzJ4hpd6DBJk2oRdR/Jab5A7sl9L/X/DL5vieW3YERiT+KEoSjJ8W0EEDf0/wysS5vFrMuCM4PVaRFPoXFuhDAx3DSZ0gy94nZ7ECQZ6gCEVbIXCXmhQC70zWaX2bqWzEvJmQ967MVYjeKeSHAgr9F8xuwsVLMugM70h5dJCDW0KiYFgJ05FOaXybWz01i1h0IdIsm0mLRuxYS6fhsKJG5Wiy7A4m8qYlECZsVYp4rPGce1Pwx0YF/Z/qODFk/pgkluDdT76RAmRrXcrCKr4BkPxHTdFhDtUtVoSTJ/Fpx9TulWV9Ap9yb4vx6WszTA9lv1cQ0wsFH2JKXrXTuRGmeCmyP98mtmE6fabpRwscRfstI0/RAb69qE8S2jF472FbeIi58cPg6uLZEzetEKgY+TFHvQecNHlFVRyOZD0QiG+Rt8HNC7MMy/XA2yl+JlSdJ9ttRMvNEKoZxmrw4y2iHxMiJRHYg8NVJQfTk+qDOrkvWBfXmtzHafr4v0AE8RaCzT2uvEbYT0rRH+DdR+3FMmAx5VFskt9T2kSFbkdazAjrVtrYK4WN/p/d/JvBUSPYexF+Vav/nBLzsFvCjiL8Dk+Ku4FGDjv6sjRKzQpr0DwgOI5lwkXNia2nbaVLdM5DIZBiwRjIviml+gNPlEJ65TJJ9J8sIaECHfBkLPEbzVtbtPDXgeAUYHlpI7hdsp6/h8/M+M04D2H/R0ooRG0lhSbTAv18gGf1SicDELBXaEiHzF074x6W6ePBPZei1Z3mtJALpPRGy73uueZFUHV3w10GYXhsQxJ89JvI5+B7aDkvRscUITZ2Mu9ZdSOo5KUqFCtXOkY8DDDDAAP8rDA39BzC+EvBmoUJPAAAAAElFTkSuQmCC"/>       
        Github
        </a>
        </h2>

</div>
        <div class="db dtc-ns v-mid ph2 pr0-ns pl3-ns">
        <img src={hkmock} alt="prev" className="smallerimg"/>
        
        </div>
      </div>

      </Collapsible>

        <Collapsible triggerStyle={{background: 'red'}} trigger={
        <div>
       <h1 class="tc dim f4 grey mv0 pv3 ph5">RoboFriends</h1>
        </div>
        }
        >
       		  <div class="padme mw9 center pt0 pv0-m pv0-ns">
        <div class="db dtc-ns v-mid-ns">
          <p className="lh-copy f5 f3-ns measure">
            Demo application for sorting through users via React. This was a very basic application that I will be continueing to add features to.<br />
              <h5 className="f2 f1-m f-headline measure-narrow h-title mv0">
                <span className="tc bg-white-60 lh-copy black pa1 tracked-tight">
                  Technologies Used:
                </span>
              </h5>
        </p>
          <p className="f4 f4-ns lh-copy measure i pl4 bl bw1 b--gold">
            HTML <br/> CSS <br/> Ruby on Rails
          </p>
          <h2>
          
      <a class="dim link black-60 bg-transparent hover-black inline-flex items-center tc" href="https://robofriends-lf.herokuapp.com/" title="play">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJNSURBVGhD7Zk9SORAFMfjiQeHFhZ6t7N+gXeN1x1WcmJtqwhiaysWYmlhJcJxpQfuzqweHhamsJX1ZUkhaGMjaGUp2Ngooo0s65vwNuRA0ezO10J+8GfZTTKZH9lk3ky8jIyM5hk9LXR4tVobfW1Ncod8Oh+IBwbiKg9i3ltd/UCbWgsUqKBILQ6I8xzwSdrcOuQDfvSfCCUSBPGDdnOf10QoVZT5x6AwSLu7yxsiURjwRxbwX0Phdjcd5h7vEYkD4qYP+NJ33/9Ih7tDKhEK3j+XeeCzTj2yGxGphwXiJFcRE9SUXZoRiQN8H8ejEWrSDkpEZEA84QPhT2+4naOmzaJMpB4Q99jmypfyTiedwgzKRSh4/1yj1Lzn++10Kr3oEokD/MJIyaNdhIJXKMQrpK/kMSVCqWJ2tZQ8hkWiRCUPiN9KSx4bInGw5MHzLyspeayKUGTJwyrFuaZKHhdE6sEBNegNN7qoa+lwSURGTr2pa+lw64qI289QGqaupcMZESw8ByqbX6lb6bEtIqcCrMx/Uncax5aIfFL1BcUZZZMz4yI4dqDEovLpsikROZrj57q2BQwDIlW8D/5qX1LSKgK8rLXiTaJDBO+BM+PLripFUMDeQrgaEX6HWek/3vtEzZqnKRFaOWFhoYeas0fDIlhS9If8GzVjn7QisqTAKzFGh7vDe0VkSRGV2K6+ontTJJqOFhecXIFP8ppIVFIAX3P6nUiSF0Sq+Dfaaom3VEnkm6iExIGxkkI5vt/OgtIUg9I4/ZKRkZFhC897BnrP3c5L3wewAAAAAElFTkSuQmCC"/> 
      Live App </a>

      <a class="dim link black-60 bg-transparent inline-flex items-center ma2 tc br2 pa2" href="https://github.com/linnf1/demo-robofriends" title="github">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAS6SURBVGhD7VlbiBxFFN1oEFRUVIwGBZ+IEiUEIUqICmbFB34YQ3wgGFHU+KMsm0zP7KIDCuKfCREUkeCHiAj6Ia6ID1T0Q4KKJsGYmaqZzcYYw6JGo+Zhcstzu+/0dvfc2eme6U4CzoHDzlbdOvfeetfM0AADDHBsUXY7zqy6rSfJv8c/KmTP9aj+gEd2o0dmE/7+UXbWhSR7qEzmR5S/DY561FgoTY8DODenROY2BDaBIA/HAk9BtNsCjozS7lNF8ejDc3Ypgvk6GVxPJDuNjnii6j6dK/LFo+p2nQLHL8MxqUH1QYzONxXXvEJcFYdxalyIBDZrQeRFJLMPa2y5uMwfJWpeCSc/ac5zJ9ZbhRqPiOv8UKLaBZhOO1WnRZGnLtn7JYT+EayJYqdTJ2IGHCyRXSyh9AeIvaQ58UlmFc6DG9Bz4/i8S7XpRow0fIzxLoiz6OH2etOsUu10Cac3QPh6f4iT4r4DOy1mPvj0RkDPYKEembEx/6BsCn+/47+o29+qYzu2j536OJdQtzdsH9raF8SiBwSiHc8JBLJNLGMoU/0eOH6o7LZfIkUxoP4yXsglatwtRTGgbb3dl/0XHXe5mGQDevH2pGCUSKQhprmCp5ruz24Uk2xAwwlNMCTuTnmfxMH0jEzNuL8DIzR1lpimwxrXPM8fTk0wwtx2FEGJ6ks0PzM0j4ppOvAtVheKkMzuMZqcL01ygZxX06o/Jpl3xTQdeD6qQlGSvUPMcwVvAqo/ENPu96pzJ4hpd6DBJk2oRdR/Jab5A7sl9L/X/DL5vieW3YERiT+KEoSjJ8W0EEDf0/wysS5vFrMuCM4PVaRFPoXFuhDAx3DSZ0gy94nZ7ECQZ6gCEVbIXCXmhQC70zWaX2bqWzEvJmQ967MVYjeKeSHAgr9F8xuwsVLMugM70h5dJCDW0KiYFgJ05FOaXybWz01i1h0IdIsm0mLRuxYS6fhsKJG5Wiy7A4m8qYlECZsVYp4rPGce1Pwx0YF/Z/qODFk/pgkluDdT76RAmRrXcrCKr4BkPxHTdFhDtUtVoSTJ/Fpx9TulWV9Ap9yb4vx6WszTA9lv1cQ0wsFH2JKXrXTuRGmeCmyP98mtmE6fabpRwscRfstI0/RAb69qE8S2jF472FbeIi58cPg6uLZEzetEKgY+TFHvQecNHlFVRyOZD0QiG+Rt8HNC7MMy/XA2yl+JlSdJ9ttRMvNEKoZxmrw4y2iHxMiJRHYg8NVJQfTk+qDOrkvWBfXmtzHafr4v0AE8RaCzT2uvEbYT0rRH+DdR+3FMmAx5VFskt9T2kSFbkdazAjrVtrYK4WN/p/d/JvBUSPYexF+Vav/nBLzsFvCjiL8Dk+Ku4FGDjv6sjRKzQpr0DwgOI5lwkXNia2nbaVLdM5DIZBiwRjIviml+gNPlEJ65TJJ9J8sIaECHfBkLPEbzVtbtPDXgeAUYHlpI7hdsp6/h8/M+M04D2H/R0ooRG0lhSbTAv18gGf1SicDELBXaEiHzF074x6W6ePBPZei1Z3mtJALpPRGy73uueZFUHV3w10GYXhsQxJ89JvI5+B7aDkvRscUITZ2Mu9ZdSOo5KUqFCtXOkY8DDDDAAP8rDA39BzC+EvBmoUJPAAAAAElFTkSuQmCC"/>       
        Github
        </a>
        </h2>

         
        </div>
        <div class="db dtc-ns v-mid ph2 pr0-ns pl3-ns">
        <img src={robomock} alt="prev" className="smallerimg"/>
        
        </div>
      </div>

      </Collapsible>
            

      </div>

		)
}

export default Slider;

