//generator  生成器 可以生成迭代器
//generator  也是一个函数,和普通函数一样,不过它有一个暂停功能
function read(arrs){
   let index=0 ;
   let len=arrs.length;
   return{
       next(){
           let obj= {done:index>len-1?true:false,value:arrs[index]}
           index++;
           return obj;
       }
   }
}



let it=read(["vue","react","angular"]);
let flag=false
console.log(it.next());
console.log(it.next());
console.log(it.next());
do{
    let {done,value}=it.next();
    flag=done;
    console.log(done,value)
}while(!flag)

//模拟generator

function * read(arrs){ //generator 函数可以配yield 产出,(暂停)
   yield arrs[0];
   yield arrs[1];
   yield arrs[2];
   yield arrs[3];
}
let it=read(["vue","react","angular"]);
console.log(it.next());
console.log(it.next())
console.log(it.next())
console.log(it.next())