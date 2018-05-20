//async await  需要配合使用
// 疑问 不知道为啥读取文件失败了，为啥还走成功
let bluebird=require("bluebird");
let fs=require("fs");
let read=bluebird.promisify(fs.readFile);
async function fn(){
    try {
        let content1 = await read("./ES6/day2_2/async/11.txt",'utf8') 
        let content2 = await read("./ES6/day2_2/async/2.txt","utf8");
        return content2
     
    } catch (error) {
        //如果读取出错
        return error
    }
}
fn().then(function(data){
   console.log("flag1"+data)
},function(err){
  console.log("flag:"+err)
})