'use strict';

var express = require("express");
var http = require("http");
var app = express();

app.get("*", function(request, response) {
    response.writeHead(200, { "Content-Type": "application/json" });
    var obj = {
        'ip': request.headers["x-forwarded-for"],
        'language': request.headers["accept-language"].slice(0,5),
        'user-agent': request.headers["user-agent"]
    };
    
    response.end(JSON.stringify(obj));
});

http.createServer(app).listen(process.env.PORT);