import React, { useState } from 'react';
import './maincontexts.css';
import { Routes, Route, Link } from "react-router-dom";

import text from './assets/text.svg'


function CheckOut({topModule,middleModule,baseModule,handleOrder,backColor,backColorOne,backColorTwo}) {


    return(
        <div className="checkout-display" >
            <div className="checkout-main">
                <div className="checkout-info check-module" style={{background: `linear-gradient(45deg,${backColor}, ${backColorOne},${backColorTwo})`}}>
                     
                            { topModule.city ? <img src={topModule.city} alt="cityimg" style={{marginBottom:"200px" ,zIndex:"100"}}/> : null}
                      
                            {middleModule.city ? <img src={middleModule.city} alt="cityimg"  style={{zIndex:"15"}}/> : null}
                        
                            { baseModule.city ? <img src={baseModule.city} alt="cityimg" style={{marginTop:"240px",zIndex:"10"}} /> : null}
            
                </div>
                <div className="checkout-info check-text" >
                    <img src={text} alt="text"  style={{}}/>
                    <div className="check-btns">
                        <Link to="/complete" className="check-order">Order</Link>
                        <div className="check-change" onClick={()=>handleOrder(2)}>Change</div>
                    </div>
                </div>

            </div>
        </div>
    )
};


export default CheckOut;
