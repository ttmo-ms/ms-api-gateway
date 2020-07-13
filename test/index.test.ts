import superTest from 'supertest'
import chai from 'chai'
import app from '../src/index'
import { queryBlog, queryUser } from './aggregation/query'


export const expect = chai.expect
export const request = superTest(app.listen())

export const aggregationUrl = '/aggregation'


describe('Query', () => {
  it('user.user', queryUser)
  it('blog.blog', queryBlog)
})
