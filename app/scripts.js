$('#after-sign-in').hide()

function generateTable (data) {
  const songs = data.song
  //   const btnGet = document.querySelector('button')
  const myTable = document.querySelector('#table')
  const headers = ['_id', 'title', 'artist', 'album', 'isrc', 'owner', 'createdAt', 'updatedAt', '__v']
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
  songs.forEach(song => {
    console.log(song)
    const row = document.createElement('tr')
    Object.values(song).forEach(text => {
      const cell = document.createElement('td')
      const textNode = document.createTextNode(text)
      cell.appendChild(textNode)
      row.appendChild(cell)
    })
    table.appendChild(row)
  })
  myTable.appendChild(table)

  //   const body = document.getElementsByTagName('body')[0]

  //   const innerContents = data.JSONBody

  //   console.log(innerContents)
  //   // creates a <table> element and a <tbody> element
  //   const tbl = document.createElement('table')
  //   const tblBody = document.createElement('tbody')

  //   // creating all cells
  //   for (let i = 0; i < 2; i++) {
  //     // creates a table row
  //     const row = document.createElement('tr')

  //     for (let j = 0; j < 2; j++) {
  //       // Create a <td> element and a text node, make the text
  //       // node the contents of the <td>, and put the <td> at
  //       // the end of the table row
  //       const cell = document.createElement('td')
  //       const cellText = document.createTextNode('cell in row ' + i + ', column ' + j)
  //       cell.appendChild(cellText)
  //       row.appendChild(cell)
  //     }

  //     // add the row to the end of the table body
  //     tblBody.appendChild(row)
  //   }

  //   // put the <tbody> in the <table>
  //   tbl.appendChild(tblBody)
  //   // appends <table> into <body>
  //   body.appendChild(tbl)
  //   // sets the border attribute of tbl to 2;
  //   tbl.setAttribute('border', '2')
  //   songs.forEach(song => {
  //     console.log(song)
  //     const row = document.createElement('tr')
  //     Object.values(song).forEach(text => {
  //       const cell = document.createElement('td')
  //       const textNode = document.createTextNode(text)
  //       cell.appendChild(textNode)
  //       row.appendChild(cell)
  //     })
  //     // table.appendChild(row)
  //   })
  console.log('generate table ran')
  return songs
}

function generateSong (data) {
  const song = data.song
  //   const btnGet = document.querySelector('button')
  const myTable = document.querySelector('#table')
  const headers = ['_id', 'title', 'artist', 'album', 'isrc', 'owner', 'createdAt', 'updatedAt', '__v']
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

  console.log(song)
  const row = document.createElement('tr')
  Object.values(song).forEach(text => {
    const cell = document.createElement('td')
    const textNode = document.createTextNode(text)
    cell.appendChild(textNode)
    row.appendChild(cell)

    table.appendChild(row)
  })
  myTable.appendChild(table)

  //   const body = document.getElementsByTagName('body')[0]

  //   const innerContents = data.JSONBody

  //   console.log(innerContents)
  //   // creates a <table> element and a <tbody> element
  //   const tbl = document.createElement('table')
  //   const tblBody = document.createElement('tbody')

  //   // creating all cells
  //   for (let i = 0; i < 2; i++) {
  //     // creates a table row
  //     const row = document.createElement('tr')

  //     for (let j = 0; j < 2; j++) {
  //       // Create a <td> element and a text node, make the text
  //       // node the contents of the <td>, and put the <td> at
  //       // the end of the table row
  //       const cell = document.createElement('td')
  //       const cellText = document.createTextNode('cell in row ' + i + ', column ' + j)
  //       cell.appendChild(cellText)
  //       row.appendChild(cell)
  //     }

  //     // add the row to the end of the table body
  //     tblBody.appendChild(row)
  //   }

  //   // put the <tbody> in the <table>
  //   tbl.appendChild(tblBody)
  //   // appends <table> into <body>
  //   body.appendChild(tbl)
  //   // sets the border attribute of tbl to 2;
  //   tbl.setAttribute('border', '2')
  //   songs.forEach(song => {
  //     console.log(song)
  //     const row = document.createElement('tr')
  //     Object.values(song).forEach(text => {
  //       const cell = document.createElement('td')
  //       const textNode = document.createTextNode(text)
  //       cell.appendChild(textNode)
  //       row.appendChild(cell)
  //     })
  //     // table.appendChild(row)
  //   })
  console.log('generate table ran')
  return song
}

module.exports = {
  generateTable,
  generateSong
}
