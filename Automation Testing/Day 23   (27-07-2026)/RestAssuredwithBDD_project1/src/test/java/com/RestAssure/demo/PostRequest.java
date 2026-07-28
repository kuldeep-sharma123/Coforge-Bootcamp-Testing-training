package com.RestAssure.demo;

import org.json.JSONObject;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import static io.restassured.RestAssured.*;
import org.testng.Assert;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;



public class PostRequest {
	private static final String Base_Url= "https://jsonplaceholder.typicode.com/";
	private JSONObject testUser;
	private int createdUserId;
	
	@BeforeClass
	public void setup() {
		RestAssured.baseURI=Base_Url;
		  testUser = new JSONObject();
	        testUser.put("name", "Test User");
	        testUser.put("email", "raghu.astepahead@gmail.com");
	        testUser.put("username", "raghavendra");
	    }

	    @Test
	    public void testPostRequestComplete() {

	        System.out.println("\n========== POST REQUEST - TRADITIONAL ==========");

	        JSONObject user = new JSONObject(testUser.toString());
	        user.put("id", 1);

	        System.out.println("Request Body: " + user.toString(2));

	        Response response = given()
	                .header("Content-Type", "application/json")
	                .body(user.toString())
	                .post("/users");

	        printResponseDetails(response, "POST");

	        org.testng.Assert.assertEquals(response.getStatusCode(), 201);

	        JSONObject responseJson = new JSONObject(response.getBody().asString());

	        if (responseJson.has("id")) {   // Store created ID for PUT test
	            createdUserId = responseJson.getInt("id");
	            System.out.println("Created User ID: " + createdUserId);
	        }
	    }
	    private void printResponseDetails(Response response, String method) {

	        System.out.println("========== " + method + " Response ==========");
	        System.out.println("Status Code : " + response.getStatusCode());
	        System.out.println("Status Line : " + response.getStatusLine());
	        System.out.println("Response Body : ");
	        System.out.println(response.getBody().asPrettyString());
	    }
	
	

}
