// 在js中全局作用域是window,在node中全局作用域是global;
/**
 * 标准输出 console.log() console.dir  
 * 错误输出 console.error("error") console.warn("warn")
 * 
 * 标准输出用1 代表  错误输出用2代表
 */
//默认有些属性是隐藏的
console.dir(Array.prototype,{showHidden:true})
//time 和 timeEnd 是一对，只有参数名字相同时才可以打出时间间隔
console.time('label')
for(var i=0;i<1000;i++){

}
console.timeEnd("label")

//断言，正确的是时候，不会把后面的信息抛出，只有错误的时候才抛出
console.assert(1+3===2,"计算错误")