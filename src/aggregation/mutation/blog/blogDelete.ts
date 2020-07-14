import { GraphQLFieldConfig, GraphQLID, GraphQLNonNull } from 'graphql'
import validate from 'validate'
import { Blog, BlogEntity } from '../../../entity'
import { ResultContext } from '../../../middleware/middleware_result'


const argsCheck = new validate({
  id: {
    type: String,
    required: true,
    match: /^[0-9]*$/,
  },
})


export default ((): GraphQLFieldConfig<any, any> => ({
  type: BlogEntity,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) },
  },
  resolve: (_, args: any, ctx: ResultContext, info: any): Blog => {
    if (argsCheck.validate(args).length) {
      ctx.responseEntity(1000, 'args check fail.')
      return {}
    }
    ctx.responseEntity(0, 'ok')
    return {
      id: '1',
      title: 'javaScript es6',
      anther: {
        id: '3',
        username: 'joverZhang',
        homepage: 'www.joverzhang.com',
        phoneNumber: '13712345678',
      },
      typeTag: [
        {
          id: '1',
          name: 'js',
          url: 'www.joverzhang.com',
        },
      ],
      readCount: 10,
      favoriteCount: 3,
      createDateTime: '2019-01-01 17:20:58',
      content: 'function () { return }',
    }
  },
}))()
