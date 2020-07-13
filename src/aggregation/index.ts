import fs from 'fs'
import graphqlHTTP from 'koa-graphql'
import koaRouter from 'koa-router'
import { GraphQLObjectType, GraphQLSchema, printSchema } from 'graphql'

import user from './query/user/user'
import blog from './query/blog/blog'
import login from './mutation/user/login'
import register from './mutation/user/register'


const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      user,
      blog,
    },
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      login,
      register,
    },
  }),
})

// Auto generate schema.graphql file.
fs.writeFile('./schema.graphql', printSchema(schema), err => err && console.warn(err))


export default new koaRouter()
  .all('/', graphqlHTTP({
      schema,
      graphiql: true,
    }),
  )
