package com.Constructors;
//constructor using instance variable

public class Website {
	
	String webName;
	int webAge;
	
	Website(String name,int age){
		this.webName=name;
		this.webAge=age;
		
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Website obj1=new Website("Kuldeep",21);
		Website obj2=new Website("https://www.google.com/",18);
		System.out.println(obj1.webName +" "+obj1.webAge);
		System.out.println(obj2.webName +" "+obj2.webAge);
		

	}

}
