package com.FileHandling;
import java.io.File;

public class DeleteFile {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
		File obj=new File("D:\\Files/kuldeep.txt");
		if(obj.delete()) {
			System.out.println("Delete the file");
		}else {
			System.out.println("Failed to delete");
		}
		}catch(Exception e) {
			System.out.println("An error occur.");
			e.printStackTrace();
		}
	}

}
