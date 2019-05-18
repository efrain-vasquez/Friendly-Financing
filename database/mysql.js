const mysql = require('mysql2')

// change database credentials as needed
const config = {
  host: 'localhost',
  user: 'root',
  password: 'Holacode',
  database: 'Members'
}

const connection = mysql.createConnection(config)

connection.connect(err => {
  if (err) {
    console.error('error connecting: ' + err.stack)
  }
})

module.exports.getMyData = cb => {
  connection.query('SELECT * from MembersInfo', (error, results) => {
    if (error) {
      throw error
    } else {
      console.log('this is getMyData from mysql query', results)
      cb(results)
    }
  })
}

module.exports.postMyData = function (First_Name, Last_Name, Email_Address, Current_Employer, Job_Title, Time_Employed_At_Current_Job, Reference, cb) {
  connection.query(
    'INSERT INTO MembersInfo (First_Name, Last_Name, Email_Address, Current_Employer, Job_Title, Time_Employed_At_Current_Job, Reference) VALUES (?, ?, ?, ?, ?, ?, ?);',
    [First_Name, Last_Name, Email_Address, Current_Employer, Job_Title, Time_Employed_At_Current_Job, Reference],
    (error, results) => {
      if (error) {
        cb(error)
      } else {
        console.log('this is postMyData from mysql query', results)
        cb(results)
      }
    }
  )
}
