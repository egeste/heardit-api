var mongoose = require('mongoose')

module.exports = function(app) {
  var conf = app.get('config')
    , db = app.get('db') || mongoose.createConnection(conf.db_url)

  if (!app.get('db'))
    app.set('db', db)

  return db
}