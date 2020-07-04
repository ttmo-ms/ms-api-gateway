import { GraphQLFieldConfig, GraphQLString } from 'graphql'
import { User } from './user'


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
  type: User,
  args: {
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
    captcha: { type: GraphQLString },
  },
}))()
