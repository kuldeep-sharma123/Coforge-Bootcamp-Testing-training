package com.Method_overloading;

public class SearchProduct {
	
	public void search(String productname) {
		System.out.println("Searching by product name ");
	}
	public void search(String productname,String brand) {
		System.out.println("Searching by product name and brand");
	}
	public void search(String productname,String brand,int price) {
		System.out.println("Serching by product ,brand and name");
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		SearchProduct sp=new SearchProduct();
		sp.search("Laptop");
		sp.search("Laptop","HP");
		sp.search("Laptop","Lenevo",100000);

	}

}
