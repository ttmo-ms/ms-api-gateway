import { GraphQLFieldConfig, GraphQLNonNull, GraphQLString } from 'graphql'
import validate from 'validate'
import { BlogTag, BlogTagEntity } from '../../../entity'
import { ResultContext } from '../../../middleware/middleware_result'


const argsCheck = new validate({
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
    name: { type: GraphQLNonNull(GraphQLString) },
    url: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve: (_, args: any, ctx: ResultContext, info: any): BlogTag => {
    if (argsCheck.validate(args).length) {
      ctx.responseEntity(1000, 'args check fail.')
      return {}
    }
    const { name, url } = args
    ctx.responseEntity(0, 'ok')
    return {
      id: '1',
      name,
      url,
    }
  },
}))()
