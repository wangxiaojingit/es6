let f1=new Promise(function(resolve,reject){
    reject(100)
}).then(function(data){
   
},function(err){
    console.log(err)
}).then(function(data){
    console.log(data);
},function(err){
    console.log(err)
})