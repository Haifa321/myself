import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="B.Tech Computer Engineering" where="Kerala Technological University" from="July 2020" to="Present"/>
            <Widecard title="Higher Secondary" where="GHSS PALAYAMKUNNU" from="2018" to="2020"/>
            </div>
            )
        }
    }
    
export default Education
    