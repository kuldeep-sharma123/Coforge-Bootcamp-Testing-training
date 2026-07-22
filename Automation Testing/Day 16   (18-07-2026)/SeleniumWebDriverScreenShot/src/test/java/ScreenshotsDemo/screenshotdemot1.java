package ScreenshotsDemo;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

import Library.Reusability;

public class screenshotdemot1 {

	    @Test
	    public void Browser() throws Exception {

	        ChromeDriver driver = new ChromeDriver();

	        driver.get("https://auth.hollandandbarrett.com/u/login");
	        driver.manage().window().maximize();

	        Reusability.capturedscreenshot(driver, "A. Launch Application - TakeScreenShot");

	        driver.findElement(By.id("username"))
	              .sendKeys("raghu.astepahead@gmail.com");

	        driver.findElement(By.name("password"))
	              .sendKeys("raghuBN@123");

	        Thread.sleep(5000);

	        driver.findElement(By.xpath("//button[@name='action']")).click();

	        Reusability.capturedscreenshot(driver, "B. Click Sign In Button - TakeScreenShot");

	        driver.quit();
	    }
	

}
