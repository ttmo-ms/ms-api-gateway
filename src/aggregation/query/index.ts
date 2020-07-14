import { GraphQLObjectType } from 'graphql'
import user from './user/user'
import blog from './blog/blog'


export default new GraphQLObjectType({
  name: 'Query',
  fields: {
    user,
    blog,
  },
})
