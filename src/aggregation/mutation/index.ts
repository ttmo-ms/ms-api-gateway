import { GraphQLObjectType } from 'graphql'
import login from './user/login'
import register from './user/register'
import blogCreate from './blog/blogCreate'
import blogUpdate from './blog/blogUpdate'
import blogDelete from './blog/blogDelete'
import blogTagCreate from './blog/blogTagCreate'
import blogTagUpdate from './blog/blogTagUpdate'


export default new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    login,
    register,
    blogCreate,
    blogUpdate,
    blogDelete,
    blogTagCreate,
    blogTagUpdate,
  },
})
