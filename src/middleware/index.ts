import koa from 'koa'
import koaBody from 'koa-body'

import middlewareResult from './middleware_result'


const body = koaBody()

export default (app: koa) => {
  app
    .use(body)
    .use(async (ctx, next) => {
      if (ctx.method === 'OPTIONS') {
        ctx.body = 200
      } else {
        await next()
      }
    })
    .use(middlewareResult)
  return app
}
