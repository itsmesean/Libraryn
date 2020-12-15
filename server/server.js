const express = require('express')
const app = express()
const path = require('path')

app.use('/', (req, res) => res.send('hello'))

app.listen(5555, console.log('listening on port 5555'));