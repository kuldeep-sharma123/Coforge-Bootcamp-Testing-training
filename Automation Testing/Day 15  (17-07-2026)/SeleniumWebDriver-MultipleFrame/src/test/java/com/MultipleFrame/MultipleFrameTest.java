package com.MultipleFrame;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class MultipleFrameTest {
	WebDriver driver;
	String url="file:///C:/MultipleFrame/iframe.html";
	
	@Test
	public void setUp() throws InterruptedException{
		driver = new ChromeDriver();
		driver.get(url);
		Thread.sleep(2000);
		driver.manage().window().maximize();
		
		int totalnoofframes = driver.findElements(By.tagName("iframe")).size();
		System.out.println("Total number of frames in the page are: "+totalnoofframes);
		
		driver.switchTo().frame("easycalculation");
		driver.get("https://www.login.hiox.com/login?referrer=easycalculation.com");
		driver.findElement(By.id("log_email")).sendKeys("9740673180");
		driver.findElement(By.id("log_password")).sendKeys("raghubn@123");
		driver.findElement(By.id("log_submit")).click();
		String title = driver.getTitle();
		System.out.println("Title of the page is: "+title);
		
//		driver.navigate().to("file:///C:/MultipleFrame/iframe.html");
//		Thread.sleep(2000);
//		//driver.findElement(By.xpath("")).click();
//		driver.navigate().to("https://www.selenium.dev/");
//		driver.findElement(By.xpath("//*[@id=\"main_navbar\"]/ul/li[2]/a/span")).click();
//		Thread.sleep(2000);
//		String title1 = driver.getTitle();
//		System.out.println("Title of the page is: "+title1);
//		
//		driver.navigate().to("file:///C:/MultipleFrame/iframe.html");
//		driver.switchTo().frame("My Store");
//		driver.get("https://practicetestautomation.com/practice-test-login/");
//		driver.findElement(By.id("username")).sendKeys("student");
//		driver.findElement(By.id("password")).sendKeys("Password123");
//		driver.findElement(By.xpath("//*[@id=\"submit\"]")).click();
//		String title2 = driver.getTitle();
//		System.out.println("Title of the page is: "+title2);
//		driver.quit();
//		
//		
		
		
		
		
		
	}

}
