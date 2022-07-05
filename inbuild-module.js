

// os
// const os=require('os')
// const info=os.userInfo()
// console.log(info);

//  const obj={
//    memory:os.freemem(),
//     total:os.totalmem(),
//     version:os.version(),
//     some:os.cpus(),
//     some1:os.getPriority(),
//     plateform1:os.platform()


//  }
//  console.log(obj.some1);




//path

// const path=require('path')

// const  base=path.join('/dummytext','dummytext2','text.text');
// console.log(path.basename(base));
// console.log(path.parse(base));
// console.log(path.extname(base));
// console.log(path.resolve(__dirname,base))





//fs
    // const fs=require('fs')

    // const {readFileSync,writeFileSync}=require('fs') //alternative
    //   with sync
    //   const read=fs.readFileSync('./text1.text','utf8')
    //   const write=fs.writeFileSync('./result.text',`write from here: ${read}` , {flag:'a'})
    //     console.log(read);



  // with async
    // const read= fs.readFile('./text1.text','utf8', (err ,result)=>{
    //   if (err) {
    //     console.log("cant find file");
    //   }
    //   const store = result;

    //   fs.writeFile("./result.text", `'hello world' ${store}`, (err, result) => {
    //     if (err) {
    //       console.log("cand write try again" + err);
    //     } else
    //      return result
    //   });
    // })
    // //copy
    // fs.copyFile('text1.text','text2.text',(err,result)=>{
    //     if(err){
    //         return err
    //     }
    //     return(result)
    // })
    // // delete file
    // fs.unlink('text1.text',(err,result)=>{
    //     if(err){
    //         return err
    //     }
    //     return(result)
    // })



//http

  const http= require('http')
  const server =http.createServer((req, res)=>{

    if(req.url==='/'){
        res.end('<h1>Welcome to home Page</h1>')
    }else if(req.url==='/about'){
        res.end("<h1>Welcome to About Page</h1>");
    }else{
       res.end(`
       <h1>Opps!!!</h1>
       <p>Try again can't find your page</p>
       <a href='/'>Go to home</a> 

       `)
    }
   
  })
   const port =process.env.port || 5000;
  server.listen(port, ()=> console.log(`running on port ${port}`))

//email


