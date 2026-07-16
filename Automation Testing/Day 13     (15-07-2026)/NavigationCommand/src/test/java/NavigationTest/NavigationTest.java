package NavigationTest;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.annotations.*;

public class NavigationTest {

	@Test(priority = 1)
	public void chromeTest() {
		ChromeDriver driver = new ChromeDriver();
		driver.navigate().to("https://practicetestautomation.com/practice-test-login/");
		String url = driver.getCurrentUrl();
		System.out.println("Current URL is: " + url);
		driver.quit();

	}

	@Test(priority = 2)
	public void NavigationBack() {
		ChromeDriver driver = new ChromeDriver();
		driver.get("https://www.google.com");
		String url1 = driver.getCurrentUrl();
		System.out.println("Current URL is: " + url1);
		String title = driver.getTitle();
		System.out.println("Current Title is: " + title);

		driver.navigate().to("https://www.facebook.com");
		String url = driver.getCurrentUrl();
		System.out.println("Current URL is: " + url);

		driver.navigate().back();
		url = driver.getCurrentUrl();
		System.out.println("Current URL is: " + url);
	}

	@Test(priority = 3)
		public void NavigationForword() {
		ChromeDriver driver = new ChromeDriver();
		driver.get("https://www.google.com");
		String url1= driver.getCurrentUrl();
		System.out.println("Current URL is: " + url1);
		String title= driver.getTitle();
		System.out.println("Current Title is: " + title);
		
		
		driver.navigate().to("https://www.facebook.com");
		 String url=driver.getCurrentUrl();
		System.out.println("Current URL is: " + url);
		
		driver.navigate().back();
		driver.navigate().forward();
		url=driver.getCurrentUrl();
		System.out.println("Current URL is: " + url);
	}
	
	@Test(priority = 4)
	public void NavigationRefresh() {
	ChromeDriver driver = new ChromeDriver();
	driver.get("https://www.google.com");
	String url1= driver.getCurrentUrl();
	System.out.println("Current URL is: " + url1);
	String title= driver.getTitle();
	System.out.println("Current Title is: " + title);
	
	
	driver.navigate().to("https://www.facebook.com");
	 String url=driver.getCurrentUrl();
	System.out.println("Current URL is: " + url);
	
	driver.navigate().refresh();
	url=driver.getCurrentUrl();
	System.out.println("Current URL is: " + url);
}
	
	

	@Test
	public void firefoxTest() {
		FirefoxDriver driver = new FirefoxDriver();
		driver.navigate().to("https://practicetestautomation.com/practice-test-login/");
		String url = driver.getCurrentUrl();
		System.out.println("Current URL is: " + url);
		driver.quit();

	}

	@Test
	public void NavigationBack2() {
		FirefoxDriver driver = new FirefoxDriver();
		driver.get("https://www.google.com");
		String url1 = driver.getCurrentUrl();
		System.out.println("Current URL is: " + url1);
		String title = driver.getTitle();
		System.out.println("Current Title is: " + title);

		driver.navigate().to("https://www.facebook.com");
		String url = driver.getCurrentUrl();
		System.out.println("Current URL is: " + url);

		driver.navigate().back();
		url = driver.getCurrentUrl();
		System.out.println("Current URL is: " + url);
	}

	@Test
		public void NavigationForword2() {
		FirefoxDriver driver = new FirefoxDriver();
		driver.get("https://www.google.com");
		String url1= driver.getCurrentUrl();
		System.out.println("Current URL is: " + url1);
		String title= driver.getTitle();
		System.out.println("Current Title is: " + title);
		
		
		driver.navigate().to("https://www.facebook.com");
		 String url=driver.getCurrentUrl();
		System.out.println("Current URL is: " + url);
		
		driver.navigate().back();
		driver.navigate().forward();
		url=driver.getCurrentUrl();
		System.out.println("Current URL is: " + url);
	}
	
	@Test
	public void NavigationRefresh2() {
	FirefoxDriver driver = new FirefoxDriver();
	driver.get("https://www.google.com");
	String url1= driver.getCurrentUrl();
	System.out.println("Current URL is: " + url1);
	String title= driver.getTitle();
	System.out.println("Current Title is: " + title);
	
	
	driver.navigate().to("https://www.facebook.com");
	 String url=driver.getCurrentUrl();
	System.out.println("Current URL is: " + url);
	
	driver.navigate().refresh();
	url=driver.getCurrentUrl();
	System.out.println("Current URL is: " + url);
}
	
		
	

	@Test
	public void edgeTest() {
	EdgeDriver driver = new EdgeDriver();
	driver.navigate().to("https://practicetestautomation.com/practice-test-login/");
	String url = driver.getCurrentUrl();
	System.out.println("Current URL is: " + url);
	driver.quit();

}

@Test
public void NavigationBack3() {
	EdgeDriver driver = new EdgeDriver();
	driver.get("https://www.google.com");
	String url1 = driver.getCurrentUrl();
	System.out.println("Current URL is: " + url1);
	String title = driver.getTitle();
	System.out.println("Current Title is: " + title);

	driver.navigate().to("https://www.facebook.com");
	String url = driver.getCurrentUrl();
	System.out.println("Current URL is: " + url);

	driver.navigate().back();
	url = driver.getCurrentUrl();
	System.out.println("Current URL is: " + url);
}

@Test
	public void NavigationForword3() {
	EdgeDriver driver = new EdgeDriver();
	driver.get("https://www.google.com");
	String url1= driver.getCurrentUrl();
	System.out.println("Current URL is: " + url1);
	String title= driver.getTitle();
	System.out.println("Current Title is: " + title);
	
	
	driver.navigate().to("https://www.facebook.com");
	 String url=driver.getCurrentUrl();
	System.out.println("Current URL is: " + url);
	
	driver.navigate().back();
	driver.navigate().forward();
	url=driver.getCurrentUrl();
	System.out.println("Current URL is: " + url);
}

@Test
public void NavigationRefresh3() {
EdgeDriver driver = new EdgeDriver();
driver.get("https://www.google.com");
String url1= driver.getCurrentUrl();
System.out.println("Current URL is: " + url1);
String title= driver.getTitle();
System.out.println("Current Title is: " + title);


driver.navigate().to("https://www.facebook.com");
 String url=driver.getCurrentUrl();
System.out.println("Current URL is: " + url);

driver.navigate().refresh();
url=driver.getCurrentUrl();
System.out.println("Current URL is: " + url);
}

}
