module.exports = function(app) {
  var Track = app.get('models').Track
  return function(req, res, next) {
    Track.find(function(err, tracks) {
      if (err) return next(404)
      res.json(tracks)
    })
  }
}