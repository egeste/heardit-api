var Schema = require('mongoose').Schema
  , constants = require('./../constants')

var Vote = module.exports = new Schema({
  vote: {type: Number, min: -1, max: 1, default: 0},
  points: constants.points,
  _user_id: constants.oid,
  _resource_id: constants.oid,
  _submitted: constants.date
})