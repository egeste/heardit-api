module.exports = function(req, res, next) {
  res.json(req.data.track)
}