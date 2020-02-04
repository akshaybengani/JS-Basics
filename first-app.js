console.log('Hello from NodeJS');

// fs over here is used to access file system
const fs = require('fs');

// Using writeFileSync we can write data in files
fs.writeFileSync('hello.txt', 'Hello from NodeJS');

/*
    JavaScript on the Server
    Client Browser => Sends a Request to a URL => Reach to a server which execute some code 
    process and sends HTML code to client.
    On Server we connect Database, Authentication, Input Validation, Business Logic everything 
    is done there. The user dont see and the process takes time to process we do on server.

    NodeJS is not maint for browser, its a javascript runtime we can run any js code on any device
    NodeJS we use it to run a server, we also write server by yourself with NodeJS, While in PHP
    They use apache and other stuff for running servers and everything else.

    Alternatives to NodeJS, is Python, ASP.NET, Ruby on Rails, PHP with lervo, vanilla php etc
    The Huge Advantage of NodeJS is we use JS for everything from Front end to microservices and serve backend
    NodeJS is trending fast efficient and can be used for running processing large number of data easily.

    How to get the most out of the course
    ======================================
    Watch the videos in your own speed
    Jump back to older sections if needed

    The REPL
    R => Read => Read User Input
    E => Eval => Evaluate User Input
    P => Print => Print output(result)
    L => Loop => Wait for new input


*/