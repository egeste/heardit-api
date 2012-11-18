module.exports = function(req, res, next) {
  req.data.user.update(req.body)
}