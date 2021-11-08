import React, { Component } from "react";
import Sketch from "react-p5";
import circle from './svgs/ellipse1.svg'



export default class App extends Component {


    setup = (p5, parent) => {
        p5.createCanvas(window.innerWidth*0.8,window.innerHeight*0.7).parent(parent)
    }

    draw = p5 => {
        p5.background(p5.mouseX,p5.mouseY,120)
        p5.push();
            p5.fill(0,0,200);
            p5.noStroke();
            p5.ellipse(p5.mouseX,p5.mouseY,200,200);
        p5.pop();
    }

    render() {
        return <Sketch setup={this.setup} draw={this.draw} />
    }
}