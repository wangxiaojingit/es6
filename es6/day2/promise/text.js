var p=new Promise(function(resolve,reject){
      return  new Promise(function(resolve,reject){
           resolve(100)
      })
}).then(function(data){
    console.log(data);
    console.log(1)
},function(err){
    console.log(err);
    console.log("err")
})

