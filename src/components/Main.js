import React from 'react';
import './Main.css';


const Main = () => {


    return (
        <div className="main">
            <div className="header">
                header position
            </div>
            <div className="main-context">
                main position
                    <div className="main-order">
                        order
                    </div>
                    <div className="main-about">
                        about
                    </div>
            </div>
        </div>
    );
};


export default Main;