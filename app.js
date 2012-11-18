var express = require('express')
  , app = module.exports = express()

// app.use(express.cookieParser())
// app.use(express.bodyParser())
app.use(require('./lib/middleware/normalize-api'))
app.use(require('./lib/middleware/request-data-hash'))

// Mixin our configuration
require('./lib/config')(app)

// Mixin our models
require('./lib/models')(app)

// Mixin our routes
require('./lib/routes')(app)