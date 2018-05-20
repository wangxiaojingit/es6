
/**
 * Promise.race([a,b]);
 * 数组中只要一个promise执行成功就算成功，一个失败就算失败
 * 
 */
/*
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
//MyPromise 的静态属性all方法
MyPromise.all=function(promises){
    let arr=[],index=0;
   return new MyPromise(function(resolve,reject){
       for(let i=0;i<promises.length;i++){
           promises[i].then(function(data){
              arr[i]=data;
              index++;
              if(index==promises.length){
                 resolve(arr);
              }
              
           },reject);

          // promises[i].then(function(data){},reject)
       }
   })
}
MyPromise.race=function(promises){
   return new MyPromise(function(resolve,reject){
       for(let i=0;i<promises.length;i++){
            promises[i].then(resolve,reject)
       }
   })
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
    //如果没有传success函数就默认给它一个函数,并且把上次执行的值返回
    success=typeof success =="function"?success:(val)=>val;
    err=typeof err=="function"?err:(err)=>{ throw error}
    //fangzhi
    if(self.status=="resolve"){
       //说明是成功态
       promise2=new MyPromise(function(resolve,reject){
          try {
            let x= success(self.resolveValue);
            jiexiFn(promise2,x,resolve,reject);
          } catch (error) {
              reject(error)
          } 
          
       })
       
    }
    if(self.status=="reject"){
      //说明是失败态
      promise2=new MyPromise(function(resolve,reject){
          try {
            let x=err(self.rejectValue);
            jiexiFn(promise2,x,resolve,reject);
          } catch (error) {
             reject(error) 
          }
        
      })
     
    }
    if(self.status=="pending"){
      //如果此时没有成功也没有失败,我们就把then里面传的函数存起来,等他状态转成成功/失败再执行
       promise2=new MyPromise(function(resolve,reject){
         self.resolveArr.push(function(){
             try {
                let x= success();
                jiexiFn(promise2,x,resolve,reject);
             } catch (error) {
                reject(error) 
             }
            
         });
         self.rejectArr.push(function(){
             try {
                let x= err();
                jiexiFn(promise2,x,resolve,reject);
             } catch (error) {
                reject(error) 
             }
            
         });
       })
      
    }
}
 //增加catch 方法
MyPromise.prototype.catch=function(callback){
   return this.then(null,callback);
}
let f=new MyPromise(function(resolve,reject){
     resolve(100)
   
});
let f2=new MyPromise(function(resolve,reject){
    reject(300)
  
});
let f3=new MyPromise(function(resolve,reject){
    resolve(100)
  
});

MyPromise.race([f,f2,f3]).then(function(data){
   console.log(data)
},function(err){
   console.log(err)
})
