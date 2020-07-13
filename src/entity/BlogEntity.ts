import { GraphQLID, GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql'
import { User } from './UserEntity'
import BlogTagEntity, { BlogTag } from './BlogTagEntity'
import { UserEntity } from './index'


export interface Blog {
  id?: string
  title?: string
  typeTags?: Array<BlogTag>
  anther?: User
  readCount?: number
  favoriteCount?: number
  createDateTime?: string
  content?: string
}

const BlogEntity = new GraphQLObjectType({
  name: 'Blog',
  fields: {
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    typeTags: { type: GraphQLList(BlogTagEntity) },
    anther: { type: UserEntity },
    readCount: { type: GraphQLInt },
    favoriteCount: { type: GraphQLInt },
    createDateTime: { type: GraphQLString },
    content: { type: GraphQLString },
  },
})

export default BlogEntity
