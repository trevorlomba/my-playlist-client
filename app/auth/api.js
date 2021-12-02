const config = require('../config')
// const store = require('../store')
const getFormFields = require('../../lib/get-form-fields.js')

const signUp = function (event) {
  event.preventDefault()
  console.log('sign up ran!')

  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)

  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
  // returned JavaScript object
}

const signIn = function (event) {
  event.preventDefault()
  console.log('sign in ran!')

  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)

  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}

module.exports = {
  signUp,
  signIn
  // signOut,
  // changePassword
}
