const api = require('./api')
const ui = require('./ui')
const scripts = require('./../scripts')

const onCreateSong = function (event) {
  api.createSong(event)
    .then(scripts.generateSong)
    .then(ui.createSongSuccess)
    .catch(ui.createSongSuccess)
}

const onShowSong = function (event) {
  api.showSong(event)
    .then(scripts.generateSong)
    .then(ui.showSongSuccess)
    .catch(ui.showSongFailure)
}

const onUpdateSong = function (event) {
  api.updateSong(event)
    // .then(api.indexSongs)
    // .then(scripts.generateTable)
    .then(ui.updateSongSuccess)
    .catch(ui.updateSongFailure)
  // api.indexSongs(event)
}

const onDeleteSong = function (event) {
  api.deleteSong(event)
    .then(ui.deleteSongSuccess)
    .catch(ui.deleteSongFailure)
}

const onIndexSongsSpecific = function (event) {
  api.indexSongs(event)
    .then(scripts.generateTable)
    .then(ui.indexSongsSuccess)
    .catch(ui.indexSongsFailure)
}

const onIndexSongs = function (event) {
  api.indexSongs(event)
}

const addHandlers = () => {
  $('#create-song').on('submit', onCreateSong)
  $('#show-song').on('submit', onShowSong)
  $('#update-song').on('submit', onUpdateSong)
  $('#delete-song').on('submit', onDeleteSong)
  $('.index-songs').on('submit', onIndexSongs)
  $('#index-songs').on('submit', onIndexSongsSpecific)
  // $('#generate-table').on('submit', onGenerateTable)
  // $('#change-password').on('submit', onChangePassword)
}

module.exports = {
  addHandlers,
  onIndexSongs
}
