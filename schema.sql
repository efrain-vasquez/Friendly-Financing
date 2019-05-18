// schema.sql

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


 


/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/schema.sql
 *  to create the database and the tables.
 *
 */

 INSERT INTO MembersInfo (First_Name, Last_Name, Email_Address, Current_Employer, Job_Title, Time_Employed_At_Current_Job, Reference) 
               VALUES ("Efrain", "Vasquez Arias", "efrain.vasquez.arias@gmail.com", "not employed", "student", "4 months", "Marco Castillo");
 

 /*
*  the date can be rendered as a proper date using the following function:
*  function formatDate(date) {
*  var datestamp = new Date(date);
*  return datestamp.toDateString()
* }
* example when mapping---> info.map(e => ( <p>{formatDate(e.date)}</p> ))