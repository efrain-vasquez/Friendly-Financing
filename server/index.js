const app = require('./config.js')
const db = require('../database/mysql.js')

const port = (process.env.PORT || 3000)

app.listen(port, () => {
  console.log(`Listening on Port ${port}`)
})
