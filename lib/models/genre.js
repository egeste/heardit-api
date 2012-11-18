var Schema = require('mongoose').Schema
  , constants = require('./constants')

var Genre = module.exports = new Schema({
  name: {type: String, lowercase: true, trim: true},
  _user_id: constants.oid,
  _submitted: constants.date
})