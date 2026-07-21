package com.Task60;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

public class CaseStudy8 {
	

	    WebDriver driver;

	    @Parameters("browser")
	    @BeforeMethod
	    public void setup(String browser) {

	        if (browser.equalsIgnoreCase("chrome")) {
	            driver = new ChromeDriver();
	        }
	        else if (browser.equalsIgnoreCase("edge")) {
	            driver = new EdgeDriver();
	        }

	        driver.manage().window().maximize();
	        driver.get("https://demo.opencart.com/");
	    }

	    @Test
	    public void openCartTest() throws IOException {

	        // Get Page Title
	        System.out.println("Page Title : " + driver.getTitle());

	        // Take Screenshot
	        TakesScreenshot ts = (TakesScreenshot) driver;
	        File source = ts.getScreenshotAs(OutputType.FILE);

	        File destination = new File("Screenshots/OpenCartHomePage.png");
	        destination.getParentFile().mkdirs();

	        Files.copy(source.toPath(), destination.toPath());

	        System.out.println("Screenshot Captured Successfully.");
	    }

	    @AfterMethod
	    public void closeBrowser() {

	        driver.quit();
	    }
	

}
