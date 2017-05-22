const path = require('path')
const express = require('express')
const app = express()
const port = 8080
const template = require(path.join(__dirname, 'page_template.js'))

app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/example', (req, res) => {
  res.send(template('This is an example page.'))
})

app.get('/example/with/title', (req, res) => {
  res.send(template('This is an example page.', 'This is an example title'))
})

app.listen(port, () => {
  console.log(`Server started listening on http://localhost:${port}`)
})
