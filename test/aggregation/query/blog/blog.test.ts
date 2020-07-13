import { Done } from 'mocha'
import { aggregationUrl, expect, request } from '../../../index.test'


const query = `
query {
  blog{
    id
    title
    typeTags {
      id
      name
      url
    }
    anther {
      id
      username
      phoneNumber
      homepage
    }
    readCount
    favoriteCount
    createDateTime
    content
  }
}`

export default (done: Done) => {
  request
    .post(aggregationUrl)
    .query({ query, variables: null })
    .expect(200)
    .end((err, res) => {
      expect(res.body.code).equal(0)
      expect(res.body.data).to.be.an('object')
      expect(res.body.data.blog).to.be.an('array')
      console.log(res.body.data)
      done()
    })
}
