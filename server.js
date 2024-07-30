
const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    
    console.log("req made");
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let path='./app/';
    switch(req.url){
        case '/':
            path+='home.html';
            break;
        case '/about':
            path+='about.html';
            break;
        case '/contact':
            path+='contact.html';  
            break;
        default:
            path+='404.html';          
    }

    console.log(path);
        
        fs.readFile(path,(err,data)=>{
            if(err){
                console.log(err);
            }
            res.end(data);
        })
   
    
   
   
});
 server.listen(3000,'localhost',()=>{
    console.log("server iss listening on port 3000");
 });

