package com.Constructors;

public class C_01_constructor {
	
	public C_01_constructor() {
		System.out.println("This is the contructor block");
	}
	
	public void method() {
		System.out.println("This is the method block");
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		C_01_constructor obj=new C_01_constructor();  //Default constructor
		//construction block will be automatically involked
		
		//Need to call explicitly for the method
		obj.method();

	}

}
