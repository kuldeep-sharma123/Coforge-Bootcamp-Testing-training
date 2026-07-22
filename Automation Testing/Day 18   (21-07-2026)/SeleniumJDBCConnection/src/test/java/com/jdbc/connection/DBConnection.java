package com.jdbc.connection;

import java.sql.Connection;
import java.sql.DriverManager;

public class DBConnection {
	public static void main(String args []) {
		try {
			Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/seleniumautomation","root","Kuldeep@sharma123");
			System.out.println("Database connected Successfully");
			con.close();
		}catch(Exception e) {
			e.printStackTrace();
		}
	}

}
