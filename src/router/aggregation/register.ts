import { GraphQLFieldConfig, GraphQLString } from 'graphql'
import { User } from './user'
import resolve from '../../controller/aggregation/register'


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
  type: User,
  args: {
    phoneNumber: { type: GraphQLString },
    captcha: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  resolve,
}))()
