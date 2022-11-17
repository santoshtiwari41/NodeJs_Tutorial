const fs=require('fs');

// creating directory with path


 fs.mkdir('/home/santosh/Desktop/Nodejs/chapter_04_fsModule/callBackAPI/demo',(error)=>{
     if(error)throw error;
     console.log('directory created');
 })

// creating directory wothout path

 fs.mkdir('/home/santosh/Desktop/Nodejs/chapter_04_fsModule/callBackAPI/demo/test',{recursive:true},(error)=>{
    if(error)throw error;
    console.log('directory created');
})

// reading directory

fs.readdir('/home/santosh/Desktop/Nodejs/chapter_04_fsModule',(error,files)=>{
    if(error) throw error;
    for(file of files){
        console.log(file);
    }
})

//Remove directory

fs.rmdir('/home/santosh/Desktop/Nodejs/chapter_04_fsModule/callBackAPI/demo',(error)=>{
    if(error) throw error;
    console.log('removed.....');
})

// creating and writing in the files

fs.writeFile('readme.txt','hello programmer',(error)=>{
    if(error) throw error;
    console.log('created....');
})

//Read file

fs.readFile('/home/santosh/Desktop/Nodejs/chapter_04_fsModule/callBackAPI/readme.txt','utf-8',(error,data)=>{
    if(error) throw error;
    console.log(data);
})

// Append file

fs.appendFile('/home/santosh/Desktop/Nodejs/chapter_04_fsModule/callBackAPI/readme.txt',' hello santosh',(error)=>{
    if(error) throw error;
    console.log('appended....')
})

// copy file

fs.copyFile('/home/santosh/Desktop/Nodejs/chapter_04_fsModule/callBackAPI/readme.txt','copy.txt',(error)=>{
    if(error) throw error;
    console.log('copied....')
})

