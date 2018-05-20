var p1=new Promise(function(resolve,reject){
     console.log(1)
})
p1.then(function(data){
   console.log(3)
},function(){
    console.log(4)
})
