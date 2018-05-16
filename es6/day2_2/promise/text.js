let f=new Promise(function(resolve,reject){
    throw new Error("出错")
})
f.then(function(data){
   console.log(data)
},function(err){
    console.log(1)
    console.log(err)
})