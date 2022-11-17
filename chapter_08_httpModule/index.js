// http module
const http=require('http');
const fs=require('fs');
const path=require('path');

const app=http.createServer((req,res)=>{

   fs.readFile(path.join(__dirname,'index.html'),(err,content)=>{
       if(err){
           throw err;
       }
       res.end(content);
   })

})

const PORT=process.env.PORT ||3000;

app.listen((PORT),()=>{
    console.log(`listen on port ${PORT}`);
})