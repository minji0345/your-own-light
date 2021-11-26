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
                <video className="motionlogo" width="40%" muted loop autoPlay 
                // ref={vidRef} onMouseEnter={playHandler} onMouseLeave={pauseHandler}
                >
                    <source src={motionlogo} type='video/mp4' />
                </video>
            </div>
            <div className="home-text"> 
                <div className="text-para">
                    오직 자신만의 빛을 ‘큐레이팅’합니다.
                    내가 조색한 나만의 조명은 공간을 재구성하며 그 안속에 색다른 빛을 불어넣습니다.
                    당신의 손에서 탄생한 조명은 새로운 경험을 만드는 특별한 분위기를 조성합니다.
                </div>
                <div className="text-para">
                    빛은 공간의 분위기를 바꾸는 데에 큰 역할을 합니다.
                    매일 같은 방처럼 보일지라도 창문에서, 조명에서 나오는 빛이 공간에 어떤 색을 입히는지에 따라 그 분위기는 시시각각 변화합니다.
                </div>
            </div>
        </div>
    );
};

export default Home;