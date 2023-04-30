const http = require('http');

const server = http.createServer((req,res) =>{
    if(req.url=='/')
     res.end("Welcom to home page")
    
    if(req.url=='/about')
      res.end("this is the about page");
    
    res.end(
        `
        <h1>Ooops</h1>
        <p>Page Not found</p>
        <a href='/'>Back Home</a>
        `
    )
})

server.listen(5000);