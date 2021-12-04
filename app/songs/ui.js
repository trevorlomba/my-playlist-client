const scripts = require('./../scripts')

const createSongSuccess = function () {
  $('form').trigger('reset')

  $('#ui').text('Created Song Successfully')
  scripts.displayUiSuccessMessage()
}

const createSongFailure = function () {
  $('#ui').text('Create Song Failed')
  scripts.displayUiFailureMessage()
}

const indexSongsSuccess = function () {
  $('#ui').text('Indexed Songs Successfully')
  scripts.displayUiSuccessMessage()
}

const indexSongsFailure = function () {
  $('#ui').text('Index Songs Failed')
  scripts.displayUiFailureMessage()
}

const showSongSuccess = function () {
  $('#ui').text('Showed Song Successfully')
  scripts.displayUiSuccessMessage()
}

const showSongFailure = function () {
  $('#ui').text('Show Song Failed')
  scripts.displayUiFailureMessage()
}

const updateSongSuccess = function () {
  $('#ui').text('Updated Song Successfully')
  scripts.displayUiSuccessMessage()
}

const updateSongFailure = function () {
  $('#ui').text('Update Song Failed')
  scripts.displayUiFailureMessage()
}

const deleteSongSuccess = function () {
  $('#ui').text('Deleted Song Successfully')
  scripts.displayUiSuccessMessage()
}

const deleteSongFailure = function () {
  $('#ui').text('Delete Song Failed')
  scripts.displayUiFailureMessage()
}
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
