'use strict';

var express = require('express');
var app = express();

app.set("port", process.env.PORT || 3000);

app.get("/", function(req, res) {
	var language = req.headers["accept-language"].match(/(\w)+-(\w)+/);
	var software = req.headers["user-agent"].match(/\(([^)]+)\)/);
	
	res.send({
		ipaddress: req.ip,
		language: language[0],
		software: software[1]
	})
});

app.listen(app.get("port"), function(){
	console.log("app running on port 3000");
})
