package com.CRUDoperationinsql;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

import org.testng.annotations.Test;
@Test
public class InsertValue {
	
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
       
       String query="Insert into book_detl values('Ai001','postman','API','kuldeep','abs','5','2026','3782')";
     //  String query="UPDATE book_detl Set author='ram' where book_no='ai001'";
       stmt.execute(query);
       con.close();
       System.out.println("statement is inserted");
}}
