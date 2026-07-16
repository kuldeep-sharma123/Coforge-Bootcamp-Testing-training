package com.Constructors;

public class C_01_overloadingArgumentType {
	
	public C_01_overloadingArgumentType(int a,int b) {
		int c=a+b;
		System.out.println("Summation is "+c);
		}
	public C_01_overloadingArgumentType(double a,double b) {
		double c=a+b;
		System.out.println("summation is "+c);
	}
	
	public void display() {
		System.out.println("construction overloading is working successfully");
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		C_01_overloadingArgumentType obj1=new C_01_overloadingArgumentType(10,20);
		obj1.display();
		C_01_overloadingArgumentType obj2=new C_01_overloadingArgumentType(20.55,20.33);
		obj2.display();

	}

}
