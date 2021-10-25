import React from 'react';


function CheckOut({topModule,middleModule,baseModule}) {
    
    return(
        <div className="checkout-display">
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
    )
};


export default CheckOut;