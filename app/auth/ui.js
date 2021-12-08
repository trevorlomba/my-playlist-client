const store = require('../store')
const scripts = require('./../scripts')

const signUpSuccess = function (responseData) {
//   // update the message on the screen
//   $('#movies-display').text('Signed up successfully')

  //   // remove existing classes and add a green text-success class from bootstrap
  //   $('#movies-display').removeClass()
  //   $('#movies-display').addClass('text-success')

  // clear (reset) the forms on the page
  $('form').trigger('reset')

  $('#ui').text('Signed Up Successfully')
  scripts.displayUiSuccessMessage()
  // console.log('signUpSuccess ran. responseData is :', responseData)
}

const signUpFailure = function () {
  $('#ui').text('Sign Up Failed')
  scripts.displayUiFailureMessage()
}

const signInSuccess = function (responseData) {
  $('form').trigger('reset')
  $('#before-sign-in').hide()
  $('#after-sign-in').show()

  $('#ui').text('Signed In Successfully')
  scripts.displayUiSuccessMessage()

  // console.log('signInSuccess ran. responseData is :', responseData)
  store.user = responseData.user
}

const signInFailure = function () {
  $('#ui').text('Sign In Failed')
  scripts.displayUiFailureMessage()
}

const signOutSuccess = function (responseData) {
  $('form').trigger('reset')
  store.user = null
  $('#after-sign-in').hide()
  $('#before-sign-in').show()

  $('#ui').text('Signed Out Successfully')
  scripts.displayUiSuccessMessage()

  // console.log('signOutSuccess ran. responseData is :', responseData)
}

const signOutFailure = function () {
  $('#ui').text('Sign Out Failed')
  scripts.displayUiFailureMessage()
}

const changePasswordSuccess = function (responseData) {
  $('form').trigger('reset')

  $('#ui').text('Changed Password Successfully')
  scripts.displayUiSuccessMessage()

  // console.log('signOutSuccess ran. responseData is :', responseData)
}

const changePasswordFailure = function () {
  $('#ui').text('Change Password Failed')
  scripts.displayUiFailureMessage()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
