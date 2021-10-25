import React, { useState } from 'react';
import './maincontexts.css';




function City({name,info,color, cityHandler}) {
    
    return(
        <div className="city-block">
            <div className="city-name">
                {name}
            </div>
            <div className="city-info">
                <div className="city-color" style={{backgroundColor: color }}>

                </div>
                <div className="city-description">
                    {info}
                </div>
            </div>
            <div className="city-choose">
                <div ></div>
                <div className="choose-btn" onClick={() => cityHandler(name)}>choose</div>
            </div>
        </div>
    )
};


function ChosenCity({name}) {

    return(
        <div className="order state-process">{name}</div>
    )
};



function Order({topModule,middleModule,baseModule,onTopModule,onMiddleModule,onBaseModule,handleOrder}) {


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
                <City name={"seoul"} info={"hihi"} color={"blue"} cityHandler={(cityname)=> onTopModule(cityname)}/>
                <City name={"london"} info={"text"} color={"red"} cityHandler={(cityname)=> onTopModule(cityname)}/>
                <City name={"singapore"} info={"text"} color={"orange"} cityHandler={(cityname)=> onTopModule(cityname)}/>
                <City name={"hawaii"} info={"text"} color={"pink"} cityHandler={(cityname)=> onTopModule(cityname)}/>
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
                        previous step
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
                <ChosenCity name={topModule}/>
                <ChosenCity name={middleModule}/>
                <ChosenCity name={baseModule}/>
                <div className="checkout-btn" onClick={()=>handleOrder()}>complete</div>
            </div>
        </div>
    );
};



export default Order;