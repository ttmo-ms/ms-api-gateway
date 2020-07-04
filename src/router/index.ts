import koa from 'koa'
import koaRouter from 'koa-router'

import aggregation from './aggregation'


const router = new koaRouter()


router
  .use('/aggregation', aggregation.routes())

export default (app: koa) => {
  app
    .use(router.routes())
    .use(router.allowedMethods())
}
