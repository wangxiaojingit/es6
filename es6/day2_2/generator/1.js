/**
 * generator 函数必须带一个标志*
 * generatro 必须先让函数执行，返回一迭代器。
 * yield 后面跟的是value 的值
 * yield 等号前面的是我们当前调用next传进来的值
 * 第一次调用next传值是无效的
 * 
 * 通常结合co库 npm install co
 */
function *fn(){
  console.log(1)
  let a= yield "zf";
  console.log("a:"+a);
  let b=yield "zf2";
  console.log("b"+b);
  return b

}

let t=fn();//返回一个迭代器
console.log(t.next("wxj1"));//{ value: 'zf', done: false }
console.log(t.next("wxj2"));
console.log(t.next("wxjc"));
console.log(t.next("wxjc2"));