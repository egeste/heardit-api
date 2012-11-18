var Schema = require('mongoose').Schema
  , constants = require('./constants')

var Action = module.exports = new Schema({
  type: String,
  action: constants.mixed,
  _user_id: constants.oid,
  _timestamp: constants.date,
  _resource_id: constants.oid,
})