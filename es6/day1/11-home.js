//es6 类
class Parent {
   constructor(){
       this.name="zf"
   }
   smoking(){
     return "烟"
   }
}
class Child extends Parent {
    
}
let child=new Child();
console.log(child.name)//"zf"
console.log(child.smoking())//"烟"
//以上说明es6 里面的extends 继承私有和公有
class Parent {
    constructor(name){
        this.name=name;
    }
    smoking(){
      return "烟"
    }
 }
 class Child extends Parent {
     constructor(name,age){
         super(name);//当子类用了extends的时候，并且子类中有constructor需要用super()
         //super()相当于Parent.call(Child)
         this.age=age;
     }
 }
 let child=new Child("xiaojin","18");
 console.log(child.age)
 console.log(child.name)
 //extends 继承公有和私有
 class Parent {
    constructor(){
        this.name='zf';
    }
    smoking(){
      return "烟"
    }
 }
 class Child extends Parent {
     constructor(name,age){
        super();
         this.age=age;
     }
 }
 let child=new Child('ff',18);
 console.log(child.name)
