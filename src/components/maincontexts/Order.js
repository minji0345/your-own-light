import React from 'react';
import './maincontexts.css';

const cities = [];

function City() {
    return(
        <div className="city-block">
            <div className="cityName">
                Seoul
            </div>
            <div className="city-info">
                <div className="city-color" style={{backgroundColor:'blue'}}>

                </div>
                <div className="city-description">

                </div>
            </div>
        </div>
    )
};

function Order() {
    
    
    function CityBlockTop() {
        return(
            <div class="city-list">
                <City/>
                <City/>
            </div>
        )
    }

    function CityBlockMiddle() {
        return(
            <div class="city-list">
                이미지 넣기
            </div>
        )
    }

    function CityBlockBase() {
        return(
            <div class="city-list">
                이미지 넣기
            </div>
        )
    }

    return (
            <div className="main-order">
                <div className="city-display">
                    <CityBlockTop/>
                </div>
                <div className="order-state"></div>
            </div>
    );
};


export default Order;