import superTest from 'supertest'
import chai from 'chai'
import app from '../src/index'
import { queryBlog, queryBlogTag, queryUser } from './aggregation/query'
import {
  mutationBlogCreate,
  mutationBlogDelete,
  mutationBlogTagCreate,
  mutationBlogUpdate,
  mutationUserLogin,
  mutationUserRegister,
} from './aggregation/mutation'


export const expect = chai.expect
export const request = superTest(app.listen())
export const aggregationUrl = '/aggregation'

describe('Query', () => {
  it('user.user', queryUser)
  it('blog.blog', queryBlog)
  it('blog.blogTag', queryBlogTag)
})

describe('Mutation', () => {
  it('user.login', mutationUserLogin)
  it('user.register', mutationUserRegister)
  it('blog.blogCreate', mutationBlogCreate)
  it('blog.blogUpdate', mutationBlogUpdate)
  it('blog.blogDelete', mutationBlogDelete)
  it('blog.blogTagCreate', mutationBlogTagCreate)
})


export const showTitle = function (text: string) {
  console.warn('===> ' + text)
}

export const showJson = function (obj: string, space: number = 2) {
  console.log(JSON.stringify(obj, null, space))
}
