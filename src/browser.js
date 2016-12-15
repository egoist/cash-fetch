function stringify(obj) {
  const str = Object.keys(obj)
    .filter(key => {
      if (obj[key] == undefined) return false
      if (obj[key] === false) return false
      return true
    })
    .map(key => {
      let value
      if (obj[key] === true) value = ''
      else value = `=${obj[key]}`
      return key + value
    }).join('&')
  return str ? `?${str}` : ''
}

export default function (url, {
  method = 'GET',
  query = {},
  data,
  objectAssign = Object.assign
} = {}) {
  const request = new XMLHttpRequest()

  return new Promise((resolve, reject) => {
    request.onreadystatechange = () => {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
          resolve(objectAssign(request, {
            text() {
              return Promise.resolve(request.responseText)
            },
            json() {
              try {
                return Promise.resolve(JSON.parse(request.responseText))
              } catch (err) {
                return Promise.reject(err)
              }
            }
          }))
        } else {
          const error = new Error(request.statusText)
          error.response = request
          reject(error)
        }
      }
    }
    request.open(method, `${url}${stringify(query)}`, true)

    request.send(data ? JSON.stringify(data) : null)
  })
}
