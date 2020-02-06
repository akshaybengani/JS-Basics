// Require a inbuilt function which is used to add up modules in this file
// So we just imported a http package in built in global scope
const http = require('http');

// So here we created a function which takes two values request and response
const server = http.createServer((req,res) => {
    
    const url = req.url;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        // The form action goes with POST method which is already encrpted 
        res.write('<body><form action="/message" method="POST"><input type = "text" name="My message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        // Here if we dont use return then the server will process code furthur and that's what we dont want
        return res.end();
    }

    // We are printing these req values
    console.log(req.url, req.method, req.headers);
    // This will quit the process event loop when you access the server.
    //process.exit();
    // So here when we get a request we get into this server method and now its our time to send a response
    // So Content-Type is what a web browser understands and the data type is text/html
    res.setHeader('Content-Type','text/html');
    res.write("<html><head><title>MyFirstPage</title></head><body><h1> Hello From Node");
    res.write("</h1></body</html>");
    // When we want to stop writing we need to use end method
    res.end();
    // Now if you will write again you will get an error
    //! res.write();
});

// This will start a process where nodejs will keep this running for incoming request
// This takes port and thats it
server.listen(3000);
