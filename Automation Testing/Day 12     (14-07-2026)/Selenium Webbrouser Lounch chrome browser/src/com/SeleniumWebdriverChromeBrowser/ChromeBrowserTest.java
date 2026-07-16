package com.SeleniumWebdriverChromeBrowser;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class ChromeBrowserTest {

	public static void main(String[] args) {
		WebDriver driver=new ChromeDriver();
		 driver.get("https://www.google.com");

	        // Maximize browser window
	        driver.manage().window().maximize();

	        // Print page title
	        System.out.println("Title: " + driver.getTitle());

	        // Print current URL
	        System.out.println("URL: " + driver.getCurrentUrl());

	        // Close the browser
	        driver.quit();
	}

}
