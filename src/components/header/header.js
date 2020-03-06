import React, { Component } from 'react';
import './header.scss';
import image from '../../Images/headerImg.jpg';


class Header extends Component {

    render() {
        return (
               
           <div className="headerContainer">
               
            <div><img className="image" src={image}></img></div>
            <div className="headerText">
                <div className="section1">
                    <h1>Planning to Travel ?</h1>
                    <p>Get prior knowledge of air quality of your destination and 
                        bring back sweet memories only
                    </p>
                </div>
                <div className="section2">
                    <h4>Secure your trip</h4>
                    <hr></hr>
                    <p> Know about the best travel time & precautions you can take . Its more than just getting AQI
                    </p>
                </div>
            </div>	
         </div>	  
        );
    } 
}

export default Header;

