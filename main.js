const path = require('path')
const express = require('express')
const app = express()
const port = 8080
const page_template = require(path.join(__dirname, 'templates/page_template.js'))
const contact_template = require(path.join(__dirname, 'templates/contact_template.js'))
const test_user = {
    fname: 'Dominic',
    lname: 'Presch',
    address: '9352 fake street',
    phone: '123-456-7891',
    bday: 'January 1, 1981',
    notes: 'learning to program node.js'
}

app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/contact', (req, res) => {
  res.send(page_template(contact_template(test_user), 'Contact page'))
})

app.get('/example/with/title', (req, res) => {
  res.send(page_template('This is an example page.', 'This is an example title'))
})

app.listen(port, () => {
  console.log(`Server started listening on http://localhost:${port}`)
})
