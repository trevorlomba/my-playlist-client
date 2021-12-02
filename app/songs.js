const getFormFields = require('./../lib/get-form-fields')
// const config = require('./config.js')

$('#create-song').on('submit', function (event) {
  event.preventDefault()

  const form = event.target
  const bookData = getFormFields(form)
  console.log(bookData) // returned JavaScript object
})
