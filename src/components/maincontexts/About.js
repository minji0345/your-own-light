import React from 'react';
import Sketch from '../p5comps/Sketch';
import './maincontexts.css';

import spcseoul from './abouts/spc_seoul.gif';
import spcbali from './abouts/spc_bali.gif';
import spccro from './abouts/spc_cro.gif';
import detail from './abouts/app_detail.mp4';
import over from './abouts/app_over.mp4';

function About() {


    return (
            <div className="main-about">
                <div className="about-list scroll" style={{overflowY:'scroll'}}>
                    <div className="about-img about-title">"그 첫번째 컬렉션은 도시입니다.우리는 마치 꿈에 그리던 도시를 여행하는 기분을 느끼며 잠시나마 일상 속에서 휴식과 재충전의 시간을 가지고자 합니다. 
                        <br/>도시를 모티브로 디자인된 각 모듈을 탐색하며 마치 여행 코스를 짜듯이 당신만의 조명을 완성해 보세요."</div>
                        <div className="about-img about-vid">
                        <video muted loop autoPlay>
                        <source src={over} type='video/mp4' />
                        </video>
                        <video muted loop autoPlay>
                        <source src={detail} type='video/mp4' />
                        </video>
                    </div>

                    <div className="about-img">The list of spaces that reconstructed by the light.</div>
                    <div className="about-img"><img src={spcseoul}   alt="logo"/> Seoul</div>
                    <div className="about-img"><img src={spcbali} alt="logo"/> Bali</div>
                    <div className="about-img"><img src={spccro} alt="logo"/> Croatia</div>
                    
                    
                </div>
            </div>
    );
};


export default About;