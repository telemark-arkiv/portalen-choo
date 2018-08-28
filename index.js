var css = require('sheetify')
var choo = require('choo')

css('tachyons')

var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
}

app.use(require('./stores/auth'))
app.use(require('./stores/roles'))
app.use(require('./stores/search'))

app.route('/', require('./views/main'))
app.route('/search', require('./views/search'))
app.route('/api/login/*', require('./views/login'))
app.route('/*', require('./views/404'))

module.exports = app.mount('body')
