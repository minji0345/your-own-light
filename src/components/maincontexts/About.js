import React from 'react';
import Sketch from '../p5comps/Sketch';
import './maincontexts.css';

import spcseoul from './abouts/spc_seoul.gif';
import spcbali from './abouts/spc_bali.gif';
import spccro from './abouts/spc_cro.gif';
import poster1 from './abouts/poster1.png';
import poster2 from './abouts/poster2.png';
import poster3 from './abouts/poster3.png';

function About() {


    return (
            <div className="main-about">
                <div className="about-list scroll" style={{overflowY:'scroll'}}>
                        <div className="about-img about-title">공간 속 빛의 가치를 전달합니다.<br/>향수를 직접 조향하는 것 처럼 모듈을 선택해 당신만의 조명을 조색할 수 있습니다.</div>
                        <div className="about-img about-sub">"첫번째 모듈 컬렉션의 주제는 도시입니다.우리는 마치 꿈에 그리던 도시를 여행하는 기분을 느끼며 잠시나마 일상 속에서 휴식과 재충전의 시간을 가지고자 합니다. 
                        <br/>도시를 모티브로 디자인된 각 모듈을 탐색하며 마치 여행 코스를 짜듯이 당신만의 조명을 완성해 보세요."</div>
                            <div className="about-poster">
                                <img src={poster1} alt="logo" width="30%"/>
                                <img src={poster2} alt="logo" width="30%"/>
                                <img src={poster3} alt="logo" width="30%"/>
                            </div>

                    <div className="about-city">
                        <div className="about-img">The list of spaces that reconstructed by the light.</div>
                        <div className="about-img"><img src={spcseoul}   alt="logo"/> SEOUL</div>
                        <div className="about-img"><img src={spcbali} alt="logo"/> BALI</div>
                        <div className="about-img"><img src={spccro} alt="logo"/> CROATIA</div>
                    </div>
                    
                </div>
            </div>
    );
};


export default About;