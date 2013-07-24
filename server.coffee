express = require 'express'

app = express()
app.use(express.bodyParser())
app.use(express.methodOverride())
app.use(app.router)
app.use(express.static('./public'))
app.use (req, res) ->
  res.sendfile("./public/index.html")

app.get '/sessions', (req, res) ->
  res.sendfile("./oscon.json")

port = process.env.PORT || 5000 
app.listen port
console.log "FOAAS Started on port #{port}"
