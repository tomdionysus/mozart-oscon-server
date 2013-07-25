sessions = require('./oscon_orig.json')
moment = require('moment')

i = 1 

sess = []

for a in sessions
  a.id = i++
  a.begin = moment(a['dtstart;tzid=us/pacific'],'YYYYMMDDTHHmmss').format('d MMM h:mm a')
  a.end = moment(a['dtend;tzid=us/pacific'],'YYYYMMDDTHHmmss').format('d MMM h:mm a')
  a.dtstart = a['dtstart;tzid=us/pacific']
  a.dtend = a['dtend;tzid=us/pacific']
  delete a['dtstart;tzid=us/pacific']
  delete a['dtend;tzid=us/pacific']
  sess.push(a)

fs = require('fs');
fs.writeFile('./oscon2.json', JSON.stringify(sess, undefined, 2))
