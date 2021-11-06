import React from 'react';
import './maincontexts.css';


function CheckOut({topModule,middleModule,baseModule,handleOrder}) {
    
    return(
        <div className="checkout-display">
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
                        <div className="back-home" onClick={()=>handleOrder(1)}>order</div>
                        <div className="back-home" onClick={()=>handleOrder(2)}>Change</div>
                    </div>
                </div>

            </div>
        </div>
    )
};


export default CheckOut;