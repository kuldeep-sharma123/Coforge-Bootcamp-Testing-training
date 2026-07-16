package com.Method_overloading;

public class MoneyTransfer {
	
	public void transfer(double amount) {
		System.out.println("Transfer Amount "+ amount);
	}
	public void transfer(double amount ,String accountnumber) {
		System.out.println("Transfer "+ amount+" to account "+ accountnumber);
	}
	
	public void transfer(double amount,String accountnumber,String remark) {
		System.out.println("Transfered "+amount);
		System.out.println("Account Number "+accountnumber);
		System.out.println("Remark: "+ remark);
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		MoneyTransfer mt=new MoneyTransfer();
		mt.transfer(1000);
		mt.transfer(5000,"SBIN300282");
		mt.transfer(2000,"SBIN300282","House Rent");
	}

}
