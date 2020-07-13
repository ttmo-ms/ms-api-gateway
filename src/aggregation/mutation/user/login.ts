import { GraphQLFieldConfig, GraphQLString } from 'graphql'
import { User, UserEntity } from '../../../entity'
import { ResultContext } from '../../../middleware/middleware_result'


let description = `Login interface.\n

Two Plan:\n
  Plan 1:\n
    send together 'username' and 'password'.\n
  Plan 2:\n
    step 1: send the 'phoneNumber' first, and wait receive the 'captcha'\n
    step 2: send together 'phoneNumber' of above sent and 'captcha' of received.\n

Then, backend will save 'token' in cookie.`


export default ((): GraphQLFieldConfig<any, any> => ({
  description,
  type: UserEntity,
  args: {
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
    captcha: { type: GraphQLString },
  },
  resolve: (_, args: any, ctx: ResultContext, info: any): User => {
    ctx.responseEntity(0, 'ok')
    return { id: '1', username: '123', homepage: 'homepage1' }
  },
}))()
