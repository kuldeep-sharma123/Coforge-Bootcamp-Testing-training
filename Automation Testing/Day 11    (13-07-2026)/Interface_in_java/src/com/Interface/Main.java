package com.Interface;

interface FirstInterface{
	public void myMethod();
}
interface SecondInterface{
	public void myotherMethod();
}

class Democlass implements FirstInterface,SecondInterface{
	public void myMethod() {
		System.out.println("Enter Some text..");
	}
	public void myotherMethod() {
		System.out.println("Enter some other text..");
	}
}

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Democlass obj1=new Democlass();
		obj1.myMethod();
		obj1.myotherMethod();

	}

}
