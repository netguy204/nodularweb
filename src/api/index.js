const express = require('express')
require('dotenv').config()

const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send({ message: 'Hello, smokey world' })
})

app.listen(port, () => console.log(`Example backend API listening on port ${port}!`))
