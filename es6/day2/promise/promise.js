let myPromise=require("./case1.js");
let f1=new myPromise(function(resolve,reject){
    reject(100);
    //resolve("success")
    //throw new Error("错误")
}).then(function(data){
    //成功的函数
    console.log(data)
},function(err){
    console.log(err)
})