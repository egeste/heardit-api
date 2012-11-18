var Schema = require('mongoose').Schema
  , constants = require('./constants')
  , vote = require('./struct/vote')

var Comment = module.exports = new Schema({
  text: {type: String, trim: true},
  votes: [vote],
  _user_id: constants.oid,
  _resource_id: constants.oid,
  _submitted: constants.date
})