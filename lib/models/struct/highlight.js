var Schema = require('mongoose').Schema
  , constants = require('./../constants')

var Highlight = module.exports = new Schema({
  start: Number,
  end: Number,
  _user_id: constants.oid,
  _submitted: constants.date,
  _resource_id: constants.oid
})