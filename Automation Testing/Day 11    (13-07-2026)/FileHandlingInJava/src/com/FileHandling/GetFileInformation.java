package com.FileHandling;

import java.io.File;

public class GetFileInformation {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
			File obj=new File("D:\\Files/kuldeep.txt");
			if(obj.exists()) {
				System.out.println("File name "+obj.getName());
				System.out.println("Absolute Path  "+obj.getAbsolutePath());
				System.out.println("Writeable "+obj.canWrite());
				System.out.println("Readable "+obj.canRead());
				System.out.println("File size in bytes "+obj.length());
				
			}else {
				System.out.println("the file does not exist.");
			}
		}catch(Exception e) {
			System.out.println("an error occur");
		}

	}

}
