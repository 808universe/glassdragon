const http = require('http')
const express = require('express')
const fs = require('fs')
const app = express()
app.use(express.json())
const port = 8080;
let notes = {
    "testtitle":  "This note exists, and it will exist until I delete it."
}

app.get('/', (req, res) => {
    res.send('welcome borther. if you see this afer opening up localhost:8080, that means, the server is up and running and ready to take your requests.')
})
app.get('/allnotes', (req, res) => {
    //res.sendFile('index.html', { root: __dirname })
    res.send(notes)
})
app.get('/note/:title', (req, res) => {
    //res.sendFile('index.html', { root: __dirname })
    //res.send(notes)
    const title = req.params.title
    console.log(title)
    if(notes[title] == null) {
        res.sendStatus(404)
    }
    else {
        res.send(notes[title])
    }
})
app.delete('/note/:title', (req, res) => {
    const title = req.params.title
    console.log(title)
    delete notes[title];
    res.sendStatus(200)
})
app.post('/note/:title', (req, res) => {
    const title = req.params.title
    console.log(title)
    const body = req.body
    console.log(body)
    notes[title] = body
    res.sendStatus(200)
})
app.listen(port, () => {
    console.log('go here dumbass: http://localhost:8080')
})