const fs=require('fs/promises');
const { clearScreenDown } = require('readline');

// creating the directory with full path

// async function makeDirectory(){
//     try{
//         await fs.mkdir('/home/santosh/Desktop/Nodejs/chapter_04_fsModule/promiseBasedAPI/demo')
//         console.log('directory created ....');
//         }catch(error){
//         console.log(error)
        
//         }
// }
// makeDirectory();


//creating directory without giving full path
// async function makeDirectory2(){
//     try{
//         await fs.mkdir('/home/santosh/Desktop/Nodejs/chapter_04_fsModule/promiseBasedAPI/demo/demo2',{recursive:true})
//         console.log('directory created ....');
//         }catch(error){
//         console.log(error)
        
//         }
// }
// makeDirectory2()


// reading the directory

// async function readDirectory(){
     
// try
// {
//     const files =await fs.readdir('/home/santosh/Desktop/Nodejs/chapter_04_fsModule');
//     for(const file of files)
//     {
//         console.log(file);
//     }
// }catch(error){
//     console.log(error);
// }

// }
// readDirectory();


    // async function removeDirectory(){
    //     try{
    //         await fs.rmdir('/home/santosh/Desktop/Nodejs/chapter_04_fsModule/promiseBasedAPI/demo')
    //     console.log('directory removed.....');
    //     }catch(error){
    //         console.log(error);
    //     }
    // }
    // removeDirectory();

    //create and write files

    // async function wirteFile(){
    //     try{
    //         await fs.writeFile('readme.txt','hello programmer');
    //         console.log('created....')
    //     }catch(error){
    //         console.log(error);
    //     }
    // }
    // wirteFile();

    // Read file

    // async function readFile(){
    //     try{
    //         let a=await fs.readFile('readme.txt','utf-8');
    //         console.log(a);
    //     }catch(error){
    //         console.log(error);
    //     }
    // }
    // readFile();

// Append the file

// async function appendFile(){
//     try{
//         await fs.appendFile('readme.txt','hello santosh')
//         console.log('appended');
//     }catch(error){
//         console.log(error);
//     }
// }
// appendFile();

// To copy the file

async function copyFile(){
    try{
        await fs.copyFile('readme.txt','/home/santosh/Desktop/Nodejs/chapter_04_fsModule/promiseBasedAPI/copy.txt');
    console.log('file copied')
    }catch(error)
    {
        console.log(error);
    }
}
copyFile();




