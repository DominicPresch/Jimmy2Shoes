const express = require('express')
const path = require('path')
const app = express()
const port = 8080
const page_template = require(path.join(__dirname, 'templates/page_template.js'))
const contact_template = require(path.join(__dirname, 'templates/contact_template.js'))
const bodyParser = require('body-parser')
const test_user = {
    fname: 'Dominic',
    lname: 'Presch',
    address: '9352 fake street',
    phone: '123-456-7891',
    bday: 'January 1, 1981',
    notes: 'learning to program node.js'
}

app.use('/static', express.static(path.join(__dirname, 'public')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/contact_input', (req, res) =>{
    res.send(page_template(`<form action="/form_submit" method="POST">
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname">
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname">
        <label for="adress">Address:</label>
        <input type="text" id="address" name="address">
        <label for="phone">Phone Number:</label>
        <input type="text" id="phone" name="phone">
        <label for="bday">Birthday:</label>
        <input type="text" id="bday" name="bday">
        <label for="notes">Notes:</label>
        <input type="text" id="notes" name="notes">
        <input type="submit">Submit!</input>		
        </form>`, 'Contact Input page'))
})

app.post('/form_submit', (req, res) =>{
    console.log(req.body)
	res.send(page_template(contact_template(req.body), 'Contact page'))
})

app.get('/example/with/title', (req, res) => {
    res.send(page_template('This is an example page.', 'This is an example title'))
})

app.listen(port, () => {
    console.log(`Server started listening on http://localhost:${port}`)
})
