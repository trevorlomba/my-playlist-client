const api = require('./api')
const ui = require('./ui')
const scripts = require('./../scripts')

const onCreateSong = function (event) {
  api.createSong(event)
    .then(scripts.generateSong)
    .then(ui.createSongSuccess)
    .catch(ui.createSongSuccess)
}

const onIndexSongs = function (event) {
  api.indexSongs(event)
    .then(scripts.generateTable)
    .then(ui.indexSongsSuccess)
    .catch(ui.indexSongsFailure)
}

const onShowSong = function (event) {
  api.showSong(event)
    .then(scripts.generateSong)
    .then(ui.showSongSuccess)
    .catch(ui.showSongFailure)
}

const onUpdateSong = function (event) {
  api.updateSong(event)
    .then(ui.updateSongSuccess)
    .catch(ui.updateSongFailure)
}

const onDeleteSong = function (event) {
  api.deleteSong(event)
    .then(ui.deleteSongSuccess)
    .catch(ui.deleteSongFailure)
}

// const onGenerateTable = function (event) {
//   console.log('testingGenerateTable')
//   // .then(ui.deleteSongSuccess)
//   // .catch(ui.deleteSongFailure)
// }

const addHandlers = () => {
  $('#create-song').on('submit', onCreateSong)
  $('#index-songs').on('submit', onIndexSongs)
  $('#show-song').on('submit', onShowSong)
  $('#update-song').on('submit', onUpdateSong)
  $('#delete-song').on('submit', onDeleteSong)
  // $('#generate-table').on('submit', onGenerateTable)
  // $('#change-password').on('submit', onChangePassword)
}

module.exports = {
  addHandlers
}
