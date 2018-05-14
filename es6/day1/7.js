//数组常用的方法
/**
 * reduce
 * filter
 * 
 * 
 */
 //数组求和
 let ary=[1,2,3,4,5];
 let result=ary.reduce((pre,next,index,item)=>{
   return pre+next
 })
 console.log(result) //15  
 /**
  * pre 代表第一项,next 代表第二项,index 代表当前遍历到的索引,item 代表数组本身
    每次遍历完成后,都会把函数返回值当成下次的pre
    
  *
  */

  //求总价
  let obj=[{"price":1.5,"count":2},{"price":2.5,"count":4},{"price":3.5,"count":2}];
  let result=obj.reduce((pre,next,index,item)=>{
      console.log(pre,next,index,item)
      return pre+next.price*next.count;
  },0) //默认首次遍历pre=0 开始
  console.log(result)

 

  //求平均值
  let obj=[{"price":1.5,"count":2},{"price":2.5,"count":4},{"price":3.5,"count":2}];
  let result=obj.reduce((pre,next,index,item)=>{
      if(index==obj.length-1){
         return (pre+next.price*next.count)/obj.length;
      }
      return pre+next.price*next.count;
  },0) //默认首次遍历pre=0 开始
  
  //filter 过滤 返回一个符合条件的新数组
  let ary=[1,2,3];
  let su=ary.filter((item)=>{
      return item>1
  })
  console.log(su)
  //map 映射  也是返回一个新数组

  let ary=[1,2,3];
  let su=ary.map((item,index)=>{
     return `<li>item</li>`
  })
  console.log(su) //[ '<li>item</li>', '<li>item</li>', '<li>item</li>' ]
  //some 和every 返回的是布尔值,some 是找到true(符合条件的就停止),every 是找到是false(有一个不符合条件就停止)
  let ary=[1,2,3];
  let su=ary.some((item,index)=>{
      return item==1
  })
  console.log(su)
  //every
  let ary=[4,5,6];
  let c=ary.every((item,index)=>{
      return item>6
  })
  console.log(c)
 //find 找到一个符合条件的那一项停止,找不到返回undefined
 let ary=[{"name":1},{"name":2}];
 let key=1
 let c=ary.find((item,index)=>{
   return index==key;
 })
 console.log(c)
 //includes(es7) 和some 基本一样,但是includes 不能写条件判断,只能写的是具体的某一项(看是否包含那项)
 let ary=[1,2,33];
 let c=ary.includes(33);
 console.log(c);

 //Object.assign(obj1,obj2);对象的合并,也是浅拷贝
 let obj1={"name":"lili"};
 let obj2={"age":12};
 console.log(Object.assign(obj1,obj2))
 //Object.setPrototypeOf
 let obj1={"name":"lili"};
 let obj2={"age":18};
 //如果在obj2里面想要添加obj1的name属性,我们可以改变原型链
 obj2.__proto__=obj1;
 console.log(obj2.name);
 //Object.setPrototypeOf(obj2,obj1) 效果等同于上面的效果
 let obj1={"name":"lili"};
 let obj2={"age":18};
 Object.setPrototypeOf(obj2,obj1);
 console.log(obj2.name);

//reduce 的原理实现


Array.prototype.myReduce=function(fn,pre){
  for(var i=0;i<this.length;i++){
      if(typeof pre=="undefined"){
         fn(this[i],this[i+1],i+1,this)
      }else{
         fn(pre,this[i],i,this)
      }
  }
}

let ary=[{"price":1,"count":1},{"price":2,"count":2}];
ary.myReduce((pre,next,index,item)=>{
   return pre+next.price*next.count;
},0)