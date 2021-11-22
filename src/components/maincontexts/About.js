import React from 'react';
import Sketch from '../p5comps/Sketch';
import './maincontexts.css';

function About() {


    return (
            <div className="main-about">
                <Sketch style={{position:'absolute'}}/>
                <div className="p5-back"></div>
                내용 업데이트중
            </div>
    );
};


export default About;