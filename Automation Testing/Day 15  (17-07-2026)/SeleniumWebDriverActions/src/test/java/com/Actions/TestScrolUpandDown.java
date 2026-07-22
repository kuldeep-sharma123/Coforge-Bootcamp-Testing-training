package com.Actions;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;


public class TestScrolUpandDown {
	WebDriver driver;
	String url="https://www.spicejet.com/";
	
	@Test
	public void Test() throws InterruptedException {
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.get(url);
		Thread.sleep(2000);
		
		((JavascriptExecutor)driver).executeScript("window.scrollBy(0,6600)");
		Thread.sleep(2000);
		((JavascriptExecutor)driver).executeScript("window.scrollBy(0,-4200)"," ");
	}
}
