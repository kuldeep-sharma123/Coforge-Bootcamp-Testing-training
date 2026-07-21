package WebdriverrComment;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.annotations.Test;

public class CheckExpectedValue {

    // Expected page title
    String ExpectedValue = "Practice | Practice Test Automation";

    @Test
    public void ChromeBrowserTest() {

        ChromeDriver driver = new ChromeDriver();
        driver.get("https://practicetestautomation.com/practice/");
        driver.manage().window().maximize();

        String ActualValue = driver.getTitle();

        System.out.println("===== Chrome Browser =====");
        System.out.println("Expected Title : " + ExpectedValue);
        System.out.println("Actual Title   : " + ActualValue);

        if (ExpectedValue.equals(ActualValue)) {
            System.out.println("Chrome Test Case Passed");
        } else {
            System.out.println("Chrome Test Case Failed");
        }

        System.out.println("Current URL : " + driver.getCurrentUrl());

        driver.quit();
    }

    @Test
    public void FirefoxBrowserTest() {

        FirefoxDriver driver = new FirefoxDriver();
        driver.get("https://practicetestautomation.com/practice/");
        driver.manage().window().maximize();

        String ActualValue = driver.getTitle();

        System.out.println("===== Firefox Browser =====");
        System.out.println("Expected Title : " + ExpectedValue);
        System.out.println("Actual Title   : " + ActualValue);

        if (ExpectedValue.equals(ActualValue)) {
            System.out.println("Firefox Test Case Passed");
        } else {
            System.out.println("Firefox Test Case Failed");
        }

        System.out.println("Current URL : " + driver.getCurrentUrl());

        driver.quit();
    }

    @Test
    public void EdgeBrowserTest() {

        EdgeDriver driver = new EdgeDriver();
        driver.get("https://practicetestautomation.com/practice/");
        driver.manage().window().maximize();

        String ActualValue = driver.getTitle();

        System.out.println("===== Edge Browser =====");
        System.out.println("Expected Title : " + ExpectedValue);
        System.out.println("Actual Title   : " + ActualValue);

        if (ExpectedValue.equals(ActualValue)) {
            System.out.println("Edge Test Case Passed");
        } else {
            System.out.println("Edge Test Case Failed");
        }

        System.out.println("Current URL : " + driver.getCurrentUrl());

        driver.quit();
    }
}