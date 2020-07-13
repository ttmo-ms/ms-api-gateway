import { Done } from 'mocha'
import { aggregationUrl, expect, request, showTitle } from '../../../index.test'


const query = `
mutation {
  user: login ( username: "test", password: "test123456" ) {
    id
    username
    phoneNumber
    homepage
  }
}
`

export default (done: Done) => {
  showTitle('mutation user login.')
  request
    .post(aggregationUrl)
    .query({ query, variables: null })
    .expect(200)
    .end((err, res) => {
      expect(res.body.code).equal(0)
      expect(res.body.data).to.be.an('object')
      expect(res.body.data.user).to.be.an('object')
      expect(res.body.data.user).keys(['id', 'username', 'phoneNumber', 'homepage'])
      console.log(res.body.data)
      done()
    })
}
