import React from 'react';
import Sketch from '../p5comps/Sketch';
import './maincontexts.css';

import spcseoul from './abouts/spc_seoul.gif';
import spcbali from './abouts/spc_bali.gif';
import spccro from './abouts/spc_cro.gif';

function About() {


    return (
            <div className="main-about">
                <div className="about-list scroll" style={{overflowY:'scroll'}}>
                    <div className="about-img">The list of spaces that reconstructed by the light.</div>
                    <div className="about-img"><img src={spcseoul}   alt="logo"/> Seoul</div>
                    <div className="about-img"><img src={spcbali} alt="logo"/> Bali</div>
                    <div className="about-img"><img src={spccro} alt="logo"/> Croatia</div>
                </div>
            </div>
    );
};


export default About;