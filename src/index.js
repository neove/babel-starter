const a = ()=>{return 123;};
var b = Object.assign({},{name:123});
var c = {...b}
const d = [1,2,3];
const e = [...d];
class F{
    constructor(){
        this.name = 123;
    }
    sayName(){
        console.log(this.name)
    }
}