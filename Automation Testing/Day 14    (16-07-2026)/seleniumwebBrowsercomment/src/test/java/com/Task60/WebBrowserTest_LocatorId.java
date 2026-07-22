package com.Task60;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.annotations.Test;

public class WebBrowserTest_LocatorId {

    @Test
    public void chromeBrowserCommands() {

        WebDriver driver = new ChromeDriver();

        // Open URL
        driver.get("https://www.login.hiox.com/register?referrer=easycalculation.com");

        // Enter values using ID Locator
        driver.findElement(By.id("xreg_usr")).sendKeys("Kuldeep Sharma");
        driver.findElement(By.id("xreg_email")).sendKeys("kuldeep@gmail.com");
        driver.findElement(By.id("xreg_pass")).sendKeys("Kuldeep@123");
        driver.findElement(By.id("xreg_confirm")).sendKeys("Kuldeep@123");

        // Print Page Title
        System.out.println("Page Title : " + driver.getTitle());

        // Get Page Source
        String pageSource = driver.getPageSource();

        // Print Page Source
        System.out.println(pageSource);

        // Print Page Source Length
        System.out.println("Page Source Length : " + pageSource.length());

        // Close Browser
        driver.quit();
    }

    @Test
    public void firefoxBrowserCommands() {

        WebDriver driver = new FirefoxDriver();

        // Open URL
        driver.get("https://www.login.hiox.com/register?referrer=easycalculation.com");

        // Enter values using ID Locator
        driver.findElement(By.id("xreg_usr")).sendKeys("Kuldeep Sharma");
        driver.findElement(By.id("xreg_email")).sendKeys("kuldeep@gmail.com");
        driver.findElement(By.id("xreg_pass")).sendKeys("Kuldeep@123");
        driver.findElement(By.id("xreg_confirm")).sendKeys("Kuldeep@123");

        // Print Page Title
        System.out.println("Page Title : " + driver.getTitle());

        // Get Page Source
        String pageSource = driver.getPageSource();

        // Print Page Source
        System.out.println(pageSource);

        // Print Page Source Length
        System.out.println("Page Source Length : " + pageSource.length());

        // Close Browser
        driver.quit();
    }

    @Test
    public void edgeBrowserCommands() {

        WebDriver driver = new EdgeDriver();

        // Open URL
        driver.get("https://www.login.hiox.com/register?referrer=easycalculation.com");

        // Enter values using ID Locator
        driver.findElement(By.id("xreg_usr")).sendKeys("Kuldeep Sharma");
        driver.findElement(By.id("xreg_email")).sendKeys("kuldeep@gmail.com");
        driver.findElement(By.id("xreg_pass")).sendKeys("Kuldeep@123");
        driver.findElement(By.id("xreg_confirm")).sendKeys("Kuldeep@123");

        // Print Page Title
        System.out.println("Page Title : " + driver.getTitle());

        // Get Page Source
        String pageSource = driver.getPageSource();

        // Print Page Source
        System.out.println(pageSource);

        // Print Page Source Length
        System.out.println("Page Source Length : " + pageSource.length());

        // Close Browser
        driver.quit();
    }
}
