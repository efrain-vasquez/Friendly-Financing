
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
               VALUES ("Efrain", "Vasquez Arias", "efrain.vasquez.arias@gmail.com", "HolaCode", "Student", "5 Months", "Marco Castillo");

 INSERT INTO MembersInfo (First_Name, Last_Name, Email_Address, Current_Employer, Job_Title, Time_Employed_At_Current_Job, Reference) 
               VALUES ("Alex", "Gonzalez", "alexgonzalez@gmail.com", "HolaCode", "Student", "5 Months", "Pancho");


CREATE TABLE IF NOT EXISTS LoanRequestInfo (
  Loan_ID INT NOT NULL AUTO_INCREMENT,
  First_Name VARCHAR(50) NOT NULL,
  Last_Name VARCHAR(50) NOT NULL,
  Amount_Requesting VARCHAR(50) NOT NULL,
  Reason_For_Request VARCHAR(200) NOT NULL,
  PRIMARY KEY (Loan_ID)
  );


INSERT INTO LoanRequestInfo (Loan_ID, First_Name, Last_Name, Amount_Requesting, Reason_For_Request) 
               VALUES (Loan_ID, "Efrain", "Vasquez Arias", "1000 Pesos", "no comment");

INSERT INTO LoanRequestInfo (Loan_ID, First_Name, Last_Name, Amount_Requesting, Reason_For_Request) 
               VALUES (Loan_ID, "Alex", "Gonzalez", "8000 Pesos", "To Purchase A Laptop");



CREATE TABLE IF NOT EXISTS LoanTermsInfo (
  ID INT NOT NULL AUTO_INCREMENT,
  MemberLoan_ID INT NOT NULL,
  Interest_On_Loan VARCHAR(50) NOT NULL,
  Repayment_Schedule VARCHAR(50) NOT NULL,
  Number_Of_Payments VARCHAR(50) NOT NULL,
  Lenders_Pay_Pal_Info VARCHAR(99) NOT NULL,
  Primary KEY (ID)
  );




/*
//INSERT INTO LoanTermsInfo (MemberLoan_ID, Interest_On_Loan, Repayment_Schedule, Number_Of_Payments, Lenders_Pay_Pal_Info) 
               //VALUES (MemberLoan_ID, "10 percent", "Weekly", "7 Payments", "My pay pal info");


-- SELECT Loan_ID,First_Name, Last_Name,Amount_Requesting, Reason_For_Request,ID,
-- Interest_On_Loan, Repayment_Schedule,Number_Of_Payments,Lenders_Pay_Pal_Info FROM LoanRequestInfo LEFT JOIN 
-- LoanTermsInfo ON LoanRequestInfo.Loan_ID = LoanTermsInfo.MemberLoan_ID;
/*
*  the date can be rendered as a proper date using the following function:
*  function formatDate(date) {
*  var datestamp = new Date(date);
*  return datestamp.toDateString()
* }
* example when mapping---> info.map(e => ( <p>{formatDate(e.date)}</p> ))
*/
//FOREIGN KEY (MemberLoan_ID) REFERENCEs LoanRequestInfo(Loan_ID)
*/
