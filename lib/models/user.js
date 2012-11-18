var Schema = require('mongoose').Schema
  , constants = require('./constants')
  , action = require('./action')

var User = module.exports = new Schema({
  name: {type: String, lowercase: true, trim: true},
  display_name: {type: String, trim: true},
  email: String,
  image: Buffer,
  points: constants.points,
  password: {type: String, lowercase: true, trim: true},
  active: Boolean,
  confirmed: Boolean,
  _actions: [action],
  _created: constants.date
})