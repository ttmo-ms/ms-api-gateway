import graphqlFields from 'graphql-fields'
import { ResultContext } from '../../middleware/middleware_result'
import { QueryInterval } from './common'


interface Params extends QueryInterval {
}

export interface User {
  id?: string
  username?: string
  phoneNumber?: string
  homepage?: string
}


const controller = (_: any, { first }: Params, ctx: ResultContext, info: any): Array<User> => {
  ctx.middlewareResult = {
    code: 0,
    msg: 'ok',
  }
  return [
    { id: '1', username: '123', homepage: 'homepage1' },
    { id: '2', username: '1234', homepage: 'homepage2' },
    { id: '3', username: '1234', homepage: 'homepage2' },
    { id: '4', username: '1234', homepage: 'homepage2' },
  ]
}

export default (..._: any) => controller(_[0], _[1], _[2], graphqlFields(_[3]))
