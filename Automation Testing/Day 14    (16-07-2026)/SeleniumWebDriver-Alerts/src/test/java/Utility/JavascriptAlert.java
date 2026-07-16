package Utility;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import org.testng.annotations.Test;

public class JavascriptAlert {

	@Test
	public void TestPopup() throws InterruptedException {
		WebDriver driver = Helper.startBrowsing("chrome");
		driver.get("https://the-internet.herokuapp.com/javascript_alerts");
		driver.findElement(By.xpath("//button[@onclick='jsAlert()']")).click();
		Alert alert = driver.switchTo().alert();
		Thread.sleep(3000);
		alert.accept();
		String result = driver.findElement(By.cssSelector("#result")).getText();
		System.out.println(result);
		Assert.assertEquals("You successfully clicked an alert", result);
		
		driver.findElement(By.xpath("//button[@onclick='jsConfirm()']")).click();
		Alert alert1 = driver.switchTo().alert();
		Thread.sleep(5000);
		alert1.dismiss();
		String result1 = driver.findElement(By.cssSelector("#result")).getText();
		System.out.println(result1);
		Assert.assertEquals("You clicked: Cancel", result1);
		
		driver.findElement(By.xpath("//button[@onclick='jsConfirm()']")).click();
		Alert alert2 = driver.switchTo().alert();
		Thread.sleep(5000);
		alert2.accept();	
		String result2 = driver.findElement(By.cssSelector("#result")).getText();
		System.out.println(result2);
		Assert.assertEquals("You clicked ok", result2);
		
		driver.findElement(By.xpath("//button[@onclick='jsPrompt()']")).click();
		driver.switchTo().alert().sendKeys("Hello Kuldeep");
		Thread.sleep(5000);
		driver.switchTo().alert().accept();
		String result3 = driver.findElement(By.cssSelector("#result")).getText();
		System.out.println(result3);
		Assert.assertEquals("You entered: hello kuldeep", result3);
		
		driver.get("https://the-internet.herokuapp.com/javascript_alerts");
		String result4 = driver.findElement(By.xpath("#result")).getText();
		Thread.sleep(5000);
		System.out.println(result4);
		Assert.assertEquals("Congratulations! you must have the proper credentials.", result4);
		
		driver.quit();
		
		
	}

}
