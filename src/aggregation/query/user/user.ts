import { GraphQLFieldConfig, GraphQLList } from 'graphql'
import { User, UserEntity } from '../../../entity'
import { ResultContext } from '../../../middleware/middleware_result'
import { FilterInputEntity } from '../../../entity/input'


export default ((): GraphQLFieldConfig<any, any> => ({
  description: 'All user information.',
  type: GraphQLList(UserEntity),
  args: {
    filter: { type: FilterInputEntity },
  },
  resolve: (_, { filter }: any, ctx: ResultContext, info: any): Array<User> => {
    console.log('cookie: '+ ctx.cookies.get('test'))
    ctx.cookies.set('test', 'jover', { maxAge: 60 * 1000 })
    console.log(filter)
    ctx.responseEntity(0, 'ok')
    return [
      { id: '1', username: '张三', homepage: 'homepage1' },
      { id: '2', username: '1234', homepage: 'homepage2' },
      { id: '3', username: '1234', homepage: 'homepage2' },
      { id: '4', username: '1234', homepage: 'homepage2' },
    ]
  },
}))()
