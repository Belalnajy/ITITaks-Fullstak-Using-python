
//create rectangle class
    import { shape } from "./shapemodule.js";
   export class Rectangle extends shape{
    #width;
    #height;
    constructor(_width, _height,_colorname){
        super(_colorname);
        this.Wid = _width;
        this.Hegh = _height;
    }
    set Wid(_width) {
        if(_width)this.#width=_width;
    }
    get Wid(){
    return this.#width;
    }
    set Hegh(_height) {
        if(_height)this.#height=_height;
    }
    get Hegh(){
    return this.#height;
    }


    getArea () {

        return `The area is ${this.#height*this.#width} and ${super.printColor()}`;

    }
    }
 
//  console.log(obj.getArea());
// let obj = new Rectangle();
// console.log(obj);
//create square class inherited from rectangle class


export class square extends Rectangle{
    constructor(_width, _height,_colorname){
        super(_width,_height,_colorname);

    }
    squareArea () {
        return `${this.Wid*this.Wid}`

    }
  }
 
