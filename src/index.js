const http = require('http');

function handler(request, response){
    const { url, method } = request;
    const [ first, route, id] = url.split('/')
    request.queryString = { id }

    console.log(request.queryString);

    response.end()
}

http.createServer(handler).listen(3000);