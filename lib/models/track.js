var Schema = require('mongoose').Schema
  , constants = require('./constants')
  , highlight = require('./struct/highlight')
  , vote = require('./struct/vote')

var Track = module.exports = new Schema({
  title: {type: String, trim: true},
  artist: {type: String, trim: true},
  votes: [vote],
  genre: constants.oid,
  genres: [constants.vote],
  highlight: {start: Number, end: Number},
  highlights: [highlight],
  _soundcloud_id: Number,
  _submitted: constants.date
})

Track.methods.toString = function() {
  return this.artist + ' - ' + this.title
}