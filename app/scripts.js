const store = require('./store')

$('#after-sign-in').hide()

function clearTable (data) {
  document.getElementById('head').innerHTML = ''
  document.getElementById('table').innerHTML = ''
  console.log('clearTable ran!')
  return data
}

function generateTable (data) {
  const songs = data.song
  const user = store.user
  const userId = user._id
  const myTable = document.querySelector('#table')

  // clear table
  clearTable()

  // create title text
  $('#head').html('Playlist')

  // generate header row
  const headers = ['songId', 'title', 'artist', 'album', 'isrc']
  const table = document.createElement('table')
  const headerRow = document.createElement('tr')
  headers.forEach(headerText => {
    const header = document.createElement('th')
    const textNode = document.createTextNode(headerText)
    header.appendChild(textNode)
    headerRow.appendChild(header)
  })
  table.appendChild(headerRow)

  // generate song data and print
  songs.forEach(song => {
    // include only columns of interest
    const songDataForDisplay = Object.values(song).slice(0, 5)
    if (song.owner === userId) { // check for ownership
      const row = document.createElement('tr')
      Object.values(songDataForDisplay).forEach(text => {
        const cell = document.createElement('td')
        const textNode = document.createTextNode(text)
        cell.appendChild(textNode)
        row.appendChild(cell)
      })
      table.appendChild(row)
    }
  })
  myTable.appendChild(table)

  console.log('generateTable ran!')

  return data
}

function generateSong (data) {
  const song = data.song
  const user = store.user
  const userId = user._id
  if (song.owner === userId) {
    // clear previous table content
    clearTable()

    // create title text
    $('#head').html('Song')

    // generate header
    const headers = ['songId', 'title', 'artist', 'album', 'isrc']
    const table = document.createElement('table')
    const headerRow = document.createElement('tr')
    document.getElementById('table').innerHTML = ''
    headers.forEach(headerText => {
      const header = document.createElement('th')
      const textNode = document.createTextNode(headerText)
      header.appendChild(textNode)
      headerRow.appendChild(header)
    })
    table.appendChild(headerRow)

    // generate song data

    const myTable = document.querySelector('#table')

    const songDataForDisplay = Object.values(song).slice(0, 5)

    // print song data
    const row = document.createElement('tr')

    Object.values(songDataForDisplay).forEach(text => {
      const cell = document.createElement('td')
      const textNode = document.createTextNode(text)
      cell.appendChild(textNode)
      row.appendChild(cell)

      table.appendChild(row)
    })
    myTable.appendChild(table)
  } else {
    console.log('you dont own that song'
    )
  }
}

module.exports = {
  generateTable,
  generateSong,
  clearTable
}
