import React, { useState } from 'react';
import './maincontexts.css';
import back from './assets/back.svg'
import nxt1 from './assets/nxt1.svg'
import nxt2 from './assets/nxt2.svg'




function CityTop({name,info,color, cityHandler, seoul,handleColor,handleBackOne,handleBackTwo}) {


    
    
    const clickHandler = (name,color) => {
        handleColor(color);
        cityHandler(name);
        handleBackOne(color);
        handleBackTwo(color);
    }

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
            <div>
                city information
            </div>
            <div className="city-choose">
                <div ></div>
                <div className="choose-btn" onClick={() => clickHandler(name,color)}>choose</div>
            </div>
        </div>
    )
};

function CityMiddle({name,info,color, cityHandler, seoul,handleBackOne,handleBackTwo}) {


    
    
    const clickHandler = (name,color) => {
        cityHandler(name);
        handleBackOne(color);
        handleBackTwo(color);
    }

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
            <div>
                city information
            </div>
            <div className="city-choose">
                <div ></div>
                <div className="choose-btn" onClick={() => clickHandler(name,color)}>choose</div>
            </div>
        </div>
    )
};

function CityBase({name,info,color, cityHandler, seoul,handleBackTwo}) {


    
    
    const clickHandler = (name,color) => {
        cityHandler(name);
        handleBackTwo(color);
    }

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
            <div>
                city information
            </div>
            <div className="city-choose">
                <div ></div>
                <div className="choose-btn" onClick={() => clickHandler(name,color)}>choose</div>
            </div>
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



function Order({topModule,middleModule,baseModule,onTopModule,onMiddleModule,onBaseModule,handleOrder,seoul,handleColor,handleBackOne,handleBackTwo,colors}) {




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
            <div class="city-list scroll" style={{overflowY:'scroll'}}>
                <CityTop name={"seoul"} info={"hihi"} color={colors[0]} cityHandler={(cityname)=> onTopModule(cityname)} seoul = {seoul} handleColor = {handleColor} handleBackOne={handleBackOne} handleBackTwo={handleBackTwo}/>
                <CityTop name={"london"} info={"text"} color={colors[1]} cityHandler={(cityname)=> onTopModule(cityname)} seoul = {seoul} handleColor = {handleColor} handleBackOne={handleBackOne} handleBackTwo={handleBackTwo}/>
                <CityTop name={"Paris"} info={"text"} color={colors[2]} cityHandler={(cityname)=> onTopModule(cityname)} seoul = {seoul} handleColor = {handleColor} handleBackOne={handleBackOne} handleBackTwo={handleBackTwo}/>
                <CityTop name={"Reykjavik"} info={"text"} color={colors[3]} cityHandler={(cityname)=> onTopModule(cityname)} seoul = {seoul} handleColor = {handleColor} handleBackOne={handleBackOne} handleBackTwo={handleBackTwo}/>
            </div>
        )
    }

    function CityBlockMiddle() {
        return(
            <div class="city-list scroll" style={{overflowY:'scroll'}}>
                <CityMiddle name={"Zagreb"} info={"hihi"} color={colors[4]} cityHandler={(cityname)=> onMiddleModule(cityname)}  handleBackOne={handleBackOne} handleBackTwo={handleBackTwo}/>
                <CityMiddle name={"Naypiyidaw"} info={"text"} color={colors[5]} cityHandler={(cityname)=> onMiddleModule(cityname)}  handleBackOne={handleBackOne} handleBackTwo={handleBackTwo}/>
                <CityMiddle name={"Singapore"} info={"text"} color={colors[6]} cityHandler={(cityname)=> onMiddleModule(cityname)}  handleBackOne={handleBackOne} handleBackTwo={handleBackTwo}/>
            </div>
        )
    }

    function CityBlockBase() {
        return(
            <div class="city-list scroll" style={{overflowY:'scroll'}}>
                <CityBase name={"El Calafate"} info={"hihi"} color={colors[6]} cityHandler={(cityname)=> onBaseModule (cityname)}  handleBackTwo={handleBackTwo}/>
                <CityBase name={"Santiago"} info={"text"} color={colors[7]} cityHandler={(cityname)=> onBaseModule (cityname)}  handleBackTwo={handleBackTwo}/>
                <CityBase name={"Bali"} info={"text"} color={colors[8]} cityHandler={(cityname)=> onBaseModule (cityname)} handleBackTwo={handleBackTwo}/>
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
                        { moduleType !== 1 ? 
                        <div className="next-button" onClick={nextHandler}>
                            <img src={nxt1} alt='back'/>
                        </div> : <div className="next-button" onClick={nextHandler}> <img src={nxt1} alt='back'/></div> }
                    </div>
                    <div>{moduleHandler()}</div>
                </div>
                <div className="order-state">
                    <div className="progress">Your Progress</div>
                        <ChosenCity name={topModule} seoul = {seoul}/>
                        <ChosenCity name={middleModule}/>
                        <ChosenCity name={baseModule}/>
                    { moduleType === 3 ? <div className="checkout-btn" onClick={() => handleOrder(4)}  style={{ backgroundColor : "#6A26ED"}}>complete</div> : <div className="checkout-btn" style={{ backgroundColor : "#A6A6A7", color:"white"}}>complete</div> }
            </div>
    </div>
    );
};



export default Order;