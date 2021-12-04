import React, { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './Main.css';
import About from './maincontexts/About';
import Home from './maincontexts/Home';
import Order from './maincontexts/Order';
import CheckOut from './maincontexts/CheckOut';
import Sketch from './p5comps/Sketch';

import first from "./maincontexts/assets/first.svg";


import seoul from "./maincontexts/module/seoul.png";
import london from "./maincontexts/module/london.png";
import paris from "./maincontexts/module/paris.png";
import rey from "./maincontexts/module/rey.png";

import zag from "./maincontexts/module/zagreb.png";
import nay from "./maincontexts/module/nay.png";
import singapore from "./maincontexts/module/singapore.png";

import el from "./maincontexts/module/el.png";
import santiago from "./maincontexts/module/santiago.png";
import bali from "./maincontexts/module/bali.png";




function Main({nickname}) {

    const colors=["rgba(108,123,246,1)","rgba(108,164,255,1)","rgba(169,102,246,1)","rgba(133,213,211,1)","rgba(144,236,190,1)","rgba(223,243,163,1)",
    "rgba(246,157,92,1)","rgba(252,107,93,1)","rgba(90,193,116,1)","rgba(241,149,194,1)"]

    const modules = [
        seoul,london,paris,rey,zag,nay,singapore,el,santiago,bali
    ]

    const [contentType, setContentType] = useState(1)
    const [backColor, setBackColor] = useState('#f1f0f3')
    const [backColorOne, setBackColorOne] = useState('#f1f0f3')
    const [backColorTwo, setBackColorTwo] = useState('#f1f0f3')

    

    const handleOrder =(a)=>{
        setContentType(a)
    }

    const handleColor = (color) =>{
        setBackColor(color);
    }

    const handleBackOne = (color) =>{
        setBackColorOne(color);
    }

    const handleBackTwo = (color) =>{
        setBackColorTwo(color);
    }


    const onHome = () => {
        setBackColor('#f1f0f3');
        setBackColorOne('#f1f0f3');
        setBackColorTwo('#f1f0f3');
        setContentType(1);
        onTopModule('Top','','');
        onMiddleModule('Middle','','');
        onBaseModule('Base','','');
    }

    const onOrder = () => {
        setBackColor('#f1f0f3');
        setBackColorOne('#f1f0f3');
        setBackColorTwo('#f1f0f3');
        setContentType(2);
        onTopModule('Top','','');
        onMiddleModule('Middle','','');
        onBaseModule('Base','','');
    }

    const onAbout = () => {
        setBackColor('#f1f0f3');
        setBackColorOne('#f1f0f3');
        setBackColorTwo('#f1f0f3');
        setContentType(3);
        onTopModule('Top','','');
        onMiddleModule('Middle','','');
        onBaseModule('Base','','');
    }




     /*------------order-state 관리 함수  -------- */
        const [topModule,setTopModule] = useState({
            name: 'Top',
            city: '',
            color:''
          });
        
        const [middleModule,setMiddleModule] = useState({
            name: 'Middle',
            city: '',
            color:''
          });
        const [baseModule,setBaseModule] = useState({
            name: 'Base',
            city: '',
            color:''
          });


        const onTopModule = (cityname,cityimg,citycolor) =>{
            setTopModule({
                ...topModule, // 기존의 input 객체를 복사한 뒤
                name: cityname,
                city: cityimg,
                color:citycolor // name 키를 가진 값을 value 로 설정
              });
        }

        const onMiddleModule = (cityname,cityimg,citycolor) =>{
            setMiddleModule({
                ...middleModule, // 기존의 input 객체를 복사한 뒤
                name: cityname,
                city: cityimg,
                color:citycolor // name 키를 가진 값을 value 로 설정
              });
        }

        const onBaseModule = (cityname,cityimg,citycolor) =>{
            setBaseModule({
                ...baseModule, // 기존의 input 객체를 복사한 뒤
                name: cityname,
                city: cityimg,
                color:citycolor // name 키를 가진 값을 value 로 설정
              });
        }


    function displayHandler() {
        if (contentType === 1){
            return(
                <Home />
            );
        } else if (contentType === 2){
            return(
                <Order 
                topModule={topModule} onTopModule={(cityname,cityimg,citycolor)=>onTopModule(cityname,cityimg,citycolor)}
                middleModule={middleModule} onMiddleModule={(cityname,cityimg,citycolor)=>onMiddleModule(cityname,cityimg,citycolor)} 
                baseModule={baseModule} onBaseModule={(cityname,cityimg,citycolor)=>onBaseModule(cityname,cityimg,citycolor)}
                colors={colors}
                handleOrder = {handleOrder}
                handleColor = {handleColor}
                handleBackOne={handleBackOne}
                handleBackTwo={handleBackTwo}
                modules={modules}
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
                    backColor={backColor}
                    backColorOne={backColorOne}
                    backColorTwo={backColorTwo}
                />
            )
        }
    }

    // let gradient = `animation${}`;

    // let keyframes = `@-webkit-keyframes ${gradient} {
        
    // }`;

    return (
    <>
        <div className="main" style={{ background: contentType === 4 ? 'white' : `linear-gradient(45deg,${backColor}, ${backColorOne},${backColorTwo})`}}>
        {   contentType === 3 &&
            <>
            <div  className="p5"><Sketch/></div>
            <div  className="p5-backg"></div> </> }

            <div className="header">
                <div className="nickname">
                    <div className="first-btn"><Link to="/nickname"><img alt='first' src={first}/></Link> Hello, {nickname}! We hope you make amazing Light.</div>
                </div>
                <div className="header-nav">
                    <div className="header-button" onClick={() => onHome()} style={{color: contentType === 1 ? "#6A26ED" : '#000000', filter: contentType === 1 ? 'blur(0px)':'' }}>HOME</div>
                    <div className="header-button" onClick={() => onOrder()} style={{color: contentType === 2 ? "#6A26ED" : '#000000', filter: contentType === 2 ? 'blur(0px)':'' }}>ORDER</div>
                    <div className="header-button" onClick={() => onAbout()} style={{color: contentType === 3 ? "#6A26ED" : '#000000',filter: contentType === 3 ? 'blur(0px)':'' }}>ABOUT</div>
                    <div className="header-button logout"><Link style={{textDecoration:'none'}}to="/">LOGOUT</Link></div>
                </div>
            </div>
            <div className="main-context">
                {displayHandler()}
            </div>
        </div>
        <Link to="/egg"><div className="easter-egg" >Something hide</div></Link>
    </>
    );
}


export default Main;