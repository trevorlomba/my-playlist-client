const config = require('../config')
const store = require('../store')
const getFormFields = require('../../lib/get-form-fields.js')

const createSong = function (event) {
  event.preventDefault()
  // console.log('create song ran!')

  const form = event.target
  const formData = getFormFields(form)
  // console.log(formData)

  return $.ajax({
    url: config.apiUrl + '/songs',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formData
  })
}

const indexSongs = function (event) {
  event.preventDefault()
  // console.log('index songs ran!')

  return $.ajax({
    url: config.apiUrl + '/songs',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    success: function (data) {
      return data
    }

  })
}

const showSong = function (event) {
  event.preventDefault()
  // console.log('show song ran!')

  const form = event.target
  const formData = getFormFields(form)
  // console.log(formData)

  const id = formData.song.id

  return $.ajax({
    url: config.apiUrl + '/songs/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formData

  })
}

const updateSong = function (event) {
  event.preventDefault()
  // console.log('update song ran!')

  const form = event.target
  const formData = getFormFields(form)
  // console.log(formData)

  const id = formData.song.id

  return $.ajax({
    url: config.apiUrl + '/songs/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formData

  })
}

const deleteSong = function (event) {
  event.preventDefault()
  // console.log('delete song ran!')

  const form = event.target
  const formData = getFormFields(form)
  // console.log(formData)

  const id = formData.song.id

  return $.ajax({
    url: config.apiUrl + '/songs/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }

  })
}

module.exports = {
  createSong,
  indexSongs,
  showSong,
  updateSong,
  deleteSong
}
