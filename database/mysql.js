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
      cb(results)
    }
  })
}

module.exports.postLoanRequestData = function (Loan_ID, First_Name, Last_Name, Amount_Requesting, Reason_For_Request, cb) {
  connection.query(
    'INSERT INTO LoanRequestInfo (Loan_ID, First_Name, Last_Name, Amount_Requesting, Reason_For_Request) VALUES (?, ?, ?, ?, ?);',
    [Loan_ID, First_Name, Last_Name, Amount_Requesting, Reason_For_Request],
    (error, results) => {
      if (error) {
        cb(error)
      } else {
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
      cb(results)
    }
  })
}

module.exports.postLoanTermsData = function (MemberLoan_ID, Interest_On_Loan, Repayment_Schedule, Number_Of_Payments, Lenders_Pay_Pal_Info, cb) {
  connection.query(
    'INSERT INTO LoanTermsInfo (MemberLoan_ID, Interest_On_Loan, Repayment_Schedule, Number_Of_Payments, Lenders_Pay_Pal_Info) VALUES (?, ?, ?, ?, ?);',
    [MemberLoan_ID, Interest_On_Loan, Repayment_Schedule, Number_Of_Payments, Lenders_Pay_Pal_Info],
    (error, results) => {
      if (error) {
        cb(error)
      } else {
        cb(results)
      }
    }
  )
}

module.exports.getIDFromLoanRequestInfo = cb => {
  connection.query('SELECT Loan_ID FROM LoanRequestInfo', (error, resultsIDFromLoanRequestInfo) => {
    if (error) {
      throw error
    } else {
      console.log('this is from mysql getIDFromLoanRequestInfo query', resultsIDFromLoanRequestInfo)
      cb(resultsIDFromLoanRequestInfo)
    }
  })
}
