import 'babel-polyfill'

const request = require('supertest')
const { app } = require('../index')

describe('API Test', () => {
  test('return not found as test-url is a post not get method', (done) => {
    request(app)
      .get('/test-url')
      .then((response) => {
        expect(response.statusCode).toBe(404)
        done()
      })
  })
  test('directing to the right URL', (done) => {
    request(app)
      .get('/')
      .send('./dist/index.html')
      .then((response) => {
        expect(response.statusCode).toEqual(200)
        done()
      })
  })
  test('testing wrong path', (done) => {
    request(app)
      .get('/thisIsAWrongPath')
      .then((response) => {
        expect(response.statusCode).toBe(404)
        done()
      })
  })
})
