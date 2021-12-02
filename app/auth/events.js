const getFormFields = require('../../lib/get-form-fields')
const config = require('./../config.js')

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  api.signUp(event)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  api.signIn(event)
    //   api.signUp(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
}
// //   $('#sign-in').on('submit', onSignIn)
// //   $('#sign-out').on('submit', onSignOut)
// //   $('#change-password').on('submit', onChangePassword)
// }

module.exports = {
  addHandlers
}
