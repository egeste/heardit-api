var Schema = require('mongoose').Schema
  , oid = exports.oid = Schema.Types.ObjectId
  , mixed = exports.mixed = Schema.Types.Mixed
  , date = exports.date = {type: Date, default: Date.now}
  , points = exports.points = {type: Number, min: 0, default: 0}