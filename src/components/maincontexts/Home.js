import React, { useRef, useState } from 'react';
import motionlogo from "./imgs/grd.mp4";
import logo from "./imgs/logoa.svg";
import './maincontexts.css';


function Home() {

    const vidRef = useRef(motionlogo);
    // const [isTrue, setIsTrue] = useState(false)


    const playHandler = () => {
        vidRef.current.play();
        // setIsTrue(true);
    }

    const pauseHandler = () => {
        vidRef.current.pause();
    }
햐ㅅ
    return (
        <div>
            <div className="main-home">
                <img src={logo} alt="logo" width="20%" className="logoimg"/>
                <video className="motionlogo" width="40%" muted loop autoPlay 
                // ref={vidRef} onMouseEnter={playHandler} onMouseLeave={pauseHandler}
                >
                    <source src={motionlogo} type='video/mp4' />
                </video>
            </div>
            <div className="home-text"> 
                <div>
                    오직 자신만의 빛을 ‘큐레이팅’하다.
                    내가 조색한 나만의 조명은 공간을 재구성하며 그 안속에 색다른 빛을 불어넣는다.
                    당신의 손에서 탄생한 조명은 새로운 경험을 만드는 특별한 분위기를 조성한다.
                </div>
                <div>
                    그 첫번째 컬렉션은 도시이다.  
                    우리는 마치 꿈에 그리던 도시를 여행하는 기분을 느끼며 잠시나마 일상 속에서 휴식과 재충전의 시간을 가진다.
                </div>
            </div>
        </div>
    );
};

export default Home;