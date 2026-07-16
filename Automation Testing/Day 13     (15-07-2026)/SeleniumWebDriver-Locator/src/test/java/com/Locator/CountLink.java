package com.Locator;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class CountLink {
	WebDriver driver;
	int total=0;

	@BeforeTest
	 public void Hollandtest() throws Exception {
		 driver=new ChromeDriver();
		 driver.manage().window().maximize();
		 
		 driver.navigate().to("https://www.hollandandbarrett.com/shop/vitamins-supplements/vitamins/");
		 Thread.sleep(10000);
		 try {
			 driver.findElement(By.xpath("//*[@id=\"onetrust-reject-all-handler\"]")).click();
		 }catch(Exception e) {
			 System.out.println("Cookie pop up is not displayed");
		 }
		 
	}
	@Test
	public void findElementById() {
		//driver.findElement(By.xpath("//a[@class='b_KdD8P b_WrXPV b_JpwxS Slides-module_item__hNh8b Slides-module_slide__51gky']//div[@class='Slides-module_content__HjA9B']")).click();
		driver.findElement(By.linkText("Vitamins & Supplements")).click();
		List<WebElement> links = driver.findElements(By.xpath("//a"));
		int linkCount = links.size();
		total=total+linkCount;
		System.out.println("Total number of links on the page: " + linkCount);
		for(int i=0; i<links.size(); i++) {
			System.out.println(links.get(i).getText());
		}
	}
}
