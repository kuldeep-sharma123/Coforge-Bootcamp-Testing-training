package com.MethodOverriding;

class Bank{
	public void calculateInterest() {
		System.out.println("General Interest Calculation");
	}
}
class SBI extends Bank{
	@Override
	public void calculateInterest() {
		System.out.println("SBI Interest = 6.5%");
		
	}
}

class Hdfc extends Bank
{
	@Override
	public void calculateInterest() {
		System.out.println("Hdfc Interest = 7%");
	}
}

public class BankTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		SBI sbi=new SBI();
		sbi.calculateInterest();
		Hdfc hdfc=new Hdfc();
		hdfc.calculateInterest();

	}

}
