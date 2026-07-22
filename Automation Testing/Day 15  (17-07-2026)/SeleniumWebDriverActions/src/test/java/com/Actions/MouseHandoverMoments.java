package com.Actions;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.annotations.Test;
import org.openqa.selenium.WebDriver;

public class MouseHandoverMoments {
	int linkcount;
	List<WebElement> list;
	
	@Test
	public void mouseover() throws InterruptedException {
		WebDriver driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://www.easycalculation.com/index.php");
		
		WebElement element=driver.findElement(By.xpath("//a[@href='#'][normalize-space()='Others']"));
		Actions action=new Actions(driver);
		action.moveToElement(element).perform();
		
		list=driver.findElements(By.tagName("a"));
		System.out.println("Total number of links present in the handover moment: " + list.size());
		
		for(int i=0; i<list.size(); i++) {
			System.out.println("Link " + (i+1) + ": " + list.get(i).getText());
		}
		Thread.sleep(2000);
		
		WebElement element1=driver.findElement(By.xpath("//a[normalize-space()='Download']"));
		element1.click();
		System.out.println(driver.getCurrentUrl());
		driver.quit();
	}

}
