package com.FileHandling;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class ReadFile {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
			File obj=new File("D:\\Files/kuldeep.txt");
			Scanner myReader=new Scanner(obj);
			
			while(myReader.hasNextLine()) {
				String data=myReader.nextLine();
				System.out.println(data);
			}
			myReader.close();
		}catch(FileNotFoundException e) {
			System.out.println("An error occured -file not found");
			e.printStackTrace();
		}

	}

}
