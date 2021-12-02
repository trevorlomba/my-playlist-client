// const store = require('../store')

const signUpSuccess = function (responseData) {
//   // update the message on the screen
//   $('#movies-display').text('Signed up successfully')

  //   // remove existing classes and add a green text-success class from bootstrap
  //   $('#movies-display').removeClass()
  //   $('#movies-display').addClass('text-success')

  // clear (reset) the forms on the page
  $('form').trigger('reset')

  console.log('signUpSuccess ran. responseData is :', responseData)
}

const signUpFailure = function (error) {
  // $('#error-message').text('Error on sign up')

  // // remove existing classes and add a red text-danger class from bootstrap
  // $('#error-message').removeClass()
  // $('#error-message').addClass('text-danger')

  console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (responseData) {
  $('form').trigger('reset')

  console.log('signInSuccess ran. responseData is :', responseData)
}

const signInFailure = function (error) {
  console.error('signInFailure ran. Error is :', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
  // signOutSuccess,
  // signOutFailure,
  // changePasswordSuccess,
  // changePasswordFailure
}
