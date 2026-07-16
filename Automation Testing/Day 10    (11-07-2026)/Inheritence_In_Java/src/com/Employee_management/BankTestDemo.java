
package com.Employee_management;

class Account {

	String accountholder="Kuldeep Sharma";
	double balance=10000;
	public void deposit(double amount) {
		balance=balance+amount;
		System.out.println("Amount deposited "+amount);

	}
	public void withdraw(double amount) {
		balance=balance-amount;
		System.out.println("Amount Withdraw "+ amount);
	}
	public void displaybalance() {
		System.out.println("current balance "+balance);
	}

}
class SavingAccount extends Account{
	
	public void calculateInterest() {
		double interest=balance*5/100;
		System.out.println("Interest Earned "+ interest);
		
	}
	
}
public class BankTestDemo {
	public static void main(String args []) {
		SavingAccount sa=new SavingAccount();
		System.out.println("Account Holder "+ sa.accountholder);
		sa.deposit(500);
		sa.withdraw(2000);
		sa.displaybalance();
		sa.calculateInterest();
	}
}