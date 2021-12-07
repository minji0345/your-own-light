import React, { useState } from 'react';
import './maincontexts.css';
import back from './assets/back.svg'
import nxt from './assets/nxt.svg'

import topgif from './imgs/top.gif'
import middlegif  from './imgs/middle.gif'
import basegif from './imgs/base.gif'



const topCityinfo = ["대한민국의 수도이자 한강이 가로질러 흐르고 있는 서울은 21세기 문화를 이끄는 선두주자이다.한국의 고유한 문화유산과 현대적인 건축물들이 어우러져 있으며 곳곳에 즐길 거리가 즐비해있다.한국 고유문화 유산인 한옥과 갓 등에서 모티프를 가져와 디자인된 모듈이다.","영국의 수도이자 세계 최대 도시로 손꼽히는 곳. 영국의 정치, 경제, 문화, 교통의 중심지다.빅벤, 관람차, 템즈강 등 도시의 랜드마크들이 굉장히 많다. 과거와 현재가 공존하는 런던에서 모티프를 가져와 디자인된 모듈이다.","프랑스의 수도이자 패션과 미식, 예술과 낭만이 있는 세계 문화의 중심지이다. 파리는 그들의 고유한 문화를 소중하게 간직하는 곳으로 파리의 풍경은 예나 지금이나 늘 한결같다. 시간이 멈춘 아름다운 도시 파리의 풍경에서 모티프를 가져와 디자인된 모듈이다.","아이슬란드의 수도인 레이캬비크는 북유럽에 위치해 멋진 풍경으로 최근 사람들이 많이 찾기 시작한 관광지이다. 영화와 드라마 등의 촬영지로 유명하다. 오로라를 보고자 많은 사람들이 레이캬비크를 찾고 있다. 빙하와 북유럽의 문화가 공존하는 레이캬비크에서 모티프를 가져와 디자인된 모듈이다." ];
const middleCityinfo = ["자그레브는 크로아티아의 수도답게 관광의 메카이다. 크로아티아라는 나라에 비해 수도는 덜 알려져 있는데, 다들 인생 여행지로 크로아티아를 꼽는 만큼 황홀한 경험을 할 수 있는 곳이 바로 자그레브이다. 자그레브 대성당이 우뚝 서 있는 도시의 풍경에서 모티브를 가져와 디자인된 모듈이다.","미얀마 불교문화와 역사의 정점인 도시로  동남아시아에 위치해 여러 국가들과 만나는 미얀마의 역사와 여러 유적지를 만날 수 있는 도시입니다. 거대한 사원들과 수많은 탑들이 어디서도 경험하지 못한 황홀한 풍경을 선사해 주는 바간의 풍경에서 모티브를 가져와 디자인된 모듈입니다.","싱가포르는 싱가포르의 수도로 굉장히 깨끗하고 현대적인 풍경이 인상적인 도시이다. 일반적인 동남아시아의 풍경과 달리 굉장히 미래 지향적인 도시의 모습을 접할 수 있다. 싱가포르에서는 껌을 뱉어도 과태료를 낸다는 말이 사실이듯, 깔끔한 싱가포르 거리의 모습에서 모티브를 가져와 디자인된 모듈이다."];
const baseCityinfo =["파타고니아를 바탕으로 위치한 아르헨티나의 도시이다. 로스 글라시아레스 국립공원이 위치하여 많은 관광객들이 찾는 곳인데, 국립공원에서 압도적인 자연경관을 찾아볼 수 있다 만년설과 호수, 푸른 숲으로 이루어진 국립공원은 그중 30%가 빙산과 빙하로 덮여 있어 황홀한 풍경을 마주할 수 있다. 엘칼라파테의 자연경관에서 모티브를 가져와 디자인된 모듈이다.","칠레의 수도이자 남아메리카 안데스산맥 해발 520미터의 고원에 위치한 도시이다. 남미 여행의 시작과 끝인 도시로 고원에 둘러싸여 절경으로 평가받는다. 병풍처럼 둘러진 산맥과 칠레의 문화에서 모티브를 가져와 디자인된 모듈이다.",
"발리는 인도네이사의 도시로 신들의 섬이라고 불리며 세계 최고의 휴양지로 손꼽히는 곳이다. 석양이 아름다운 발리의 풍경에서 가져와 디자인된 모듈이다."]

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
                <div className="city-information">{info}</div>
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
                <div className="city-information">{info}</div>
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
                <div className="city-information">{info}</div>
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
                <div className="city-block"><img src={topgif} alt="topgif"/></div>
                <CityTop name={"SEOUL"} info={topCityinfo[0]} color={colors[0]} cityHandler={(cityname,cityimg,citycolor)=> onTopModule(cityname,cityimg,citycolor)} city = {modules[0]} handleColor = {handleColor} handleBackOne={handleBackOne} handleBackTwo={handleBackTwo} onSelect={onSelect}/>
                <CityTop name={"LONDON"} info={topCityinfo[1]} color={colors[1]} cityHandler={(cityname,cityimg,citycolor)=> onTopModule(cityname,cityimg,citycolor)} city = {modules[1]} handleColor = {handleColor} handleBackOne={handleBackOne} handleBackTwo={handleBackTwo} onSelect={onSelect}/>
                <CityTop name={"PARIS"} info={topCityinfo[2]} color={colors[2]} cityHandler={(cityname,cityimg,citycolor)=> onTopModule(cityname,cityimg,citycolor)} city = {modules[2]} handleColor = {handleColor} handleBackOne={handleBackOne} handleBackTwo={handleBackTwo} onSelect={onSelect}/>
                <CityTop name={"REYKJAVIK"} info={topCityinfo[3]} color={colors[3]} cityHandler={(cityname,cityimg,citycolor)=> onTopModule(cityname,cityimg,citycolor)} city = {modules[3]} handleColor = {handleColor} handleBackOne={handleBackOne} handleBackTwo={handleBackTwo} onSelect={onSelect}/>
            </div>
        )
    }

    function CityBlockMiddle() {
        return(
            <div class="city-list scroll" style={{overflowY:'scroll'}}>
                <div className="city-block"><img src={middlegif} alt="topgif"/></div>
                <CityMiddle name={"ZAGREB"} info={middleCityinfo[0]} color={colors[4]} cityHandler={(cityname,cityimg,citycolor)=> onMiddleModule(cityname,cityimg,citycolor)}  city = {modules[4]} handleBackOne={handleBackOne} handleBackTwo={handleBackTwo} onSelect={onSelect}/>
                <CityMiddle name={"BAGAN"} info={middleCityinfo[1]} color={colors[5]} cityHandler={(cityname,cityimg,citycolor)=> onMiddleModule(cityname,cityimg,citycolor)}  city = {modules[6]} handleBackOne={handleBackOne} handleBackTwo={handleBackTwo} onSelect={onSelect}/>
                <CityMiddle name={"SINGAPORE"} info={middleCityinfo[2]} color={colors[6]} cityHandler={(cityname,cityimg,citycolor)=> onMiddleModule(cityname,cityimg,citycolor)}  city = {modules[5]} handleBackOne={handleBackOne} handleBackTwo={handleBackTwo} onSelect={onSelect}/>
            </div>
        )
    }

    function CityBlockBase() {
        return(
            <div class="city-list scroll" style={{overflowY:'scroll'}}>
                <div className="city-block"><img src={basegif} alt="topgif"/></div>
                <CityBase name={"EL CALAFATE"} info={baseCityinfo[0]} color={colors[6]} cityHandler={(cityname,cityimg,citycolor)=> onBaseModule (cityname,cityimg,citycolor)} city = {modules[7]} handleBackTwo={handleBackTwo}/>
                <CityBase name={"SANTIAGO"} info={baseCityinfo[1]} color={colors[7]} cityHandler={(cityname,cityimg,citycolor)=> onBaseModule (cityname,cityimg,citycolor)}  city = {modules[8]} handleBackTwo={handleBackTwo}/>
                <CityBase name={"BALI"} info={baseCityinfo[2]} color={colors[8]} cityHandler={(cityname,cityimg,citycolor)=> onBaseModule (cityname,cityimg,citycolor)} city = {modules[9]} handleBackTwo={handleBackTwo}/>
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