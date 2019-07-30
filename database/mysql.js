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

module.exports.postLoanRequestData = function (Loan_ID, First_Name, Last_Name, Amount_Requesting, Reason_For_Request, Loanee_Pay_Pal_Info, cb) {
  connection.query(
    'INSERT INTO LoanRequestInfo (Loan_ID, First_Name, Last_Name, Amount_Requesting, Reason_For_Request, Loanee_Pay_Pal_Info) VALUES (?, ?, ?, ?, ?, ?);',
    [Loan_ID, First_Name, Last_Name, Amount_Requesting, Reason_For_Request, Loanee_Pay_Pal_Info],
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

module.exports.postLoanTermsData = function (Loanee_Loan_ID, Loan_Amount, Interest_On_Loan, Repayment_Schedule, Number_Of_Payments, Amount_Per_Payment, Loanee_Pay_Pal_Data, Lenders_Pay_Pal_Info, cb) {
  connection.query(
    'INSERT INTO LoanTermsInfo (Loanee_Loan_ID, Loan_Amount, Interest_On_Loan, Repayment_Schedule, Number_Of_Payments, Amount_Per_Payment, Loanee_Pay_Pal_Data, Lenders_Pay_Pal_Info) VALUES (?, ?, ?, ?, ?, ?, ?, ?);',
    [Loanee_Loan_ID, Loan_Amount, Interest_On_Loan, Repayment_Schedule, Number_Of_Payments, Amount_Per_Payment, Loanee_Pay_Pal_Data, Lenders_Pay_Pal_Info],
    (error, results) => {
      if (error) {
        cb(error)
      } else {
        cb(results)
      }
    }
  )
}

module.exports.getCreatedLoanTermsData = cb => {
  connection.query('SELECT * from CreatedLoansInfo', (error, results) => {
    if (error) {
      throw error
    } else {
      cb(results)
    }
  })
}

module.exports.postCreatedLoanTermsData = function (Accepted_Loanee_Loan_ID, Accepted_Loan_Amount, Accepted_Interest_On_Loan, Accepted_Repayment_Schedule, Accepted_Number_Of_Payments, Accepted_Amount_Per_Payment, Accepted_Loanee_Pay_Pal_Data, Accepted_Lenders_Pay_Pal_Info, cb) {
  connection.query(
    'INSERT INTO CreatedLoansInfo (Accepted_Loanee_Loan_ID, Accepted_Loan_Amount, Accepted_Accepted_Interest_On_Loan, Accepted_Repayment_Schedule, Accepted_Number_Of_Payments, Accepted_Amount_Per_Payment, Accepted_Loanee_Pay_Pal_Data, Accepted_Lenders_Pay_Pal_Info) VALUES (?, ?, ?, ?, ?, ?, ?, ?);',
    [Accepted_Loanee_Loan_ID, Accepted_Loan_Amount, Accepted_Interest_On_Loan, Accepted_Repayment_Schedule, Accepted_Number_Of_Payments, Accepted_Amount_Per_Payment, Accepted_Loanee_Pay_Pal_Data, Accepted_Lenders_Pay_Pal_Info],
    (error, results) => {
      if (error) {
        cb(error)
      } else {
        cb(results)
      }
    }
  )
}
