package com.LoopStatemnt;

public class For_Each_Loop {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String[] names= {"java","c","c++","python","javascript"};
		System.out.println("printing the content of the array names");
		 for(String name: names) {
			 System.out.println(name);
		 }
	}

}
