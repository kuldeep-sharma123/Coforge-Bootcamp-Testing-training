package com.DecisionMakingControlStatement;

public class Login_validation {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String username= "Admin";
		String password="password123";
		
		if(username.equals("Admin")& password.equals("password123")) {
			System.out.println("Successfull Login");
		}else {
			System.out.println("Wrong Credentials");
		}
	}

}
