import React, { useState } from 'react'  
import Main from './components/Main';
import Complete from './components/maincontexts/Complete';
import About from './components/maincontexts/About';
import { Routes, Route, Link } from "react-router-dom";
import './components/Main.css';
import homelogo from "./mp4/edit.mp4";


function Nickname({onChange}) {

  return(
    <div className="main" style={{backgroundColor:"#f1f0f3"}}>
      <input className="nickname-input" placeholder="Enter Your Name!" onChange={onChange}></input>
      <Link className="nick-btn" to="/main">Submit</Link>
    </div>
  );
}

function First() {

  return(
    <div className="main" style={{backgroundColor:"#f1f0f3"}}>
      <video width="30%" autoPlay muted loop>
        <source src={homelogo} type='video/mp4' />
      </video>
      <Link className="start-btn" to="/nickname">시작하기</Link>
    </div>
  );
}


function App() {

  const [nickname, setNickName] = useState('stranger');

  const [colorOne, setColorOne] = useState('black');
  const [colorTwo, setColorTwo] = useState('gray');
  const [colorThree,setColorThree] = useState('white');

  const gradientBack = (colorOne,colorTwo,colorThree) => {
    setColorOne(colorOne);
    setColorTwo(colorTwo);
    setColorThree(colorThree);
  }
  

  const onChange = (e) => {
    setNickName(e.target.value)		//이벤트 발생한 value값으로 {text} 변경
  }


  return (
  <>
    <Routes>
        <Route exact path="/" element={<First />} />
        <Route exact path="/nickname" element={<Nickname onChange={onChange} nickname={nickname}/>} />
        <Route exact path="/main" element={<Main nickname={nickname} />} />
        <Route exact path="/complete" element={<Complete nickname={nickname} colorOne={colorOne} colorTwo={colorTwo} colorThree={colorThree} gradientBack={gradientBack}/>} />
        <Route exact path="/about" element={<About/>} />
        <Route path="/" element={<First />} />
    </Routes>
  </>
  );
}

export default App;
