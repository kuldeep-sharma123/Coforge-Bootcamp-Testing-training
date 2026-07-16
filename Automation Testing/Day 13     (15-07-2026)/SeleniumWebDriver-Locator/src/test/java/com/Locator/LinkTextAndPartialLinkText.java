package com.Locator;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class LinkTextAndPartialLinkText {
	WebDriver driver;
	@BeforeTest
	
	public void setUp() throws InterruptedException {
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://www.hollandandbarrett.com/");
		Thread.sleep(5000);
		driver.findElement(By.xpath("//*[@id=\"onetrust-reject-all-handler\"]")).click();
	}
	
	@Test
	public void testLinkText() {
		driver.findElement(By.partialLinkText("Vitamins")).click();
		List<WebElement> links = driver.findElements(By.xpath("//a"));
		int noOfLinks = links.size();
		System.out.println("Total number of links on the page: " + noOfLinks);
		for(int i=0; i<links.size(); i++) {
			System.out.println(links.get(i).getText());
			String str=links.get(i).getText();
			String str1="Vitamins";
			if(str==str1) {
				driver.findElement(By.linkText("Vitamins")).click();
				driver.findElement(By.xpath("(//a[contains(@type,'button')])[4]")).click();
			}
		}
	}

}
