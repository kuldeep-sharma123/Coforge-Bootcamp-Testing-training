package com.jdbc.connection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

import org.testng.annotations.Test;

public class DatabaseTest {
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

        // Execute Query
        String query = "SELECT * FROM seleniumautomation.book_detl;";
        ResultSet rs = stmt.executeQuery(query);

        // Process the Results
        while (rs.next()) {
            String auth=rs.getString("author");
            String tit=rs.getString("title");
            System.out.println("author: "+auth+" title: "+tit);
        }

      
        con.close();

      

}}
