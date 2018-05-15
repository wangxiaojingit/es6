let p1=new Promise(function(resolve,reject){
   resolve(123)
})
p1.then(function(data){
    throw new Error("出错")
})