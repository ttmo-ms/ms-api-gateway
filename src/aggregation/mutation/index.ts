import { GraphQLObjectType } from 'graphql'
import login from './user/login'
import register from './user/register'


export default new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    login,
    register,
  },
})
