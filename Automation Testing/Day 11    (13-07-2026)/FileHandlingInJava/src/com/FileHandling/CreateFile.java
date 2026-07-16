package com.FileHandling;
import java.io.File;
import java.io.IOException;

public class CreateFile {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
			File myobj=new File("D:\\Files/kuldeep.xlsx");
			if(myobj.createNewFile()) {
				System.out.println("File created "+myobj.getName());
				System.out.println("Absolute Path: "+myobj.getAbsolutePath());
			}else {
				System.out.println("File already exists");
			}
		}catch(IOException e) {
			System.out.println("An error occur.");
			e.printStackTrace();
		}

	}

}
