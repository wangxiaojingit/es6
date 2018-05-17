
/**
 * 有些人写的Promise then 里面即可以掉成功,也可以掉失败,两个同时调用,先调用谁就走谁,后者忽略.
 * 
 * 
 */


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
//解析返回值
function jiexiFn(promise2,x,resolve,reject){
   if(promise2==x){
       //promise2 和x 不能相等
       return reject(new TypeError("循环引用"))
   }else if(x!=null&&(typeof x=="object"||typeof x=="function")){
      //判断x是不是一个promise,如果它上面有一个then方法,并且是一个函数就是
      let called;
      try {
          let then=x.then;
          if( typeof then =="function"){
                new Promise(function(data){
                  console.log(data)
                },function(err){
                  console.log(err)
                })
             then.call(x,function(y){
                 if(called) return
                 called=true;
                //成功 走成功
                //y 可能还是一个promise
                jiexiFn(promise2,y,resolve,reject)//这个步骤不是很清楚
             },function(err){
                //失败 走失败
                if(called) return
                called=true;
                reject(err)
             })
          }else{
              resolve(x)
          }
      } catch (error) {
          reject(error)
      }

   }else{
       //说明是一个普通值
       resolve(x)
   }
}
MyPromise.prototype.then=function(success,err){
    let self=this;
    let promise2;
    if(self.status=="resolve"){
       //说明是成功态
       promise2=new MyPromise(function(resolve,reject){
          let x= success(self.resolveValue);
          jiexiFn(promise2,x,resolve,reject);
       })
       
    }
    if(self.status=="reject"){
      //说明是失败态
      promise2=new MyPromise(function(resolve,reject){
        let x=err(self.rejectValue);
        jiexiFn(promise2,x,resolve,reject);
      })
     
    }
    if(self.status=="pending"){
      //如果此时没有成功也没有失败,我们就把then里面传的函数存起来,等他状态转成成功/失败再执行
       promise2=new MyPromise(function(resolve,reject){
         this.resolveArr.push(function(){
            let x= success();
            jiexiFn(promise2,x,resolve,reject);
         });
         this.rejectArr.push(function(){
            let x= err();
            jiexiFn(promise2,x,resolve,reject);
         });
       })
      
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


