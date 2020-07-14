import { GraphQLFieldConfig, GraphQLList } from 'graphql'
import { ResultContext } from '../../../middleware/middleware_result'
import { Blog, BlogEntity } from '../../../entity'
import { FilterInputEntity } from '../../../entity/input'


export default ((): GraphQLFieldConfig<any, any> => ({
  type: GraphQLList(BlogEntity),
  args: {
    filter: { type: FilterInputEntity },
  },
  resolve: (_, { filter }: any, ctx: ResultContext, info: any): Array<Blog> => {
    console.log(filter)
    ctx.responseEntity(0, 'ok')
    return [
      {
        id: '1',
        title: 'javaScript es6',
        anther: {
          id: '3',
          username: 'joverZhang',
          homepage: 'www.joverzhang.com',
          phoneNumber: '13712345678',
        },
        typeTags: [{
          id: '1',
          name: 'js',
          url: 'www.joverzhang.com',
        }],
        readCount: 10,
        favoriteCount: 3,
        createDateTime: '2019-01-01 17:20:58',
        updateDateTime: '2019-01-02 17:20:58',
        content: 'function () { return }',
      }, {
        id: '2',
        title: 'python 3.8',
        anther: {
          id: '3',
          username: 'joverZhang',
          homepage: 'www.joverzhang.com',
          phoneNumber: '13712345678',
        },
        typeTags: [{
          id: '2',
          name: 'python',
          url: 'www.joverzhang.com',
        }],
        readCount: 10,
        favoriteCount: 3,
        createDateTime: '2020-01-01 17:20:58',
        updateDateTime: '2020-01-02 17:20:58',
        content: 'def f(): return',
      },
    ]
  },
}))()
