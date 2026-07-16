package ScannerDemo;
import java.util.Scanner;

public class ScannerClass {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner keyboard=new Scanner(System.in);
		System.out.print("Please Enter your first name initial: ");
		String firstinitial=keyboard.nextLine();
		System.out.print("Please Enter your last name : ");
		String lastname=keyboard.nextLine();
		System.out.print("Please Enter your house number : ");
		String housenumber=keyboard.nextLine();
		System.out.print("Please Enter your street name: ");
		String streetname=keyboard.nextLine();
		System.out.print("Please Enter your street Type: ");
		String StreetType=keyboard.nextLine();
		System.out.print("Please Enter your city: ");
		String city=keyboard.nextLine();
		
		System.out.print(firstinitial+" " + lastname +" "+housenumber+" ");
		System.out.println(streetname+" "+StreetType+" "+city);

	}

}
