package com.jdbc.connection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import org.testng.annotations.Test;

public class DatabaseTesting {
	private Connection connection;
	
	@Test
	public void establishDatabaseConnection() throws ClassNotFoundException, SQLException {
		String databaseURL="jdbc:mysql://localhost:3306/seleniumautomation";
		String user="root";
		String password="Kuldeep@sharma123";
		
		Class.forName("com.mysql.cj.jdbc.Driver");
		System.out.println("Connecting to Database");
		connection=DriverManager.getConnection(databaseURL,user,password);
		
		if(connection==null) {
			System.out.println("Database connection failed");
			
		}else {
			System.out.println("Database connection successful");
		}
	}
}
