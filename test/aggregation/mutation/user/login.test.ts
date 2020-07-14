import { Done } from 'mocha'
import { aggregationUrl, expect, request, showJson, showTitle } from '../../../index.test'


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
      const { code, data } = res.body
      expect(code).equal(0)
      expect(data).to.be.an('object')
      expect(data.user).to.be.an('object')
      expect(data.user).keys(['id', 'username', 'phoneNumber', 'homepage'])
      showJson(data)
      done()
    })
}
