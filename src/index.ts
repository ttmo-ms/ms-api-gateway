import koa from 'koa'

import loadMiddleware from './middleware'
import loadRouter from './router'


const app = new koa()

loadMiddleware(app)
loadRouter(app)

export default app

app
  .listen(8000)
