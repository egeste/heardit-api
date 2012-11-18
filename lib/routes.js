module.exports = function(app) {
  require('./routes/track')(app)
  app.all('*', function(err, req, res, next) {
    res.json(err.status, { error: err.message})
  })
}