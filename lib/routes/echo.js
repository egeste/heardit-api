var _ = require('underscore')

module.exports = function(req, res, next) {
  res.json({
    body: req.body,
    params: req.params
  })
}