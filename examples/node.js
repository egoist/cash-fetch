const $fetch = require('../')

$fetch('https://api.github.com/users/egoist')
  .then(res => res.json())
  .then(res => {
    console.log(res.login)
  })
  .catch(err => console.log(err.stack))
