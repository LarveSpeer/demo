var http = require("http")
var config = require("./config.js")
var express = require("express")
var app = express()

var larveSpeer = require("LarveSpeer")(config)

app.use("/", larveSpeer)



var server = http.createServer(app)

server.listen(config.network.port, config.network.address)
server.on('listening', function() {
    console.log('Express server started on at %s:%s', server.address().address, server.address().port)
})
