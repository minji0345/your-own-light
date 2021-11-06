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
                <video className="motionlogo" width="30%" ref={vidRef} muted loop  onMouseEnter={playHandler} onMouseLeave={pauseHandler}>
                    <source src={motionlogo} type='video/mp4' />
                </video>
            </div>
            <div className="home-text"> 
                Curate only your light
            </div>
        </div>
    );
};

export default Home;