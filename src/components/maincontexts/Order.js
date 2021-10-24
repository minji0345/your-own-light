import React, { useState } from 'react';
import './maincontexts.css';

const cities = [];

function City() {
    return(
        <div className="city-block">
            <div className="city-name">
                Seoul
            </div>
            <div className="city-info">
                <div className="city-color" style={{backgroundColor:'blue'}}>

                </div>
                <div className="city-description">
                    someplaintext here
                </div>
            </div>
        </div>
    )
};

function Order() {

    const moduleNum = 1;

    const [moduleType, setModuleType] = useState(moduleNum)

    const nextHandler = (moduleNum) => {
        moduleNum += 1;
        return(
            setModuleType(moduleNum)
        )
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
        }
    }

    
    
    function CityBlockTop() {
        return(
            <div class="city-list" style={{overflowY:'scroll'}}>
                <City/>
                <City/>
                <City/>
            </div>
        )
    }

    function CityBlockMiddle() {
        return(
            <div class="city-list" style={{overflowY:'scroll'}}>
                middle
            </div>
        )
    }

    function CityBlockBase() {
        return(
            <div class="city-list" style={{overflowY:'scroll'}}>
                base
            </div>
        )
    }

    return (
        <div className="main-order">
            <div className="city-display">
                <div className="status-bar">
                    <div className="status-list">
                        <div className="status" style={{color: moduleType === 1 ? "#6A26ED" : '#000000' }}> 1.top</div>
                        <div className="status" style={{color: moduleType === 2 ? "#6A26ED" : '#000000' }}>2.middle</div>
                        <div className="status" style={{color: moduleType === 3 ? "#6A26ED" : '#000000' }}> 3.base</div>
                    </div>
                    <div className="next-button" onClick={() => nextHandler(moduleNum)}>
                        next step
                    </div>
                    
                </div>
                <div>{moduleHandler()}</div>
            </div>
            <div className="order-state">
                <div className="order order-top" style={{color: moduleType === 1 ? "#6A26ED" : '#000000' }}> Top </div>
                <div className="order order-middle" style={{color: moduleType === 2 ? "#6A26ED" : '#000000' }}> Middle </div>
                <div className="order order-base" style={{color: moduleType === 3 ? "#6A26ED" : '#000000' }}> Base </div>
            </div>
        </div>
    );
};



export default Order;