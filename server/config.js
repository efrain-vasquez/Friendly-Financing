const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const path = require('path')

const db = require('../database/mysql.js')
const app = express()

// middleware
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/../client/dist'))

/*
the two arguments that these requests take are
(name of the table in the database and the function used in your server/index.js
which is the functions your server uses to get and post data to your database)
*/
// HTTP Requests go here
app.get('/MembersInfo', getThisData)
app.post('/MembersInfo', postThisData)
app.get('/LoanRequestInfo', getThisLoanRequestData)
app.post('/LoanRequestInfo', postThisLoanRequestData)
app.get('/LoanTermsInfo', getThisLoanTermsData)
app.post('/LoanTermsInfo', postThisLoanTermsData)
app.get('/LoanTermsInfo', getTheIDFromLoanRequestInfo)

// react-router fallback so we can reload without visiting root
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'), function (err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

function getThisData (request, response) {
  db.getMyData(data => {
    response
      .status(200)
      .send(data)
  })
};

function postThisData (request, response) {
  const { First_Name, Last_Name, Email_Address, Current_Employer, Job_Title, Time_Employed_At_Current_Job, Reference } = request.body
  db.postMyData(First_Name, Last_Name, Email_Address, Current_Employer, Job_Title, Time_Employed_At_Current_Job, Reference, (res) => {
    response
      .status(200)
      .send(res)
      .end()
  })
};

function getThisLoanRequestData (request, response) {
  db.getLoanRequestData(data => {
    response
      .status(200)
      .send(data)
  })
};

function postThisLoanRequestData (request, response) {
  const { Loan_ID, First_Name, Last_Name, Amount_Requesting, Reason_For_Request } = request.body
  db.postLoanRequestData(Loan_ID, First_Name, Last_Name, Amount_Requesting, Reason_For_Request, (res) => {
    response
      .status(200)
      .send(res)
      .end()
  })
};

function getThisLoanTermsData (request, response) {
  db.getLoanTermsData(data => {
    response
      .status(200)
      .send(data)
  })
};

function postThisLoanTermsData (request, response) {
  const { MemberLoan_ID, Interest_On_Loan, Repayment_Schedule, Number_Of_Payments, Lenders_Pay_Pal_Info } = request.body
  db.postLoanTermsData(MemberLoan_ID, Interest_On_Loan, Repayment_Schedule, Number_Of_Payments, Lenders_Pay_Pal_Info, (res) => {
    response
      .status(200)
      .send(res)
      .end()
  })
};

function getTheIDFromLoanRequestInfo (request, response) {
  db.getIDFromLoanRequestInfo(dataIDFromLoanRequestInfo => {
    response
      .status(200)
      .send(dataIDFromLoanRequestInfo)
      .end()
  })
};

module.exports = app
