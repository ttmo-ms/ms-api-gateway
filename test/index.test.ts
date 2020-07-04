import supertest from 'supertest'
import chai from 'chai'
import app from '../src/index'


const expect = chai.expect
const request = supertest(app.listen())

describe('Test: /aggregation', () => {
  const aggregationUrl = '/aggregation'
  it('test: user', done => {
    request
      .post(aggregationUrl)
      .query({
        query: `query {
          user {
            id
            username
            phoneNumber
            homepage
          }
        }`,
        variables: null,
      })
      .expect(200)
      .end((err, res) => {
        expect(res.body.data).to.be.an('object')
        expect(res.body.data.user).to.be.an('array')
        console.log(res.body.data)
        done()
      })
  })
})
