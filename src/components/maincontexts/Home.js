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

    return (
        <div>
            <div className="main-home">
                <img src={logo} alt="logo" width="20%" className="logoimg"/>
                <video className="motionlogo" width="30%" muted loop autoPlay 
                // ref={vidRef} onMouseEnter={playHandler} onMouseLeave={pauseHandler}
                >
                    <source src={motionlogo} type='video/mp4' />
                </video>
            </div>
            <div className="home-text"> 
                오직 자신만의 빛을 ‘큐레이팅’하다.
                내가 조색한 나만의 조명은 공간을 재구성하며 그 안속에 색다른 빛을 불어넣는다.
                당신의 손에서 탄생한 조명은 새로운 경험을 만드는 특별한 분위기를 조성한다.
            </div>
        </div>
    );
};

export default Home;