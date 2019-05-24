// exports.register = function (req, res) {
//   // console.log("req",req.body);
//   var today = new Date()
//   var users = {
//     'first_name': req.body.first_name,
//     'last_name': req.body.last_name,
//     'email': req.body.email,
//     'password': req.body.password,
//     'created': today,
//     'modified': today
//   }
//   connection.query('INSERT INTO users SET ?', users, function (error, results, fields) {
//     if (error) {
//       console.log('error ocurred', error)
//       res.send({
//         'code': 400,
//         'failed': 'error ocurred'
//       })
//     } else {
//       console.log('The solution is: ', results)
//       res.send({
//         'code': 200,
//         'success': 'user registered sucessfully'
//       })
//     }
//   })
// }

// exports.login = function (req, res) {
//   var email = req.body.email
//   var password = req.body.password
//   connection.query('SELECT * FROM users WHERE email = ?', [email], function (error, results, fields) {
//     if (error) {
//     // console.log("error ocurred",error);
//       res.send({
//         'code': 400,
//         'failed': 'error ocurred'
//       })
//     } else {
//     // console.log('The solution is: ', results);
//       if (results.length > 0) {
//         if (results[0].password == password) {
//           res.send({
//             'code': 200,
//             'success': 'login sucessfull'
//           })
//         } else {
//           res.send({
//             'code': 204,
//             'success': 'Email and password does not match'
//           })
//         }
//       } else {
//         res.send({
//           'code': 204,
//           'success': 'Email does not exits'
//         })
//       }
//     }
//   })
// }

// config.js

// const express = require('express')
// const bodyParser = require('body-parser')
// const compression = require('compression')
// const path = require('path')
// var login = require('./routes/loginroutes')
// const db = require('../database/mysql.js')
// const app = express()

// // middleware
// app.use(compression())
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(express.static(__dirname + '/../client/dist'))

// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
//   next()
// })
// var router = express.Router()
// // test route
// router.get('/', function (req, res) {
//   res.json({ message: 'welcome to our upload module apis' })
// })

// the two arguments that these requests take are
// (name of the table in the database and the function used in your server/index.js
// which is the functions your server uses to get and post data to your database)

// app.get('/MembersInfo', getThisData)
// app.post('/MembersInfo', postThisData)
// app.get('/LoanRequestInfo', getThisLoanRequestData)
// app.post('/LoanRequestInfo', postThisLoanRequestData)
// // route to handle user registration
// router.post('/register', login.register)
// router.post('/login', login.login)
// app.use('/api', router)
// app.listen(5000)

// // react-router fallback so we can reload without visiting root
// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, '/../client/dist/index.html'), function (err) {
//     if (err) {
//       res.status(500).send(err)
//     }
//   })
// })

// function getThisData (request, response) {
//   console.log('getThisData server fires')
//   db.getMyData(data => {
//     response
//       .status(200)
//       .send(data)
//   })
// };

// function postThisData (request, response) {
//   console.log(response)
//   const { First_Name, Last_Name, Email_Address, Current_Employer, Job_Title, Time_Employed_At_Current_Job, Reference } = request.body
//   db.postMyData(First_Name, Last_Name, Email_Address, Current_Employer, Job_Title, Time_Employed_At_Current_Job, Reference, (res) => {
//     response
//       .status(200)
//       .send(res)
//       .end()
//   })
// };

// function getThisLoanRequestData (request, response) {
//   console.log('getThisLoanRequestData server fires')
//   db.getLoanRequestData(data => {
//     response
//       .status(200)
//       .send(data)
//   })
// };

// function postThisLoanRequestData (request, response) {
//   console.log(response)
//   const { First_Name, Last_Name, Amount_Requesting, Reason_For_Request } = request.body
//   db.postLoanRequestData(First_Name, Last_Name, Amount_Requesting, Reason_For_Request, (res) => {
//     response
//       .status(200)
//       .send(res)
//       .end()
//   })
// };

// module.exports = app

// schema

// CREATE TABLE IF NOT EXISTS `users` (
//  `id` int(11) NOT NULL AUTO_INCREMENT,
//  `first_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
//  `last_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
//  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
//  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
//  `created` datetime NOT NULL,
//  `modified` datetime NOT NULL,
//  PRIMARY KEY (`id`)
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
