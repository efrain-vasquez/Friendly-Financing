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

module.exports.getLoanRequestData = cb => {
  connection.query('SELECT * from LoanRequestInfo', (error, results) => {
    if (error) {
      throw error
    } else {
      console.log('this is getLoanRequestData from mysql query', results)
      cb(results)
    }
  })
}

module.exports.postLoanRequestData = function (First_Name, Last_Name, Amount_Requesting, Reason_For_Request, Willing_To_Finance_Loan, cb) {
  connection.query(
    'INSERT INTO LoanRequestInfo (First_Name, Last_Name, Amount_Requesting, Reason_For_Request, Willing_To_Finance_Loan) VALUES (?, ?, ?, ?, ?);',
    [First_Name, Last_Name, Amount_Requesting, Reason_For_Request, Willing_To_Finance_Loan],
    (error, results) => {
      if (error) {
        cb(error)
      } else {
        console.log('this is postLoanRequestData from mysql query', results)
        cb(results)
      }
    }
  )
}

module.exports.getLoanTermsData = cb => {
  connection.query('SELECT * from LoanTermsInfo', (error, results) => {
    if (error) {
      throw error
    } else {
      console.log('this is getLoanTermsRequestData from mysql query', results)
      cb(results)
    }
  })
}

module.exports.postLoanTermsData = function (id, Interest_On_Loan, Repayment_Schedule, Number_Of_Payments, Lenders_Pay_Pal_Info, Submit_Info, cb) {
  connection.query(
    'INSERT INTO LoanTermsInfo (id, Interest_On_Loan, Repayment_Schedule, Number_Of_Payments, Lenders_Pay_Pal_Info, Submit_Info) VALUES (?, ?, ?, ?, ?, ?);',
    [id, Interest_On_Loan, Repayment_Schedule, Number_Of_Payments, Lenders_Pay_Pal_Info, Submit_Info],
    (error, results) => {
      if (error) {
        cb(error)
      } else {
        console.log('this is postLoanTermsRequestData from mysql query', results)
        cb(results)
      }
    }
  )
}
