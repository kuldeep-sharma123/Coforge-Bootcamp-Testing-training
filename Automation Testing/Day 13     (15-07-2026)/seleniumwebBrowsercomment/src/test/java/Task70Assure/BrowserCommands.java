package Task70Assure;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class BrowserCommands {

    @Test
    public void chromeTest() {

        WebDriver driver = new ChromeDriver();

        driver.get("https://www.sc.com/in/loans/loan-repayment-option/");

        // Get Title
        String pageTitle = driver.getTitle();
        System.out.println("Page Title : " + pageTitle);

        // Title Length
        System.out.println("Title Length : " + pageTitle.length());

        // Get URL
        String actualURL = driver.getCurrentUrl();
        String expectedURL = "https://www.sc.com/in/loans/loan-repayment-option/";

        if(actualURL.equals(expectedURL)) {
            System.out.println("URL Verification : Passed");
        }
        else {
            System.out.println("URL Verification : Failed");
        }

        // Get Page Source
        String pageSource = driver.getPageSource();
        System.out.println("Page Source Length : " + pageSource.length());

        driver.quit();
    }
    
    @Test
    public void FirefoxTest() {

        WebDriver driver = new FirefoxDriver();

        driver.get("https://www.sc.com/in/loans/loan-repayment-option/");

        // Get Title
        String pageTitle = driver.getTitle();
        System.out.println("Page Title : " + pageTitle);

        // Title Length
        System.out.println("Title Length : " + pageTitle.length());

        // Get URL
        String actualURL = driver.getCurrentUrl();
        String expectedURL = "https://www.sc.com/in/loans/loan-repayment-option/";

        if(actualURL.equals(expectedURL)) {
            System.out.println("URL Verification : Passed");
        }
        else {
            System.out.println("URL Verification : Failed");
        }

        // Get Page Source
        String pageSource = driver.getPageSource();
        System.out.println("Page Source Length : " + pageSource.length());

        driver.quit();
    }
    

    @Test
    public void EdgeTest() {

        WebDriver driver = new EdgeDriver();

        driver.get("https://www.sc.com/in/loans/loan-repayment-option/");

        // Get Title
        String pageTitle = driver.getTitle();
        System.out.println("Page Title : " + pageTitle);

        // Title Length
        System.out.println("Title Length : " + pageTitle.length());

        // Get URL
        String actualURL = driver.getCurrentUrl();
        System.out.println("Current URL : " + actualURL);
        String expectedURL = "https://www.sc.bank.in/loans/loan-repayment-option/";

        if(actualURL.equals(expectedURL)) {
            System.out.println("URL Verification : Passed");
        }
        else {
            System.out.println("URL Verification : Failed");
        }

        // Get Page Source
        String pageSource = driver.getPageSource();
        System.out.println("Page Source Length : " + pageSource.length());

        driver.quit();
    }
}