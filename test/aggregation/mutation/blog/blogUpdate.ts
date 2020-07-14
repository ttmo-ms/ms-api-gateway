import { Done } from 'mocha'
import { aggregationUrl, expect, request, showJson, showTitle } from '../../../index.test'


const query = `
mutation {
  blog: blogUpdate (
    id: "1"
    title: "javaScript es6", 
    typeTags: ["1"],
    content: "function () { return }"
  ) {
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
      homepage
    }
    readCount
    favoriteCount
    createDateTime
    content
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
      expect(data.blog)
        .to.be.an('object')
        .keys(['id', 'title', 'typeTags', 'anther', 'readCount', 'favoriteCount', 'createDateTime', 'content'])
      expect(data.blog.typeTags).to.be.an('array')
      expect(data.blog.anther).to.be.an('object').keys('id', 'username', 'homepage')
      showJson(data)
      done()
    })
}
