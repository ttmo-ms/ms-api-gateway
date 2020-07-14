import { Done } from 'mocha'
import { aggregationUrl, expect, request, showJson, showTitle } from '../../../index.test'


const query = `
mutation {
  blog: blogCreate (
    title: "javaScript es6", 
    typeTag: ["1"],
    anther: "3",
    content: "function () { return }"
  ) {
    id
    title
    typeTag {
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
  showTitle('mutation blogCreate')
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
        .keys(['id', 'title', 'typeTag', 'anther', 'readCount', 'favoriteCount', 'createDateTime', 'content'])
      expect(data.blog.typeTag).to.be.an('array')
      expect(data.blog.anther).to.be.an('object').keys('id', 'username', 'homepage')
      showJson(data)
      done()
    })
}
