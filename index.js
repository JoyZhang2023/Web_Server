// import module
import http from "http";
import fs from "fs";

// use http method to create server and set default port value
http.createServer((req,res) => {
    const path = req.url;
    console.log(path);

    switch (path) {
        case '/':
            fs.readFile('home.html', (err,data)=>{
                if(err) {
                    return console.error(err);
                }
                res.writeHead(200, {"Content-Type" : "text/html"});
                res.write(data);
                return res.end();
            });
            break;
        case '/about':
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end("About Page");
            break;
        default:
            res.writeHead(404, {"Content-Type": "text/plain"});
            res.end("404 NOT FOUND");
            break;
    };
}).listen(process.env.PORT || 3000);