
//初步封装promise
function MyPromise(excture){
  let self=this;
  self.status="pending";
  self.resolveValue=undefined;
  self.rejectValue=undefined; 
  self.resolveArr=[];
  self.rejectArr=[]; 
  function resolve(resolveValue){
     if(self.status=="pending"){
        self.status="resolve";
        self.resolveValue=resolveValue;
        self.resolveArr.forEach(function(item){
           item(self.rejectValue)
        })
        
     }
  }  
  function reject(rejectValue){
      if(self.status=="pending"){
         self.status="reject";
         self.rejectValue=rejectValue;
         self.resolveArr.forEach(function(item){
            item(self.rejectValue)
         })
      }
  }
  excture(resolve,reject)
}
MyPromise.prototype.then=function(success,err){
    let self=this;
    if(self.status=="resolve"){
       //说明是成功态
       success(self.resolveValue);
       
    }
    if(self.status=="reject"){
      //说明是失败态
      err(self.rejectValue)
    }
    if(self.status=="pending"){
      //如果此时没有成功也没有失败,我们就把then里面传的函数存起来,等他状态转成成功/失败再执行
       this.resolveArr.push(success);
       this.rejectArr.push(err);
    }
}

let f=new MyPromise(function(resolve,reject){
    window.setTimeout(function(){
        reject(100);
    },1000)
   
});
f.then(function(data){
    console.log(data)
},function(err){
    console.log(err)
})
;f.then(function(data){
    console.log(data)
},function(err){
    console.log(err)
})


