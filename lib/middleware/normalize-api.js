module.exports = function(req, res, next) {
  if(req.host.indexOf('api.') === 0
    && req.url.indexOf('/api/') !== 0) {
    req.url = '/api' + req.url
  }
  next()
}