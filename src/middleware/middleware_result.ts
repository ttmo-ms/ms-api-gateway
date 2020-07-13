import { Next } from 'koa'
import { ExtendableContext } from 'koa'


interface ResponseEntity {
  code: number
  msg?: string,
}

export interface ResultContext extends ExtendableContext {
  responseEntity: (code: number, msg: string) => void
  responseEntityData?: ResponseEntity
}

const middlewareResult = async (ctx: ResultContext, next: Next) => {
  ctx.responseEntity = function (code: number, msg: string) {
    this.responseEntityData = { code, msg }
  }

  await next()

  if (ctx.responseEntityData) {
    ctx.body = {
      data: ctx.body.data,
      ...ctx.responseEntityData,
    }
  }
}


export default middlewareResult
