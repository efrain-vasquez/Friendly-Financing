
/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/schema.sql
 *  to create the database and the tables.
 *
*/

DROP DATABASE IF EXISTS Members;

CREATE DATABASE Members;

USE Members;

CREATE TABLE IF NOT EXISTS MembersInfo (
  ID INT NOT NULL AUTO_INCREMENT,
  First_Name VARCHAR(50) NOT NULL,
  Last_Name VARCHAR(50) NOT NULL,
  Email_Address VARCHAR(50) NOT NULL,
  Current_Employer VARCHAR(50) NOT NULL,
  Job_Title VARCHAR(50) NOT NULL,
  Time_Employed_At_Current_Job VARCHAR(50) NOT NULL,
  Reference VARCHAR(50) NOT NULL,
  Primary KEY (ID)
  ); 

 INSERT INTO MembersInfo (First_Name, Last_Name, Email_Address, Current_Employer, Job_Title, Time_Employed_At_Current_Job, Reference) 
               VALUES ("Efrain", "Vasquez Arias", "efrain.vasquez.arias@gmail.com", "HolaCode", "Student", "5 Months", "");

 INSERT INTO MembersInfo (First_Name, Last_Name, Email_Address, Current_Employer, Job_Title, Time_Employed_At_Current_Job, Reference) 
               VALUES ("Alex", "Gonzalez", "alexgonzalez@gmail.com", "HolaCode", "Student", "5 Months", "Efrain Vasquez");

 INSERT INTO MembersInfo (First_Name, Last_Name, Email_Address, Current_Employer, Job_Title, Time_Employed_At_Current_Job, Reference) 
               VALUES ("Juan", "Hernandez", "juanhernandez@gmail.com", "TelCel", "Sales Manager", "3 years", "Alex Gonzalez");



CREATE TABLE IF NOT EXISTS LoanRequestInfo (
  Loan_ID INT NOT NULL AUTO_INCREMENT,
  First_Name VARCHAR(50) NOT NULL,
  Last_Name VARCHAR(50) NOT NULL,
  Amount_Requesting VARCHAR(50) NOT NULL,
  Reason_For_Request VARCHAR(200) NOT NULL,
  Loanee_Pay_Pal_Info VARCHAR(50) NOT NULL,
  PRIMARY KEY (Loan_ID)
  );

INSERT INTO LoanRequestInfo (Loan_ID, First_Name, Last_Name, Amount_Requesting, Reason_For_Request, Loanee_Pay_Pal_Info) 
               VALUES (Loan_ID, "Efrain", "Vasquez Arias", "1000", "no comment", "Efrain's Pay Pal Info");

INSERT INTO LoanRequestInfo (Loan_ID, First_Name, Last_Name, Amount_Requesting, Reason_For_Request, Loanee_Pay_Pal_Info) 
               VALUES (Loan_ID, "Alex", "Gonzalez", "8000", "To Purchase A Laptop", "Alex's Pay Pal Info");

CREATE TABLE IF NOT EXISTS LoanTermsInfo (
  ID INT NOT NULL AUTO_INCREMENT,
  Loanee_Loan_ID INT NOT NULL,
  Loan_Amount VARCHAR(50) NOT NULL,
  Interest_On_Loan VARCHAR(50) NOT NULL,
  Repayment_Schedule VARCHAR(50) NOT NULL,
  Number_Of_Payments VARCHAR(50) NOT NULL,
  Amount_Per_Payment VARCHAR(10) NOT NULL,
  Loanee_Pay_Pal_Data VARCHAR(50) NOT NULL,
  Lenders_Pay_Pal_Info VARCHAR(99) NOT NULL,
  Primary KEY (ID)
  );


CREATE TABLE IF NOT EXISTS CreatedLoansInfo (
  ID INT NOT NULL AUTO_INCREMENT,
  Accepted_Loanee_Loan_ID INT NOT NULL,
  Accepted_Loan_Amount VARCHAR(50) NOT NULL,
  Accepted_Interest_On_Loan INT(3) NOT NULL,
  Accepted_Repayment_Schedule VARCHAR(50) NOT NULL,
  Accepted_Number_Of_Payments INT(10) NOT NULL,
  Accepted_Amount_Per_Payment INT(10) NOT NULL,
  Accepted_Loanee_Pay_Pal_Data VARCHAR(50) NOT NULL,
  Accepted_Lenders_Pay_Pal_Info VARCHAR(99) NOT NULL,
  Primary KEY (ID)
  );

INSERT INTO CreatedLoansInfo (Accepted_Loanee_Loan_ID, Accepted_Loan_Amount, Accepted_Interest_On_Loan, Accepted_Repayment_Schedule, Accepted_Number_Of_Payments, Accepted_Amount_Per_Payment, Accepted_Loanee_Pay_Pal_Data, Accepted_Lenders_Pay_Pal_Info) 
                VALUES (3, "5000", "25", "Monthly", "5", "1250", "Maria's Pay Pal Info", "Juan's Pay Pal Info");

-- INSERT INTO LoanTermsInfo (Loanee_Loan_ID, Loan_Amount, Interest_On_Loan, Repayment_Schedule, Number_Of_Payments, Amount_Per_Payment, Loanee_Pay_Pal_Data, Lenders_Pay_Pal_Info) 
--                VALUES (Loanee_Loan_ID, 8000, 10, "Weekly", 7, 1000, "My pay pal info", "Your Pay Pal Info");

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

//INSERT INTO LoanTermsInfo (Loanee_Loan_ID, Loan_Amount, Interest_On_Loan, Repayment_Schedule, Number_Of_Payments, Amount_Per_Payment, Loanee_Pay_Pal_Data, Lenders_Pay_Pal_Info) 
  //              VALUES (2, "8000", "10", "Weekly", "10", "880", "Alex's pay pal Info", "Lender's Pay Pal Info");
