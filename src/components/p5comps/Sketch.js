import React, { Component } from "react";
import Sketch from "react-p5";
import circle from './svgs/ellipse1.svg'




export default class App extends Component {
    setup = (p5, parent) => {
        p5.createCanvas(window.innerWidth,window.innerHeight).parent(parent)
    }

    draw = p5 => {
        p5.background(241,240,243)
        p5.fill(255,160,49)
        // p5.fill(141,86,255)

        p5.ellipse(p5.mouseX,p5.mouseY,300,300)
        
    }

    render() {
        return <Sketch setup={this.setup} draw={this.draw} />
    }
}