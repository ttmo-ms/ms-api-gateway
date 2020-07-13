import superTest from 'supertest'
import chai from 'chai'
import app from '../src/index'
import { queryBlog, queryUser } from './aggregation/query'
import { mutationUserLogin, mutationUserRegister } from './aggregation/mutation'


export const expect = chai.expect
export const request = superTest(app.listen())
export const aggregationUrl = '/aggregation'

describe('Query', () => {
  it('user.user', queryUser)
  it('blog.blog', queryBlog)
})

describe('Mutation', () => {
  it('user.login', mutationUserLogin)
  it('user.register', mutationUserRegister)
})


export const showTitle = function (text: string) {
  console.warn('===> ' + text)
}
