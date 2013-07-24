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
  res.header 'Access-Control-Allow-Credentials', true
  # try: 'POST, GET, PUT, DELETE, OPTIONS'
  res.header 'Access-Control-Allow-Methods', 'GET, OPTIONS'
  # try: 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept'
  res.header 'Access-Control-Allow-Headers', 'Content-Type'
  res.end()

app.get '/sessions', (req, res) ->
  res.sendfile("./oscon.json")

port = process.env.PORT || 5000 
app.listen port
console.log "OSCONSessions Started on port #{port}"
