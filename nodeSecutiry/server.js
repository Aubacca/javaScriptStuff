'use strict';

var express = require('express');
var stormpath = require('express-stormpath');

var app = express();

var apiKey = {};
apiKey.id = '1LEFHKX14NOO2U8SB4W1HWVM7';
apiKey.secret = 'jGo3c5KtBOf3msajLHeDyYXDZXDVSv1XKgHfow4ncng';

app.use(stormpath.init(app, {
  client: {
    apiKey: {
      id: apiKey.id,
      secret: apiKey.secret
    }
  },
  application: {
    href: ''
  }
}));

app.get('/api/test', function(req, res) {
  console.log('req=', req);
  res.json({'response': '/api/test successfully called!'});
});
app.get('/api/test2', function(req, res) {
  res.json({'response': '/api/tes2t successfully called!'});
});

app.listen(3000);
console.log('Server started and listen on http://localhost:3000');