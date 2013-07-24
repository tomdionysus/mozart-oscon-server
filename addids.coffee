sessions = require('./oscon.json')

i = 1 

sess = []

for a in sessions
  a.id = i++
  sess.push(a)

fs = require('fs');
fs.writeFile('./oscon2.json', JSON.stringify(sess))
