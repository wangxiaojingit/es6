//数组中常用的方法:
/*类数组转化成数组常用方法:
 1\Array.from  
 2\[...arg]

*/
//什么叫类数组?有索引,有长度.下面模拟一个类数组,我们转化一下

function fn(){
    console.log([...arguments]) //[1,2]
    console.log(Array.from(arguments))//[1,2]
}
fn(1,2)
//从上面的方法我们看到两方法都可以.但是有啥区别,哪个更好,我们模拟一个类数组再进行测试
let obj={0:"a",1:"b",length:2}
console.log(Array.from(obj));//['a','b'] 成功转成
console.log(...obj) //报错
//为啥会报错呢?函数里面的arguments我们通过打印和模拟的类数组进行对比 少了一个Symbol.iterator.
//所以在进行类数组转化数组的时候最好用Array.from

//下面我们额外完善一下模拟类数组用[...a]怎么也实现
let obj={0:"a",
1:"b",
length:2,
[Symbol.iterator]:function(){
    return {
        next(){
            value:11,
            
        }
    }
}
}


