var HTTPError = require('./../../http-errors')

module.exports = function(app) {
  var Track = app.get('models').Track
  return function(req, res, next, id) {
    Track.findById(req.params.track, function(err, track) {
      if (err) return next(new HTTPError[404])
      if (!track) return next(new HTTPError[500])
      req.data.track = track
      next()
    })
  }
}