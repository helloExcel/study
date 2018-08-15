var fs = require('fs')

fs.readFile('info.txt',function(err,data){
    if (err) {
        console.log(`获取文件出错:${err}`);
    }else{
        console.log(`info,txt的内容为:${data}`);
    }
})

console.log('node.js为异步操作');