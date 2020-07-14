import { Done } from 'mocha'
import { aggregationUrl, expect, request, showJson, showTitle } from '../../../index.test'


const query = `
query {
  blog{
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
    updateDateTime
    content
  }
}`

export default (done: Done) => {
  showTitle('query blog.')
  request
    .post(aggregationUrl)
    .query({ query, variables: null })
    .expect(200)
    .end((err, res) => {
      const { data, code } = res.body
      expect(code).equal(0)
      expect(data).to.be.an('object')
      expect(data.blog).to.be.an('array')
      if (data.blog.length > 0) {
        expect(data.blog[0])
          .keys([
            'id', 'title', 'typeTag', 'anther',
            'readCount', 'favoriteCount',
            'createDateTime', 'updateDateTime', 'content',
          ])
      } else {
        showTitle('Array is empty.')
      }
      showJson(data)
      done()
    })
}
