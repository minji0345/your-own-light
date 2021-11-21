import React, { useState } from 'react';
import './maincontexts.css';
import { Routes, Route, Link } from "react-router-dom";


function CheckOut({topModule,middleModule,baseModule,handleOrder,backColor,backColorOne,backColorTwo}) {


    return(
        <div className="checkout-display" >
            <div className="checkout-main">
                <div className="checkout-info check-module" style={{background: `linear-gradient(45deg,${backColor}, ${backColorOne},${backColorTwo})`}}>
                     
                            { topModule.city ? <img src={topModule.city} alt="cityimg" style={{marginBottom:"190px" ,zIndex:"100"}}/> : null}
                      
                            {middleModule.city ? <img src={middleModule.city} alt="cityimg"  style={{zIndex:"15"}}/> : null}
                        
                            { baseModule.city ? <img src={baseModule.city} alt="cityimg" style={{marginTop:"270px",zIndex:"10"}} /> : null}
            
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
