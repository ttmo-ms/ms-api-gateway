import { GraphQLFieldConfig, GraphQLString } from 'graphql'
import { ResultContext } from '../middleware/middleware_result'
import { UserEntity, User } from './entity'


let description = `Register interface.\n

Two Plan:\n
  Plan 1:\n
    send together 'phoneNumber' and 'password'.\n
  Plan 2:\n
    step 1: send 'phoneNumber', then wait for receive 'captcha'.\n
    step 2: send together 'phoneNumber' and 'captcha'.\n

Then, will can to complete the registration.`


export default ((): GraphQLFieldConfig<any, any> => ({
  description,
  type: UserEntity,
  args: {
    phoneNumber: { type: GraphQLString },
    captcha: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  resolve: (_, args: any, ctx: ResultContext, info: any): User => {
    ctx.responseEntity(0, 'ok')
    return { id: '1', username: '123', homepage: 'homepage1' }
  },
}))()
