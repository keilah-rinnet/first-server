console.log('Welcome to the node.js server')

const http = require('http')

const server = http.createServer((req,res) => {
    res.writeHead(200, {'content-type': 'text/plain'})
    res.end(('hello server'))
})

const PORT = 5000
server.listen(PORT,() =>{
    console.log(`server is running on port ${PORT}`)
})


