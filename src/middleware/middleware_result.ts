import { Next } from 'koa'
import { ExtendableContext } from 'koa'


interface MiddlewareResult {
  code: number
  msg?: string,
}

export interface ResultContext extends ExtendableContext {
  middlewareResult?: MiddlewareResult
}

const middlewareResult = async (ctx: ResultContext, next: Next) => {
  await next()
  if (ctx.middlewareResult) {
    ctx.body = {
      data: ctx.body.data,
      ...ctx.middlewareResult,
    }
  }
}


export default middlewareResult
