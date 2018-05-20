//模块可以三大类
/**
 * 1:核心模块/内置模块
 * 2：文件模块，自定义模块，我们自己写的模块
 * 3：第三方模块，先不考虑第三方模块
 * 
 * 内置路径：path
 */

let fs=require("fs")
//读取某个文件：fs.readFile() fs.readFileSync()
//判断某个文件是否存在，文件找到了，就不会发生发生任何事情，如果找不到
//就会提示报错
let res=fs.accessSync("./es6/day3_node/module/1.js");
console.log(res);
//解决路径的问题
let path=require("path");
console.log(path.resolve("a"));
console.log(__dirname);//当前运行文件的文件夹名字
console.log(path.resolve(__dirname,"a"))
console.log(path.join("a","b"))//a\b
//path.resolve 是解析绝对路径，后面可跟多个参数，进行拼接
//path.join()只是把里面的参数简单进行拼接，如果要实现上面的可以
console.log(path.join(__dirname,"a"))
//-----获取基本路径
let path=require("path");
console.log(path.basename("1.js",".js"))//1 ---除了.js的基本名字
console.log(path.extname("jquery.min.js"))//.js 获取后缀名字（最后一个）
console.log(path.delimiter)//环境变量分隔符，window是“；” linux是：
console.log(path.posix.delimiter)//linux 环境变量下的分隔符
console.log(path.sep)//window\ linux /
//-----vm 虚拟机模块

let vm=require("vm")
var a=1;
eval("console.log(a)") //1,eval执行依赖于外面的环境，通过向上查找到a;
//vm.runInContext 和eval 类似，但是前者是执行一个封闭的空间，全新的

vm.runInContext("console.log(a)")//a isnot defined