//reduce 的实现

Array.prototype.myReduce=function(fn,prev){
    for(var i=0;i<this.length;i++){
        if(typeof prev=="undefined"){
           prev= fn(this[i],this[i+1],index,this)
        }else{
           prev= fn(prev,this[i],i,this)
        }
    }
    return prev;
   
}

let ary=[{"price":1,"count":1},{"price":2,"count":1}]
ary.myReduce(function(pre,next,index,item){
   return pre+next.price*next.count;
},0)