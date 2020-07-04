import { GraphQLFieldConfig, GraphQLID, GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql'

import { queryInterval } from './common'

import resolve from '../../controller/aggregation/user'


export const User: GraphQLObjectType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLID, description: 'Unique id.' },
    username: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
    homepage: { type: GraphQLString, description: 'User home page.' },
  },
})

export default ((): GraphQLFieldConfig<any, any> => ({
  description: 'All user information.',
  type: GraphQLList(User),
  args: {
    ...queryInterval,
  },
  resolve,
}))()
