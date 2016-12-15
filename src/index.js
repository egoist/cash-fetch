import http from 'http'
import https from 'https'
import url from 'url'
import qs from 'querystring'
import pkg from '../package.json'

function stringify(obj) {
  const string = qs.stringify(obj)
  return string ? `?${string}` : ''
}

export default function (requestURL, {
  method,
  query = {},
  data,
  headers
} = {}) {
  return new Promise((resolve, reject) => {
    requestURL = `${requestURL}${stringify(query)}`
    const parsedURL = url.parse(requestURL)
    const m = parsedURL.protocol === 'http:' ? http : https
    const req = m.request(Object.assign(parsedURL, {
      method,
      headers: Object.assign({
        'User-Agent': `${pkg.name} ${pkg.version}`
      }, headers)
    }), res => {
      res.setEncoding('utf8')
      let result = ''
      res.on('data', chunk => {
        result += chunk
      })
      res.on('end', () => {
        resolve(Object.assign(res, {
          text() {
            return Promise.resolve(result)
          },
          json() {
            try {
              return Promise.resolve(JSON.parse(result))
            } catch (err) {
              return Promise.reject(err)
            }
          }
        }))
      })
    })
    req.on('error', reject)
    if (data) {
      res.write(JSON.stringify(data))
    }
    req.end()
  })
}
