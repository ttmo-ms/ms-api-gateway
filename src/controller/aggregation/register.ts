import graphqlFields from 'graphql-fields'
import { ResultContext } from '../../middleware/middleware_result'
import { QueryInterval } from './common'
import { User } from './user'


interface Params extends QueryInterval {
}


const controller = (_: any, {}: Params, ctx: ResultContext, info: any): User => {
  ctx.middlewareResult = {
    code: 0,
    msg: 'ok',
  }
  return { id: '1', username: '123', homepage: 'homepage1' }
}

export default (..._: any) => controller(_[0], _[1], _[2], graphqlFields(_[3]))
