
/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/schema.sql
 *  to create the database and the tables.
 *
*/

DROP DATABASE IF EXISTS Members;

CREATE DATABASE Members;

USE Members;

CREATE TABLE MembersInfo (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  date DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
  First_Name VARCHAR(50) NOT NULL,
  Last_Name VARCHAR(50) NOT NULL,
  Email_Address VARCHAR(50) NOT NULL,
  Current_Employer VARCHAR(50) NOT NULL,
  Job_Title VARCHAR(50) NOT NULL,
  Time_Employed_At_Current_Job VARCHAR(50) NOT NULL,
  Reference VARCHAR(50) NOT NULL
  ); 

 INSERT INTO MembersInfo (id, date, First_Name, Last_Name, Email_Address, Current_Employer, Job_Title, Time_Employed_At_Current_Job, Reference) 
               VALUES (id, date, "Efrain", "Vasquez Arias", "efrain.vasquez.arias@gmail.com", "HolaCode", "Student", "4 Months", "Marco Castillo");


CREATE TABLE IF NOT EXISTS LoanRequestInfo (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  date DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
  First_Name VARCHAR(50) NOT NULL,
  Last_Name VARCHAR(50) NOT NULL,
  Amount_Requesting VARCHAR(50) NOT NULL,
  Reason_For_Request VARCHAR(200) NOT NULL
  );


INSERT INTO LoanRequestInfo (First_Name, Last_Name, Amount_Requesting, Reason_For_Request) 
               VALUES ("Efrain", "Vasquez Arias", "1000 Pesos", "no comment");


/*
*  the date can be rendered as a proper date using the following function:
*  function formatDate(date) {
*  var datestamp = new Date(date);
*  return datestamp.toDateString()
* }
* example when mapping---> info.map(e => ( <p>{formatDate(e.date)}</p> ))
*/

