module.exports = function(app) {
  var config = {
    env: 'dev', // dev, stage, prod
    db_url: 'mongodb://localhost/test'
  }
  app.set('config', config)
  return config
}