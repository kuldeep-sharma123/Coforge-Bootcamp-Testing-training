package com.ExceptionHandling;

public class CheckedException_tryCatch {
	int x=10;
	public void m1() {
		System.out.println("Value of x is"+x);
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		CheckedException_tryCatch obj1=new CheckedException_tryCatch() ;
		obj1.m1();
		try {
			Thread.sleep(1000);
		}catch(InterruptedException e) {
			e.printStackTrace();
		}

	}

}
