const https = require('https')
const fs = require("fs");
const Koa = require('koa')
const app = new Koa()
const withConnect = require('./connection')
const withRouter = require('./router')
const withMiddlewares = require('./middlewares')
const cors = require('@koa/cors');


///etc/letsencrypt/live/cherryblog.site/
const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/managment.cherryblog.site/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/managment.cherryblog.site/fullchain.pem')
};

app.use(cors())
app.config = require('./config')
app.model = require('./models')
app.controller = require('./controller')(app)

withConnect(app)('mongodb')
withMiddlewares(app)
withRouter(app)

https.createServer(options, app.callback()).listen(app.config.port)