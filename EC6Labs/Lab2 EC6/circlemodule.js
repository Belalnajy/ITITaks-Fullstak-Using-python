import { shape } from "./shapemodule.js";
export class circle extends shape{
#radX;
#radY;
constructor(_radX, _radY,_colorname){
    super(_colorname);
    this.rax = _radX;
    this.ray = _radY;
}
set rax(_radX) {
    if(_radX)this.#radX=_radX;
}
get rax(){
return this.#radX;
}
set ray(_radY) {
    if(_radY)this.#radY=_radY;
}
get ray(){
return this.#radY;
}
CircleArea() {
    
    return`The area ${Math.PI*this.#radX*this.#radY} and ${super.printColor()}` 
    
}
} 

