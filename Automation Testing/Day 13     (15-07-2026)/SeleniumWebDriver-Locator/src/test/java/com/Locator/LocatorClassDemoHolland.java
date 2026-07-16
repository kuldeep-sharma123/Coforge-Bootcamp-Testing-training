package com.Locator;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class LocatorClassDemoHolland {
	WebDriver driver;
	
	@Test
	 public void Hollandtest() throws InterruptedException {
		 driver=new ChromeDriver();
		 driver.manage().window().maximize();
		 
		 driver.navigate().to("https://www.hollandandbarrett.com/shop/vitamins-supplements/vitamins/");
		 Thread.sleep(10000);
		 try {
			 driver.findElement(By.xpath("//*[@id=\"onetrust-reject-all-handler\"]")).click();
		 }catch(Exception e) {
			 System.out.println("Cookie pop up is not displayed");
		 }
		 
		 driver.findElement(By.xpath("//img[@alt='Vitamin Drinks category product example']")).click();
		 driver.findElement(By.className("ProductCardImage-module_innerImage__2kx-2")).click();
		 driver.navigate().back();

			String BrowserTitle = driver.getCurrentUrl();
			System.out.println(BrowserTitle);
			
			driver.navigate().back();
			BrowserTitle = driver.getCurrentUrl();
			System.out.println(BrowserTitle);
			
			driver.navigate().refresh();
			BrowserTitle = driver.getCurrentUrl();
			System.out.println(BrowserTitle);
			
			driver.navigate().forward();
			BrowserTitle = driver.getCurrentUrl();
			System.out.println(BrowserTitle);
			
			driver.quit();
		 
		 
	 }

}
