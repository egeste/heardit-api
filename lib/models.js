var _ = require('underscore')
  , mongoose = require('mongoose')

var models = {
  Vote: mongoose.model('vote', require('./models/struct/vote')),
  Highlight: mongoose.model('highlight', require('./models/struct/highlight'))
}

module.exports = function(app) {
  var db = require('./db')(app)

  _(models).extend({
    User: db.model('users', require('./models/user')),
    Genre: db.model('genres', require('./models/genre')),
    Track: db.model('tracks', require('./models/track')),
    Action: db.model('actions', require('./models/action')),
    Comment: db.model('comments', require('./models/comment'))
  })

  if (!app.get('models'))
    app.set('models', models)

  return models
}