import React, { useState } from 'react';
import './maincontexts.css';
import back from './assets/back.svg'
import nxt from './assets/nxt.svg'



const topCityinfo = ["대한민국의 수도이자 한강이 가로질러 흐르고 있는 서울은 21세기 문화를 이끄는 선두주자이다.한국의 고유한 문화유산과 현대적인 건축물들이 어우러져 있으며 곳곳에 즐길 거리가 즐비해있다.한국 고유문화 유산인 한옥과 갓 등에서 모티프를 가져와 디자인된 모듈이다.","영국의 수도이자 세계 최대 도시로 손꼽히는 곳. 영국의 정치, 경제, 문화, 교통의 중심지다.빅벤, 관람차, 템즈강 등 도시의 랜드마크들이 굉장히 많다. 과거와 현재가 공존하는 런던에서 모티프를 가져와 디자인된 모듈이다.","프랑스의 수도이자 패션과 미식, 예술과 낭만이 있는 세계 문화의 중심지이다. 파리는 그들의 고유한 문화를 소중하게 간직하는 곳으로 파리의 풍경은 예나 지금이나 늘 한결같다. 시간이 멈춘 아름다운 도시 파리에서 모티프를 가져와 디자인된 모듈이다.","아이슬란드의 수도인 레이캬비크는 북유럽에 위치해 멋진 풍경으로 최근 사람들이 많이 찾기 시작한 관광지이다. 인터스텔라, 왕좌의 게임 등 유명한 영화/드라마의 촬영지로 유명하다. 오로라를 보고자 많은 사람들이 레이캬비크를 찾고 있다. 빙하와 북유럽의 문화가 공존하는 레이캬비크에서 모티프를 가져와 디자인된 모듈이다." ];

function CityTop({name,info,color,cityHandler,city,handleColor,handleBackOne,handleBackTwo,onSelect}) {


    
    
    const clickHandler = (name,color,city) => {
        handleColor(color);
        cityHandler(name,city,color);
        // handleBackOne(color);
        // handleBackTwo(color);
        onSelect();

    }

    return(
        <div className="city-block">
            <div className="city-name" style={{color:color}}>
                {name}
            </div>
            <div className="city-info">
                <div className="city-module">
                    <img src={city} alt="seoul"/>
                </div>
                <div className="city-description">
                        <div className="city-color" style={{backgroundColor:color}} >

                        </div>
                </div>
                <div className="choose-btn" onClick={() => clickHandler(name,color,city)}>Choose</div>
            </div>
        </div>
    )
};

function CityMiddle({name,info,color, cityHandler,city,handleBackOne,handleBackTwo,onSelect}) {


    
    
    const clickHandler = (name,color) => {
        cityHandler(name,city,color);
        handleBackOne(color);
        //handleBackTwo(color);
        if (city) {
            onSelect();
        }
    }

    return(
        <div className="city-block">
            <div className="city-name"  style={{color:color}}>
                {name}
            </div>
            <div className="city-info">
                <div className="city-module">
                    <img src={city} alt="seoul"/>
                </div>
                <div className="city-description">
                        <div className="city-color" style={{backgroundColor:color}} >

                        </div>
                </div>
                <div className="choose-btn" onClick={() => clickHandler(name,color,city)}>Choose</div>
            </div>
        </div>
    )
};

function CityBase({name,info,color,cityHandler,city,handleBackTwo}) {


    
    
    const clickHandler = (name,color) => {
        cityHandler(name,city,color);
        handleBackTwo(color);
    }

    return(
        <div className="city-block">
            <div className="city-name"  style={{color:color}}>
                {name}
            </div>
            <div className="city-info">
                <div className="city-module">
                    <img src={city} alt="seoul"/>
                </div>
                <div className="city-description">
                        <div className="city-color" style={{backgroundColor:color}} >

                        </div>
                </div>
                <div className="choose-btn" onClick={() => clickHandler(name,color,city)}>Choose</div>
            </div>
        </div>
    )
};


function ChosenCity({module}) {
    return(
        <div className="order" style={{position:"relative"}}>
            <div className="module-name"  style={{position:"absolute", color:`${module.color}`}}>
                {module.name}
            </div>
            { module.city ? <img src={module.city} alt="cityimg" style={{position:"absolute"}} /> : null}
        </div>
    )
};



function Order({topModule,middleModule,baseModule,onTopModule,onMiddleModule,onBaseModule,handleOrder,handleColor,handleBackOne,handleBackTwo,colors,modules}) {



    /*------------city display 관리 함수  -------- */


    /*------------status-bar 관리 함수  -------- */

    const [moduleType, setModuleType] = useState(1)

    const previousHandler = () => {
        setModuleType(moduleNum => moduleNum-1)
    }

    const nextHandler = () => {
        setModuleType(moduleNum => moduleNum+1)
    }

    const onSelect = () => {
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
                <CityTop name={"SEOUL"} info={topCityinfo[0]} color={colors[0]} cityHandler={(cityname,cityimg,citycolor)=> onTopModule(cityname,cityimg,citycolor)} city = {modules[0]} handleColor = {handleColor} handleBackOne={handleBackOne} handleBackTwo={handleBackTwo} onSelect={onSelect}/>
                <CityTop name={"LONDON"} info={"text"} color={colors[1]} cityHandler={(cityname,cityimg,citycolor)=> onTopModule(cityname,cityimg,citycolor)} city = {modules[1]} handleColor = {handleColor} handleBackOne={handleBackOne} handleBackTwo={handleBackTwo} onSelect={onSelect}/>
                <CityTop name={"PARIS"} info={"text"} color={colors[2]} cityHandler={(cityname,cityimg,citycolor)=> onTopModule(cityname,cityimg,citycolor)} city = {modules[2]} handleColor = {handleColor} handleBackOne={handleBackOne} handleBackTwo={handleBackTwo} onSelect={onSelect}/>
                <CityTop name={"REYKJAVIK"} info={"text"} color={colors[3]} cityHandler={(cityname,cityimg,citycolor)=> onTopModule(cityname,cityimg,citycolor)} city = {modules[3]} handleColor = {handleColor} handleBackOne={handleBackOne} handleBackTwo={handleBackTwo} onSelect={onSelect}/>
            </div>
        )
    }

    function CityBlockMiddle() {
        return(
            <div class="city-list scroll" style={{overflowY:'scroll'}}>
                <CityMiddle name={"ZAGREB"} info={"hihi"} color={colors[4]} cityHandler={(cityname,cityimg,citycolor)=> onMiddleModule(cityname,cityimg,citycolor)}  city = {modules[4]} handleBackOne={handleBackOne} handleBackTwo={handleBackTwo} onSelect={onSelect}/>
                <CityMiddle name={"NATPIDAW"} info={"text"} color={colors[5]} cityHandler={(cityname,cityimg,citycolor)=> onMiddleModule(cityname,cityimg,citycolor)}  city = {modules[5]} handleBackOne={handleBackOne} handleBackTwo={handleBackTwo} onSelect={onSelect}/>
                <CityMiddle name={"SINGAPORE"} info={"text"} color={colors[6]} cityHandler={(cityname,cityimg,citycolor)=> onMiddleModule(cityname,cityimg,citycolor)}  city = {modules[6]} handleBackOne={handleBackOne} handleBackTwo={handleBackTwo} onSelect={onSelect}/>
            </div>
        )
    }

    function CityBlockBase() {
        return(
            <div class="city-list scroll" style={{overflowY:'scroll'}}>
                <CityBase name={"EL CALAFATE"} info={"hihi"} color={colors[6]} cityHandler={(cityname,cityimg,citycolor)=> onBaseModule (cityname,cityimg,citycolor)} city = {modules[7]} handleBackTwo={handleBackTwo}/>
                <CityBase name={"SANTIAGO"} info={"text"} color={colors[7]} cityHandler={(cityname,cityimg,citycolor)=> onBaseModule (cityname,cityimg,citycolor)}  city = {modules[8]} handleBackTwo={handleBackTwo}/>
                <CityBase name={"BALI"} info={"text"} color={colors[8]} cityHandler={(cityname,cityimg,citycolor)=> onBaseModule (cityname,cityimg,citycolor)} city = {modules[9]} handleBackTwo={handleBackTwo}/>
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
                            <div className="status" style={{color: moduleType === 1 ? "#6A26ED" : '#000000' }} onClick={()=>setModuleType(1)}> 1.Top</div>
                            <div className="status" style={{color: moduleType === 2 ? "#6A26ED" : '#000000' }} onClick={()=>setModuleType(2)}>2.Middle</div>
                            <div className="status" style={{color: moduleType === 3 ? "#6A26ED" : '#000000' }} onClick={()=>setModuleType(3)}> 3.Base</div>
                        </div>
                        { moduleType !== 1 ? 
                        <div className="next-button" onClick={nextHandler}>
                            <img src={nxt} alt='back'/>
                        </div> : <div className="next-button" onClick={nextHandler}> <img src={nxt} alt='back'/></div> }
                    </div>
                    <div className="list">{moduleHandler()}</div>
                </div>
                <div className="order-state">
                    <div className="progress">Your Progress</div>
                        <ChosenCity module={topModule} />
                        <ChosenCity module={middleModule}/>
                        <ChosenCity module={baseModule}/>
                    { topModule.color && middleModule.color && baseModule.color !== '' ? <div className="checkout-btn" onClick={() => handleOrder(4)}  style={{ backgroundColor : "black"}}>Complete</div> : <div className="checkout-btn" style={{ backgroundColor : 'rgba(0,0,0,0.2)', color:"white"}}>Complete</div> }
            </div>
    </div>
    );
};



export default Order;