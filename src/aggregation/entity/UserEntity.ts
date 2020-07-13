import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql'


export interface User {
  id?: string
  username?: string
  phoneNumber?: string
  homepage?: string
}

const UserEntity = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLID, description: 'Unique id.' },
    username: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
    homepage: { type: GraphQLString, description: 'User home page.' },
  },
})

export default UserEntity
