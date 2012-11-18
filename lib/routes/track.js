module.exports = function(app) {
  app.param('track', require('./track/track')(app))
  app.get('/api/tracks', require('./track/index')(app))
  app.get('/api/track/:track', require('./track/read'))
  // app.put('/api/track/:track', require('./track/update'))
  // app.post('/api/track/:track', require('./track/create'))
  // app.delete('/api/track/:track', require('./track/destroy'))
}