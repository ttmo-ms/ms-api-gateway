import { GraphQLObjectType } from 'graphql'
import user from './user/user'
import blog from './blog/blog'
import blogTag from './blog/blogTag'


export default new GraphQLObjectType({
  name: 'Query',
  fields: {
    user,
    blog,
    blogTag,
  },
})
