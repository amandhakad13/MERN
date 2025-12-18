const http = require("http");

const server = http.createServer((req, res) => {
    // res.end("Welcome to node Js");

    if(req.url === "/") {
        res.end("Welcome to node Js");
    }
    else if(req.url === "/contact") {
        res.end("This is our contact page");
    }
    else if(req.url === "/about") {
        res.end("This is our about page");
    }
    else {
        res.end("Error: Page not found");
    }
});

server.listen(4000, () => {
    console.log("I will listen at port no 4000");
});