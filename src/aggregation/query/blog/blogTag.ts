import { GraphQLBoolean, GraphQLFieldConfig, GraphQLList } from 'graphql'
import { ResultContext } from '../../../middleware/middleware_result'
import { BlogTag, BlogTagEntity } from '../../../entity'
import { FilterInputEntity } from '../../../entity/input'


export default ((): GraphQLFieldConfig<any, any> => ({
  type: GraphQLList(BlogTagEntity),
  args: {
    filter: { type: FilterInputEntity },
    all: { type: GraphQLBoolean, defaultValue: true },
  },
  resolve: (_, { filter, all }: any, ctx: ResultContext, info: any): Array<BlogTag> => {
    console.log(filter)
    console.log(all)
    ctx.responseEntity(0, 'ok')
    return [
      {
        id: '1',
        name: 'js',
        url: 'www.joverzhang.com',
      }, {
        id: '2',
        name: 'python',
        url: 'www.joverzhang.com',
      },
    ]
  },
}))()
