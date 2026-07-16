package com.AbstractionTestDemo;



abstract class Bank{
	public void deposit() {
		System.out.println("Money Depositted ");
	}
	public void withdraw() {
		System.out.println("Money Withdrawn");
	}
	abstract void calculateInterest() ;
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

public class BankTestDemo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		SBI sbi=new SBI();
		sbi.deposit();
		sbi.withdraw();
		sbi.calculateInterest();
		Hdfc hdfc=new Hdfc();
		hdfc.calculateInterest();


	}

}
