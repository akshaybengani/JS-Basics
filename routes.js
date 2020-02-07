
const fs = require('fs');

const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        // The form action goes with POST method which is already encrpted 
        res.write('<body><form action="/message" method="POST"><input type = "text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        // Here if we dont use return then the server will process code furthur and that's what we dont want
        return res.end();
    }    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, () => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }

    // We are printing these req values
    console.log(req.url, req.method, req.headers);
    // This will quit the process event loop when you access the server.
    //process.exit();
    // So here when we get a request we get into this server method and now its our time to send a response
    // So Content-Type is what a web browser understands and the data type is text/html
    res.setHeader('Content-Type', 'text/html');
    res.write("<html><head><title>MyFirstPage</title></head><body><h1> Hello From Node");
    res.write("</h1></body</html>");
    // When we want to stop writing we need to use end method
    res.end();
    // Now if you will write again you will get an error
    //! res.write();

};
// This is a global access
module.exports = { 
  handler:  requestHandler,
  someText: "Some Hard Code text"
}


