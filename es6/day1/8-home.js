//继承
function Parent(){
    this.name="parent"
}

Parent.prototype.smoking=function(){
    console.log("吸烟")
}
function Child(){
    
}
//现在想要让Child 继承Parent上面所有的私有和公有属性
Child.prototype=new Parent();
let child=new Child();
console.log(child.name);//parent 
child.smoking();//吸烟
/*想要一个A类继承另一B类，继承私有和公有，可以让A.prototype=new B()
*让A类的prototype 指向B类的一个实例。
*但是有一个问题，如果A类中的私有属性和B类的私有属性重名，会先走A的私有
*/

//如果只实现Child 类继承Parent 的公有属性
function Parent(){
    this.name="parent"
}

Parent.prototype.smoking=function(){
    console.log("吸烟")
}
function Child(){
    
}
/* 不推荐 对比下面的Object.create()的实现原理，我们知道多了一个
fn，可以设置constructor 的指向
Child.prototype=Parent.prototype;
let child=new Child;
console.log(child.name)//undefined
child.smoking()
*/
//Object.create()的实现原理
Object.prototype.myCreate=function(parentprototype,obj){
    function Fn(){};
    Fn.prototype=parentprototype;
    Fn
    let fn=new Fn();
    fn.constructor=obj.constructor.value
    return fn;

}
Child.prototype=Object.create(Parent.prototype,{constructor:{value:Child}});
let child=new Child;
console.log(child.name)//undefined
child.smoking();
console.log(child.constructor)
