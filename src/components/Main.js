import React, { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './Main.css';
import About from './maincontexts/About';
import Home from './maincontexts/Home';
import Order from './maincontexts/Order';
import CheckOut from './maincontexts/CheckOut';

import first from "./maincontexts/assets/first.svg";
import seoul from "./maincontexts/imgs/seoul.png";



function Main({nickname}) {
    const [contentType, setContentType] = useState(1)
    const [backColor, setBackColor] = useState('#f1f0f3')

    const handleOrder =(a)=>{
        setContentType(a)
    }

    const handleColor = (color) =>{
        setBackColor(color);
    }




     /*------------order-state 관리 함수  -------- */
        const [topModule,setTopModule] = useState('top');
        const [middleModule,setMiddleModule] = useState('middle');
        const [baseModule,setBaseModule] = useState('base');


        const onTopModule = (cityname) =>{
            setTopModule(cityname);
        }

        const onMiddleModule = (cityname) =>{
            setMiddleModule(cityname);
        }

        const onBaseModule = (cityname) =>{
            setBaseModule(cityname);
        }


    function displayHandler() {
        if (contentType === 1){
            return(
                <Home />
            );
        } else if (contentType === 2){
            return(
                <Order 
                topModule={topModule} onTopModule={(cityname)=>onTopModule(cityname)}
                middleModule={middleModule} onMiddleModule={(cityname)=>onMiddleModule(cityname)} 
                baseModule={baseModule} onBaseModule={(cityname)=>onBaseModule(cityname)} 
                handleOrder = {handleOrder}
                seoul = {seoul}
                />
            )
        } else if (contentType === 3){
            return(
                <About/>
            )
        } else if (contentType === 4){
            return(
                <CheckOut
                    topModule={topModule}
                    middleModule={middleModule}
                    baseModule={baseModule}
                    handleOrder = {handleOrder}
                    handleColor = {handleColor}
                />
            )
        }
    }

    return (
    <>
        <div className="main" style={{backgroundColor:backColor}}>
            <div className="header">
                <div className="nickname">
                    <div className="first-btn"><Link to="/nickname"><img alt='first' src={first}/></Link> Hello,{nickname}! We hope you make amazing Light.</div>
                </div>
                <div className="header-nav">
                    <div className="header-button" onClick={() => setContentType(1)} style={{color: contentType === 1 ? "#6A26ED" : '#000000' }}>Home</div>
                    <div className="header-button" onClick={() => setContentType(2)} style={{color: contentType === 2 ? "#6A26ED" : '#000000' }}>Order</div>
                    <div className="header-button" onClick={() => setContentType(3)} style={{color: contentType === 3 ? "#6A26ED" : '#000000' }}>About</div>
                    <div className="header-button logout"><Link style={{textDecoration:'none'}}to="/">LOGOUT</Link></div>
                </div>
            </div>
            <div className="main-context">
                {displayHandler()}
            </div>
        </div>
    </>
    );
};


export default Main;