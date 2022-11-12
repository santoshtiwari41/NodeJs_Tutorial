const fs=require('fs');

// creating directory with path


 fs.mkdirSync('/home/santosh/Desktop/Nodejs/chapter_04_fsModule/callBackAPI/demo')
     

// creating directory without path

 fs.mkdirSync('/home/santosh/Desktop/Nodejs/chapter_04_fsModule/callBackAPI/demo/test',{recursive:true})

// reading directory

const files =fs.readdirSync('/home/santosh/Desktop/Nodejs/chapter_04_fsModule')
for(file of files){
    console.log(file);
}

//Remove directory

fs.rmdirSync('/home/santosh/Desktop/Nodejs/chapter_04_fsModule/callBackAPI/demo')

// creating and writing in the files

fs.writeFileSync('readme.txt','hello programmer')

//Read file

let data=fs.readFileSync('/home/santosh/Desktop/Nodejs/chapter_04_fsModule/callBackAPI/readme.txt','utf-8')
console.log(data);
// Append file

fs.appendFileSync('/home/santosh/Desktop/Nodejs/chapter_04_fsModule/callBackAPI/readme.txt',' hello santosh')

// copy file

fs.copyFileSync('/home/santosh/Desktop/Nodejs/chapter_04_fsModule/callBackAPI/readme.txt','copy.txt')

