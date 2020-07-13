import fs from 'fs'
import graphqlHTTP from 'koa-graphql'
import koaRouter from 'koa-router'
import { GraphQLObjectType, GraphQLSchema, printSchema } from 'graphql'

import user from './user'
import login from './login'
import register from './register'


const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      user,
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
fs.writeFile('./schema.graphql', printSchema(schema), err => console.warn(err))


export default new koaRouter()
  .all('/', graphqlHTTP({
      schema,
      graphiql: true,
    }),
  )
