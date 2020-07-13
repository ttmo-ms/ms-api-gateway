import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql'


export interface BlogTag {
  id?: string
  name: string
  url: string
}

const BlogTagEntity = new GraphQLObjectType({
  name: 'BlogTag',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    url: { type: GraphQLString },
  },
})

export default BlogTagEntity
