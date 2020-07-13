import { GraphQLFieldConfig, GraphQLList } from 'graphql'
import { queryInterval } from '../../../args_template'
import { User, UserEntity } from '../../../entity'
import { ResultContext } from '../../../middleware/middleware_result'


export default ((): GraphQLFieldConfig<any, any> => ({
  description: 'All user information.',
  type: GraphQLList(UserEntity),
  args: {
    ...queryInterval,
  },
  resolve: (_, args: any, ctx: ResultContext, info: any): Array<User> => {
    ctx.responseEntity(0, 'ok')
    return [
      { id: '1', username: '123', homepage: 'homepage1' },
      { id: '2', username: '1234', homepage: 'homepage2' },
      { id: '3', username: '1234', homepage: 'homepage2' },
      { id: '4', username: '1234', homepage: 'homepage2' },
    ]
  },
}))()
