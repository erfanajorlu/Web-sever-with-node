const http = require('http');


const PORT = 3000;

const server = http.createServer((req , res) => {
    res.writeHead(200 , {
        'Content-Type' : 'text/plain',
    });
    res.end('Hello! Sir Isaac Newton is your friend!'); 
})

server.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`);
}); 