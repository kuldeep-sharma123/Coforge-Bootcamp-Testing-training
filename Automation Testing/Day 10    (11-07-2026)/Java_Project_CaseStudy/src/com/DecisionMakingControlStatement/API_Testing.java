package com.DecisionMakingControlStatement;

public class API_Testing {

    public static void main(String[] args) {

        String apiURL = "https://reqres.in/api/users/2";
        int statusCode = 200;

        System.out.println("API URL: " + apiURL);
        System.out.println("Status Code: " + statusCode);

        if (statusCode == 200) {
            System.out.println("API Test Passed");
        } else {
            System.out.println("API Test Failed");
        }
    }
}