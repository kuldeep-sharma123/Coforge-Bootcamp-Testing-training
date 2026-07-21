package Task70Assure;

import org.openqa.selenium.WebDriver;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.annotations.Test;

public class SetSizeAndPositionOfWindow {


    @Test
    public void chromeBrowserCommands() {

        WebDriver driver = new ChromeDriver();

        driver.get("https://demo.opencart.com/index.php?route=account/login");

        // Delete all Cookies
        driver.manage().deleteAllCookies();

        // Set Window Size
        org.openqa.selenium.Dimension size =
                new org.openqa.selenium.Dimension(900,600);

        driver.manage().window().setSize(size);

        // Set Window Position
        org.openqa.selenium.Point position =
                new org.openqa.selenium.Point(250,150);

        driver.manage().window().setPosition(position);

        // Maximize Window
        driver.manage().window().maximize();

        driver.quit();
    }
    
    @Test
    public void FirefoxBrowserCommands() {

        WebDriver driver = new FirefoxDriver();

        driver.get("https://demo.opencart.com/index.php?route=account/login");

        // Delete all Cookies
        driver.manage().deleteAllCookies();

        // Set Window Size
        org.openqa.selenium.Dimension size =
                new org.openqa.selenium.Dimension(900,600);

        driver.manage().window().setSize(size);

        // Set Window Position
        org.openqa.selenium.Point position =
                new org.openqa.selenium.Point(250,150);

        driver.manage().window().setPosition(position);

        // Maximize Window
        driver.manage().window().maximize();

        driver.quit();
    }
    
    @Test
    public void EdgeBrowserCommands() {

        WebDriver driver = new EdgeDriver();

        driver.get("https://demo.opencart.com/index.php?route=account/login");

        // Delete all Cookies
        driver.manage().deleteAllCookies();

        // Set Window Size
        org.openqa.selenium.Dimension size =
                new org.openqa.selenium.Dimension(900,600);

        driver.manage().window().setSize(size);

        // Set Window Position
        org.openqa.selenium.Point position =
                new org.openqa.selenium.Point(250,150);

        driver.manage().window().setPosition(position);

        // Maximize Window
        driver.manage().window().maximize();

        driver.quit();
     
    }
}
