import koa from 'koa'
import koaBody from 'koa-body'

import middlewareResult from './middleware_result'


const body = koaBody()

export default (app: koa) => {
  app
    .use(body)
    .use(middlewareResult)
  return app
}
