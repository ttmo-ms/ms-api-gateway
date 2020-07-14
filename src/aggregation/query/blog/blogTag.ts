import { GraphQLFieldConfig, GraphQLList } from 'graphql'
import { queryInterval } from '../../../args_template'
import { ResultContext } from '../../../middleware/middleware_result'
import { BlogTag, BlogTagEntity } from '../../../entity'


export default ((): GraphQLFieldConfig<any, any> => ({
  type: GraphQLList(BlogTagEntity),
  args: {
    ...queryInterval,
  },
  resolve: (_, args: any, ctx: ResultContext, info: any): Array<BlogTag> => {
    ctx.responseEntity(0, 'ok')
    return [{
      id: '1',
      name: 'js',
      url: 'www.joverzhang.com',
    }]
  },
}))()
