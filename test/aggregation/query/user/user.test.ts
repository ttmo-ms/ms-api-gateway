import { Done } from 'mocha'
import { aggregationUrl, expect, request, showTitle } from '../../../index.test'


const query = `
query {
  user {
    id
    username
    phoneNumber
    homepage
  }
}`

export default (done: Done) => {
  showTitle('query user.')
  request
    .post(aggregationUrl)
    .query({ query, variables: null })
    .expect(200)
    .end((err, res) => {
      expect(res.body.code).equal(0)
      expect(res.body.data).to.be.an('object')
      expect(res.body.data.user).to.be.an('array')
      console.log(res.body.data)
      done()
    })
}
