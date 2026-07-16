package com.ExceptionHandling;

public class CheakedException_ThrowsDeclaration {
	int x=143;
	public void m1() {
		System.out.println("Value of x is "+x);
	}

	public static void main(String[] args) throws InterruptedException {
		// TODO Auto-generated method stub
		CheakedException_ThrowsDeclaration obj1=new CheakedException_ThrowsDeclaration() ;
		obj1.m1();
		Thread.sleep(0);

}}
