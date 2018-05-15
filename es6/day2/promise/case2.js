function myPromise(excutor){
    let self=this;
    self.status="pending";
    self.resolveValue=undefined;//默认成功的值
    self.rejectValue=undefined;//默认失败的值
    function resolve(resolveValue){ //这是成功的状态
       if(self.status=="pending"){
           self.status="resolve";
           self.resolveValue=resolveValue
       }
    }
    function reject(rejectValue){  //这是失败的状态
        if(self.stutus=="pending"){
            self.status="reject";
            self.rejectValue=rejectValue
        }
    }
    excutor(resolve,reject)
}
myPromise.prototype.then=function(onsuccess,onerror){
   let self=this;
   if(self.status=="resolve"){
      //判断状态,如果此时的状态是成功的
      onsuccess(self.resolveValue)
   }
   if(self.status=="reject"){
      onerror(self.rejectValue)
   }
}

let f1=new myPromise(function(resolve,reject){
       resolve(100)
}).then(function(data){
   console.log(data);
},function(err){
   console.log(err);
})

module.exports=myPromise