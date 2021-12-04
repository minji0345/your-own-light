import React, { useState } from 'react'  
import Main from './components/Main';
import Complete from './components/maincontexts/Complete';
import About from './components/maincontexts/About';
import { Routes, Route, Link } from "react-router-dom";
import './components/Main.css';
import homelogo from "./mp4/edit.mp4";

import detail from './components/maincontexts/abouts/app_detail.mp4';
import over from './components/maincontexts/abouts/app_over.mp4';

import pack from "./mp4/pack.png";
import yol from "./mp4/yol2.png";
import egg from "./mp4/egg_back.mp4";


function Nickname({onChange}) {

  return(
    <div className="main nickname-back">
      <input className="nickname-input" placeholder="Enter Your Name!" onChange={onChange}></input>
      <Link className="nick-btn" to="/main">Submit</Link>
    </div>
  );
}

function Guide() {

  return(
    <div className="main nickname-back">
      <div className="guide scroll" style={{overflowY:'scroll'}}>
          <div className="guide-title">After ordering the lights from the website,</div>
          
          <div className="guide-text">STEP 1. You get the lights delivered home.</div>
          <img src={pack} alt="logo" width="60%" className="pack"/>
          <div className="guide-text">STEP 2. Register the lights on the application.</div>
          <div className="guide-para">
            <img src={yol} alt="logo" width="50%"/>
            <div>어플을 다운받은 후 제공받은 입력번호를 입력하여 본인의 조명을 등록합니다.<br/> 조명의 별칭을 설정할 수 있습니다.</div>
          </div>
          <div className="guide-text">STEP 3. You can manipulate the lighting as you want.</div>
          <video muted loop autoPlay>
            <source src={over} type='video/mp4' />
          </video>
          <video muted loop autoPlay>
            <source src={detail} type='video/mp4' />
          </video>
      </div>
      <Link className="nick-btn" to="/main">Home</Link>
    </div>
  );
}

function Egg() {

  return(
    <>
    <video muted loop autoPlay className="egg-back">
            <source src={egg} type='video/mp4' />
          </video>
    <div className="egg-back">
      <div className="egg scroll" style={{overflowY:'scroll'}}>
          <div className="egg-title">
            CREDIT
          </div>
          <div className="egg-para">
            <div className="egg-sub">Designer</div>
            <div className="egg-text">Minji Kim _ mixed material, media.</div>
          </div>
          <div className="egg-para">
            <div className="egg-sub">Developer</div>
            <div className="egg-text">Minji Kim _ Java Script(React js) etc.</div>
          </div>
          <div className="egg-para">
            <div className="egg-sub">Space mokups inspired by the cities</div>
            <div className="egg-text">Haeun Ki</div>
          </div>
          <div className="egg-para">
            <div className="egg-sub">Music</div>
            <div className="egg-text">Uhong Lee</div>
          </div>
          <div className="egg-para">
            <div className="egg-sub">Special thanks to</div>
            <div className="egg-text">Jangsub Lee, Jeongwoo Kim, Junwon Lee</div>
          </div>
      </div>
      <Link className="nick-btn" to="/main">Home</Link>
    </div>
    </>
  );
}

function First() {


  return(
    <Link to="/nickname" >
      <div className="main" style={{backgroundColor:"#f1f0f3"}}>
            <video className="nick-vid" autoPlay muted loop>
              <source src={homelogo} type='video/mp4' />
            </video>
            <div className="start-text">Click for start, let's make your own light.</div>
      </div>
    </Link>
  );
}



function App() {

  const [nickname, setNickName] = useState('Stranger');

  const onChange = (e) => {
    setNickName(e.target.value)		//이벤트 발생한 value값으로 {text} 변경
  }


  return (
  <>
    <Routes>
        <Route exact path="/" element={<First />} />
        <Route exact path="/nickname" element={<Nickname onChange={onChange} nickname={nickname}/>} />
        <Route exact path="/main" element={<Main nickname={nickname}/>} />
        <Route exact path="/complete" element={<Complete nickname={nickname}/>} />
        <Route exact path="/guide" element={<Guide/>} />
        <Route exact path="/egg" element={<Egg/>} />
        <Route exact path="/about" element={<About/>} />
        <Route path="/" element={<First />} />
    </Routes>
  </>
  );
}

export default App;
