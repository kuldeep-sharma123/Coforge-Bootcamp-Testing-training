package com.AccessModifierExample;
class A{
	int x=100;
}

public class Private {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		A obj=new A();
		int output=obj.x;
		System.out.println("output is:"+output);
	}

}
