import React from 'react';


function City({name,info,color}) {
    
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
        </div>
    )
};


export default City;