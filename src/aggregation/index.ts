import fs from 'fs'
import graphqlHTTP from 'koa-graphql'
import koaRouter from 'koa-router'
import { GraphQLSchema, printSchema } from 'graphql'
import query from './query'
import mutation from './mutation'


const schema = new GraphQLSchema({
  query,
  mutation,
})

// Auto generate schema.graphql file.
fs.writeFile('./schema.graphql', printSchema(schema), err => err && console.warn(err))


export default new koaRouter()
  .all('/', graphqlHTTP({
      schema,
      graphiql: true,
    }),
  )
