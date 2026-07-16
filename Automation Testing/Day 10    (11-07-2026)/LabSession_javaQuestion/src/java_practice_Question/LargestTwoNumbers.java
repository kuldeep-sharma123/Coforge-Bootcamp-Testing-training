package java_practice_Question;

import java.util.Scanner;

public class LargestTwoNumbers {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter First Number: ");
        int num1 = sc.nextInt();

        System.out.print("Enter Second Number: ");
        int num2 = sc.nextInt();

        if (num1 > num2) {
            System.out.println(num1 + " is Greater");
        } else if (num2 > num1) {
            System.out.println(num2 + " is Greater");
        } else {
            System.out.println("Both Numbers are Equal");
        }

        sc.close();
    }
}