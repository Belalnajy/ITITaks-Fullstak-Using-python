//define shape class 
export class shape {
    #colorname= "red";
    constructor(_colorname){
        this.color = _colorname;
    }
    set color(_colorname){
        if(_colorname)this.#colorname=_colorname;
    }
    get color(){
        return this.#colorname;
    }
    //define function that print color value
    printColor(){
       return `The color of this shape is ${this.#colorname}`;
    }

}
 //let obj = new shape('blue');
// console.log(obj);
 //console.log(obj.printColor())