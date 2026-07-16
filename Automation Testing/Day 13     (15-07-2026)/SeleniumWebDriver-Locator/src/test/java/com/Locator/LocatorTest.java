package com.Locator;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class LocatorTest {

	WebDriver driver;
	String baseURL="https://practicetestautomation.com/practice-test-login/";
	
	@Test
	public void IDLocator() {
		driver=new ChromeDriver();
		driver.navigate().to(baseURL);
		driver.manage().window().maximize();
		
		//Locator id name and xpath
		driver.findElement(By.id("username")).sendKeys("student");
		driver.findElement(By.id("password")).sendKeys("Password123");
		
		driver.findElement(By.xpath("//button[@id='submit']")).click();	
		String Actualtitle=driver.getTitle();
		String Expectedtitle="Logged In Successfully | Practice Test Automation";
		if(Actualtitle.equals(Expectedtitle)) {
			System.out.println("Test Passed");
		
		}else {
			System.out.println("Test Failed");
		}
		driver.findElement(By.xpath("//*[@id=\"loop-container\"]/div/article/div[2]/div/div/div/a")).click();
		driver.quit();
	
}
}
