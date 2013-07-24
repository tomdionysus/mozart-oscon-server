express = require 'express'

app = express()
app.use(express.bodyParser())
app.use(express.methodOverride())
app.use(app.router)
app.use(express.static('./public'))
app.use (req, res) ->
  res.sendfile("./public/index.html")

app.options "*", (req, res) ->
  res.header 'Access-Control-Allow-Origin', '*'
  res.header 'Access-Control-Allow-Methods', 'GET, OPTIONS'
  res.header 'Access-Control-Allow-Headers', 'Content-Type'
  res.end()

app.get '/sessions', (req, res) ->
  res.header 'Access-Control-Allow-Origin', '*'
  res.header 'Access-Control-Allow-Methods', 'GET, OPTIONS'
  res.header 'Access-Control-Allow-Headers', 'Content-Type'
  res.sendfile("./oscon.json")

port = process.env.PORT || 5000 
app.listen port
console.log "OSCONSessions Started on port #{port}"
