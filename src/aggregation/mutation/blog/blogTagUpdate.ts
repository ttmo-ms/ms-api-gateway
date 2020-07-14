import { GraphQLFieldConfig, GraphQLID, GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql'
import validate from 'validate'
import { BlogTag, BlogTagEntity } from '../../../entity'
import { ResultContext } from '../../../middleware/middleware_result'


const argsCheck = new validate({
  id: {
    type: String,
    required: true,
    match: /^[0-9]*$/,
  },
  name: {
    type: String,
    required: true,
    length: { min: 1, max: 50 },
  },
  url: {
    type: String,
    required: true,
    length: { min: 1, max: 200 },
  },
})


export default ((): GraphQLFieldConfig<any, any> => ({
  type: BlogTagEntity,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) },
    title: { type: GraphQLNonNull(GraphQLString) },
    content: { type: GraphQLNonNull(GraphQLString) },
    typeTag: { type: GraphQLList(GraphQLString) },
  },
  resolve: (_, args: any, ctx: ResultContext, info: any): BlogTag => {
    if (argsCheck.validate(args).length) {
      ctx.responseEntity(1000, 'args check fail.')
      return {}
    }
    const { id, name, url } = args
    ctx.responseEntity(0, 'ok')
    return {
      id,
      name,
      url,
    }
  },
}))()
