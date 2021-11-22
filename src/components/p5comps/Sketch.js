import React, { Component } from "react";
import Sketch from "react-p5";
import circle from './svgs/ellipse1.svg'




export default class App extends Component {
    // display() {
    //     this.xp += this.xs;
    //     this.yp += this.ys;
    //     ellipse(this.xp,this.yp,this.d,this.d);
      
    //     if (this.xp < 0 || this.xp > width) {
    //       this.xs *= -1;
    //     }
    //     if (this.yp < 0 || this.yp > height) {
    //       this.ys *= -1;
    //     }
    //   }

    setup = (p5, parent) => {
        p5.createCanvas(window.innerWidth*0.8,window.innerHeight*0.7).parent(parent)
    }

    make= p5 => {
        
    }

    draw = p5 => {

        const xS = p5.random(-1,1);
        const yS = p5.random(-1,1);

        // const xPositon = p5.random(window.innerWidth);
        // const yPositon = p5.random(window.innerHeight);
        const xPositon = 10;
        const yPositon = 10;

        this.xPositon += xS;
        this.yPositon += yS;


        p5.background(200,200,200)
        p5.fill(0,0,0)
        p5.ellipse(xPositon,yPositon,300,300)

        if(this.xPosition < 0 || this.xPosition > window.innerWidth){
            this.xs *= -1;
        }

        if(this.yPosition < 0 || this.yPosition > window.innerHeight){
            this.ys *= -1;
        }

        
    }

    render() {
        return <Sketch setup={this.setup} draw={this.draw} />
    }
}