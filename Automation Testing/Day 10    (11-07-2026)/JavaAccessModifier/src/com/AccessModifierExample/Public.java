package com.AccessModifierExample;

public class Public extends B {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Public  obj=new Public();
		int output =obj.x;
		System.out.println("Value of x is "+ output);
		obj.b1();

	}

}
