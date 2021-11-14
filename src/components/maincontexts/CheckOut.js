import React, { useState } from 'react';
import './maincontexts.css';
import { Routes, Route, Link } from "react-router-dom";


function CheckOut({topModule,middleModule,baseModule,handleOrder,colors}) {


    return(
        <div className="checkout-display" >
            <div className="checkout-main">
                <div className="checkout-info check-module">
                        <div>
                            {topModule}
                        </div>
                        <div>
                            {middleModule}
                        </div>
                        <div>
                            {baseModule}
                        </div>
                </div>
                <div className="checkout-info" >
                    This is yout light
                    <div className="check-btns">
                        <div className="back-home"><Link to="/complete">order</Link></div>
                        <div className="back-home" onClick={()=>handleOrder(2)}>Change</div>
                    </div>
                </div>

            </div>
        </div>
    )
};


export default CheckOut;
