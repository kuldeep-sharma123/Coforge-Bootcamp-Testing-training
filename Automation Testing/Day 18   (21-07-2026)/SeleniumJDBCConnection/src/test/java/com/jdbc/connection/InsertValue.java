package com.jdbc.connection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

import org.testng.annotations.Test;

public class InsertValue {
	
	     @Test
		 public static void main(String[] args) throws Exception {

	       // Database Connection Parameters
	       String url = "jdbc:mysql://localhost:3306/seleniumautomation";
	       String username = "root";
	       String password = "Kuldeep@sharma123";

	       // Load MySQL JDBC Driver
	       Class.forName("com.mysql.cj.jdbc.Driver");

	       // Establish Database Connection
	       Connection con = DriverManager.getConnection(url, username, password);

	       // Create Statement
	       Statement stmt = con.createStatement();
	       
	      // String query="Insert into book_detl values('Ai001','postman','API','kuldeep','abs','5','2026','3782')";
	     // String query="UPDATE book_detl Set author='ram' where book_no='ai001'";
	       String query="Delete from book_detl where book_no='Ai001'";
	       stmt.execute(query);
	       con.close();
	       System.out.println("statement is inserted");
	}

}
