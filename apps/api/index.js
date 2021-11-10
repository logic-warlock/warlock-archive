const express = require('express')

const PORT = process.env.PORT || 8080
const app = express()

app.get('/', (req, res) => {
  res.send({
    message: `Hello, ${req.query.name || 'World'}`,
  })
})

app.listen(PORT, () => console.log(`Example API listening on port ${PORT}`))
