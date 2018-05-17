
//promise 的then 实现链式调用
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
    let promise2;
    if(self.status=="resolve"){
       //说明是成功态
       promise2=new MyPromise(function(resolve,reject){
         success(self.resolveValue);
       })
       
    }
    if(self.status=="reject"){
      //说明是失败态
      promise2=new MyPromise(function(resolve,reject){
        err(self.rejectValue)
      })
     
    }
    if(self.status=="pending"){
      //如果此时没有成功也没有失败,我们就把then里面传的函数存起来,等他状态转成成功/失败再执行
       promise2=new MyPromise(function(resolve,reject){
         this.resolveArr.push(success);
         this.rejectArr.push(err);
       })
      
    }
    return promise2
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


