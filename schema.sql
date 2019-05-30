
/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/schema.sql
 *  to create the database and the tables.
 *
*/

DROP DATABASE IF EXISTS Members;

CREATE DATABASE Members;

USE Members;

CREATE TABLE IF NOT EXISTS MembersInfo (
  First_Name VARCHAR(50) NOT NULL,
  Last_Name VARCHAR(50) NOT NULL,
  Email_Address VARCHAR(50) NOT NULL,
  Current_Employer VARCHAR(50) NOT NULL,
  Job_Title VARCHAR(50) NOT NULL,
  Time_Employed_At_Current_Job VARCHAR(50) NOT NULL,
  Reference VARCHAR(50) NOT NULL
  ); 

 INSERT INTO MembersInfo (First_Name, Last_Name, Email_Address, Current_Employer, Job_Title, Time_Employed_At_Current_Job, Reference) 
               VALUES ("Efrain", "Vasquez Arias", "efrain.vasquez.arias@gmail.com", "HolaCode", "Student", "4 Months", "Marco Castillo");


CREATE TABLE IF NOT EXISTS LoanRequestInfo (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  First_Name VARCHAR(50) NOT NULL,
  Last_Name VARCHAR(50) NOT NULL,
  Amount_Requesting VARCHAR(50) NOT NULL,
  Reason_For_Request VARCHAR(200) NOT NULL,
  Willing_To_Finance_Loan VARCHAR(50) NOT NULL
  );


INSERT INTO LoanRequestInfo (First_Name, Last_Name, Amount_Requesting, Reason_For_Request, Willing_To_Finance_Loan) 
               VALUES ("Efrain", "Vasquez Arias", "1000 Pesos", "no comment", "hello");




CREATE TABLE IF NOT EXISTS LoanTermsInfo (
  
  Interest_On_Loan VARCHAR(50) NOT NULL,
  Repayment_Schedule VARCHAR(50) NOT NULL,
  Number_Of_Payments VARCHAR(50) NOT NULL,
  Lenders_Pay_Pal_Info VARCHAR(99) NOT NULL
  );


INSERT INTO LoanTermsInfo (Interest_On_Loan, Repayment_Schedule, Number_Of_Payments, Lenders_Pay_Pal_Info) 
               VALUES ("10 percent", "Weekly", "7", "My pay pal info");


/*
*  the date can be rendered as a proper date using the following function:
*  function formatDate(date) {
*  var datestamp = new Date(date);
*  return datestamp.toDateString()
* }
* example when mapping---> info.map(e => ( <p>{formatDate(e.date)}</p> ))
*/

