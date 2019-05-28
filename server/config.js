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

// react-router fallback so we can reload without visiting root
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'), function (err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

function getThisData (request, response) {
  console.log('getThisData server fires')
  db.getMyData(data => {
    response
      .status(200)
      .send(data)
  })
};

function postThisData (request, response) {
  console.log(response)
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
  console.log(response)
  const { First_Name, Last_Name, Amount_Requesting, Reason_For_Request, Willing_To_Finance_Loan } = request.body
  db.postLoanRequestData(First_Name, Last_Name, Amount_Requesting, Reason_For_Request, Willing_To_Finance_Loan, (res) => {
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
  console.log(response)
  const { id, Interest_On_Loan, Repayment_Schedule, Number_Of_Payments, Lenders_Pay_Pal_Info } = request.body
  db.postLoanTermsData(id, Interest_On_Loan, Repayment_Schedule, Number_Of_Payments, Lenders_Pay_Pal_Info, (res) => {
    response
      .status(200)
      .send(res)
      .end()
  })
};

module.exports = app
