import React, { useState } from 'react';
import './maincontexts.css';
import back from './assets/back.svg'




function City({name,info,color, cityHandler, seoul}) {
    
    return(
        <div className="city-block">
            <div className="city-name">
                {name}
            </div>
            <div className="city-info">
                <div className="city-module">
                    <img src={seoul} alt="seoul"/>
                </div>
                <div className="city-description">
                        <div className="city-color" style={{backgroundColor: color }}>

                        </div>
                </div>
            </div>
            <div className="city-choose">
                <div ></div>
                <div className="choose-btn" onClick={() => cityHandler(name)}>choose</div>
            </div>
        </div>
    )
};

function CityInfo({name,info,color, cityHandler, seoul}) {
    
    return(
        <div className="city-block">
            {info}
        </div>
    )
};


function ChosenCity({name, seoul}) {

    return(
        <div className="order">
            {/* <div className="city-module1">
                    <img src={seoul} alt="seoul"/>
            </div> */}
            {name}
        </div>
    )
};



function Order({topModule,middleModule,baseModule,onTopModule,onMiddleModule,onBaseModule,handleOrder,seoul}) {


    /*------------city display 관리 함수  -------- */


    /*------------status-bar 관리 함수  -------- */

    const [moduleType, setModuleType] = useState(1)

    const previousHandler = () => {
        setModuleType(moduleNum => moduleNum-1)
    }

    const nextHandler = () => {
        setModuleType(moduleNum => moduleNum+1)
    }

    function moduleHandler() {

        if (moduleType === 1){
            return(
                <CityBlockTop />
            );
        } else if (moduleType === 2){
            return(
                <CityBlockMiddle/>
            )
        } else if (moduleType === 3){
            return(
                <CityBlockBase/>
            )
        } else {
            setModuleType(1)
        }
    }

    
    /*------------city list 관리 함수  -------- */
    
    function CityBlockTop() {
        return(
            <div class="city-list" style={{overflowY:'auto',}}>
                <City name={"seoul"} info={"hihi"} color={"blue"} cityHandler={(cityname)=> onTopModule(cityname)} seoul = {seoul}/>
                <City name={"london"} info={"text"} color={"#438DFC"} cityHandler={(cityname)=> onTopModule(cityname)} seoul = {seoul}/>
                <City name={"singapore"} info={"text"} color={"orange"} cityHandler={(cityname)=> onTopModule(cityname)} seoul = {seoul}/>
                <City name={"hawaii"} info={"text"} color={"pink"} cityHandler={(cityname)=> onTopModule(cityname)} seoul = {seoul}/>
            </div>
        )
    }

    function CityBlockMiddle() {
        return(
            <div class="city-list" style={{overflowY:'scroll'}}>
                <City name={"Bali"} info={"hihi"} color={"deeppink"} cityHandler={(cityname)=> onMiddleModule(cityname)}/>
                <City name={"Naypiyidaw"} info={"text"} color={"lime"} cityHandler={(cityname)=> onMiddleModule(cityname)}/>
                <City name={"El Calafate"} info={"text"} color={"coral"} cityHandler={(cityname)=> onMiddleModule(cityname)}/>
            </div>
        )
    }

    function CityBlockBase() {
        return(
            <div class="city-list" style={{overflowY:'scroll'}}>
                <City name={"paris"} info={"hihi"} color={"gray"} cityHandler={(cityname)=> onBaseModule (cityname)}/>
                <City name={"Reykjavik"} info={"text"} color={"gray"} cityHandler={(cityname)=> onBaseModule (cityname)}/>
                <City name={"Santiago"} info={"text"} color={"gray"} cityHandler={(cityname)=> onBaseModule (cityname)}/>
                <City name={"Zagreb"} info={"text"} color={"gray"} cityHandler={(cityname)=> onBaseModule (cityname)}/>
            </div>
        )
    }

    return (
        <div className="main-order">
            <div className="city-display">
            <div className="status-bar">
                    { moduleType !== 1 ? 
                    <div className="prev-button" onClick={previousHandler}>
                        <img src={back} alt='back'/>
                    </div> : <div className="prev-button1"></div> }
                    <div className="status-list">
                        <div className="status" style={{color: moduleType === 1 ? "#6A26ED" : '#000000' }}> 1.top</div>
                        <div className="status" style={{color: moduleType === 2 ? "#6A26ED" : '#000000' }}>2.middle</div>
                        <div className="status" style={{color: moduleType === 3 ? "#6A26ED" : '#000000' }}> 3.base</div>
                    </div>
                    <div className="next-button" onClick={nextHandler}>
                        next step
                    </div>
                </div>
                <div>{moduleHandler()}</div>
            </div>
            <div className="order-state">
                <div className="progress">Your Progress</div>
                    <ChosenCity name={topModule} seoul = {seoul}/>
                    <ChosenCity name={middleModule}/>
                    <ChosenCity name={baseModule}/>
                <div className="checkout-btn" onClick={()=>handleOrder(4)}>complete</div>
            </div>
        </div>
    );
};



export default Order;