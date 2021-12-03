const createSongSuccess = function (responseData) {
//   // update the message on the screen
//   $('#movies-display').text('Signed up successfully')

  //   // remove existing classes and add a green text-success class from bootstrap
  //   $('#movies-display').removeClass()
  //   $('#movies-display').addClass('text-success')

  // clear (reset) the forms on the page
  $('form').trigger('reset')

  console.log('createSongSuccess ran. responseData is :', responseData)
}

const createSongFailure = function (error) {
  // $('#error-message').text('Error on sign up')

  // // remove existing classes and add a red text-danger class from bootstrap
  // $('#error-message').removeClass()
  // $('#error-message').addClass('text-danger')

  console.error('createSongFailure ran. Error is :', error)
}

const indexSongsSuccess = function (responseData) {
  console.log('indexSongsSuccess ran. responseData is :', responseData)
}

const indexSongsFailure = function (error) {
  console.error('indexSongsFailure ran. Error is :', error)
}

const showSongSuccess = function (responseData) {
  console.log('showSongSuccess ran. responseData is :', responseData)
}

const showSongFailure = function (error) {
  console.error('showSongFailure ran. Error is :', error)
}

const updateSongSuccess = function (responseData) {
  console.log('updateSongSuccess ran. responseData is :', responseData)
}

const updateSongFailure = function (error) {
  console.error('updateSongFailure ran. Error is :', error)
}

const deleteSongSuccess = function (responseData) {
  console.log('deleteSongSuccess ran. responseData is :', responseData)
}

const deleteSongFailure = function (error) {
  console.error('deleteSongFailure ran. Error is :', error)
}
// const signInSuccess = function (responseData) {
//   $('form').trigger('reset')

//   console.log('signInSuccess ran. responseData is :', responseData)
//   store.user = responseData.user
// }

// const signInFailure = function (error) {
//   console.error('signInFailure ran. Error is :', error)
// }

// const signOutSuccess = function (responseData) {
//   $('form').trigger('reset')
//   store.user = null
//   console.log('signOutSuccess ran. responseData is :', responseData)
// }

// const signOutFailure = function (error) {
//   console.error('signOutFailure ran. Error is :', error)
// }

// const changePasswordSuccess = function (responseData) {
//   $('form').trigger('reset')

//   console.log('signOutSuccess ran. responseData is :', responseData)
// }

// const changePasswordFailure = function (error) {
//   console.error('signOutFailure ran. Error is :', error)
// }

module.exports = {
  createSongSuccess,
  createSongFailure,
  indexSongsFailure,
  indexSongsSuccess,
  showSongSuccess,
  showSongFailure,
  updateSongFailure,
  updateSongSuccess,
  deleteSongFailure,
  deleteSongSuccess
}
