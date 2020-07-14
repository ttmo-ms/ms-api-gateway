import { Done } from 'mocha'
import { aggregationUrl, expect, request, showJson, showTitle } from '../../../index.test'


const query = `
mutation {
  blogTag (
    id: "1"
    name: "js"
    url: "www.joverzhang.com"
  ): {
    id
    name
    url
  }
}
`

export default (done: Done) => {
  showTitle('mutation blogUpdate')
  request
    .post(aggregationUrl)
    .query({ query, validates: null })
    .expect(200)
    .end((err, res) => {
      const { data, code } = res.body
      expect(code).equal(0)
      expect(data).to.be.an('object')
      expect(data.blogTag)
        .to.be.an('object')
        .keys(['id', 'name', 'url'])
      showJson(data)
      done()
    })
}
