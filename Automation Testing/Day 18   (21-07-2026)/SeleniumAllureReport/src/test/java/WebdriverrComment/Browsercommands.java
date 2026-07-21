package WebdriverrComment;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.annotations.Test;

public class Browsercommands {
	@Test

	public void chromebrowsertest() {
		ChromeDriver driver = new ChromeDriver();
		driver.get("https://practicetestautomation.com/practice/");
		driver.manage().window().maximize();
		
		String Browsertitle = driver.getTitle();
		System.out.println("Browser title is: " + Browsertitle);
		
		String Browsercurrenturl = driver.getCurrentUrl();
		System.out.println("Browser current url is: " + Browsercurrenturl);
		
		
//		String PageContent = driver.getPageSource();
//		System.out.println("Browser page source is: " + PageContent);
		driver.quit();
		
		
		
		
	}
	@Test
	public void FirefoxBrowserTest() {
		FirefoxDriver driver = new FirefoxDriver();
		driver.get("https://practicetestautomation.com/practice/");
		
		String Browsertitle = driver.getTitle();
		System.out.println("Browser title is: " + Browsertitle);
		
		String Browsercurrenturl = driver.getCurrentUrl();
		System.out.println("Browser current url is: " + Browsercurrenturl);
		driver.quit();
		
		
}
	@Test
	public void EdgeBrowserTest() {
		EdgeDriver driver = new EdgeDriver();
		driver.get("https://practicetestautomation.com/practice/");
		
		String Browsertitle = driver.getTitle();
		System.out.println("Browser title is: " + Browsertitle);
		
		String Browsercurrenturl = driver.getCurrentUrl();
		System.out.println("Browser current url is: " + Browsercurrenturl);
		
		driver.quit();
		
	}
}

	
	
