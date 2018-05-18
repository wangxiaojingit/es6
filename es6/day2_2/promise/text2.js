var p1=new Promise(function(resolve,reject){
     resolve(1)
})
var p2=new Promise(function(resolve,reject){
    reject(2)
})
var p3=new Promise(function(resolve,reject){
    resolve(3)
})
Promise.all([p1,p2,p3]).then(function(data){
      console.log(data)
    },function(err){
      console.log(err)
})