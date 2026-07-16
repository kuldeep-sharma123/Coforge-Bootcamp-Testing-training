package com.ExceptionHandling;

class Account {

    int balance;

    // No-argument constructor
    Account() {
        balance = 0;
    }

    // Parameterized constructor
    Account(int balance) {
        this.balance = balance;
    }

    void deposit(int amount) {
        balance += amount;
    }

    void withdraw(int amount) {
        balance -= amount;
    }

    int getBalance() {
        return balance;
    }
}

public class Task54 {

    public static void main(String[] args) {

        // No-argument constructor
        Account acc1 = new Account();
        acc1.deposit(10);

        if (acc1.getBalance() == 10)
            System.out.println("Test Passed");
        else
            System.out.println("Test Failed");

        // Parameterized constructor
        Account acc2 = new Account(0);
        acc2.deposit(10);
        acc2.withdraw(20);

        if (acc2.getBalance() == -10)
            System.out.println("Test Passed");
        else
            System.out.println("Test Failed");
    }
}