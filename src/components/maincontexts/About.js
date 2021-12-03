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
                        <div className="about-img about-title">저희는 공간 속 빛의 가치를 전달하는 조명 브랜드입니다.<br/>향수를 직접 조향하는 것 처럼, 모듈을 선택해 당신만의 조명을 조색하는 경험을 제공합니다.</div>
                        <div className="about-img about-text">"첫번째 모듈 컬렉션의 주제는 도시입니다.우리는 마치 꿈에 그리던 도시를 여행하는 기분을 느끼며 잠시나마 일상 속에서 휴식과 재충전의 시간을 가지고자 합니다. 
                        <br/>도시를 모티브로 디자인된 각 모듈을 탐색하며 마치 여행 코스를 짜듯이 당신만의 조명을 완성해 보세요."</div>
                    <div className="about-city">
                        <div className="about-sub">The list of spaces that reconstructed by the light.</div>
                        <div className="about-text line">
                            <div className="about-para">
                                공간을 이루는 요소를 다섯 가지 조형으로 정의 내렸다. 기둥, 계단, 문, 벽 그리고 조명. 각각의 공간은 브랜드에 기반이 되는 조명과 공간에 기반이 되는 벽을 제외한 기둥, 계단, 문이 특징적으로 반영돼 디자인된 공간이다. _기하은
                            </div>
                            <div className="about-para about-english">
                            The elements that make up space are defined in five shapes. Pillars, stairs, doors, walls, and lighting. Each space is a space designed by characteristically reflecting pillars, stairs, and doors except for lighting based on the brand and walls based on the space. _Haeun Ki
                            </div>
                        </div>
                        <div className="about-img img1">
                            <img src={spcseoul}   alt="logo"/>SEOUL
                        </div>
                        <div>문의 공간은 '서울'을 상징적으로 보여주는 스테인리스, 거울, 시멘트 그리고 회색조의 페인트로 이루어져 있다.</div>
                        <div className="about-img img2"><img src={spcbali} alt="logo"/> ZAGREB</div>
                        <div>계단의 공간은 '자그레브'를 상징적으로 보여주는 돌, 붉은 톤의 벽으로 이루어져 있다.</div>
                        <div className="about-img  img3"><img src={spccro} alt="logo"/> BALI</div>
                        <div>기둥의 공간은 '발리'를 상징적으로 보여주는 나무, 천 그리고 녹색의 유리로 이루어져 있다.</div>
                    </div>
                            <div className="about-poster">
                                {/* Y.O.L은 조명을 구매한 고객을 대상으로 심층 인터뷰를 실시하여 인터뷰를 바탕으로 고객의 방에 조명과 함께 인테리어 요소로 쓰일 수 있는 맞춤 포스터를 제작해 제공합니다. */}
                                <img src={poster1} alt="logo" width="30%"/>
                            </div>

                </div>
            </div>
    );
};


export default About;