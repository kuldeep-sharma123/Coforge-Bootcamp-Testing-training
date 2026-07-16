package ChromeWebDriver;

import org.openqa.selenium.chrome.ChromeDriver;

public class ChromeWebDriver {

	public static void main(String[] args) {
		ChromeDriver chromeDriver = new ChromeDriver();
		chromeDriver.get("https://www.google.com");
		chromeDriver.manage().window().maximize();
		chromeDriver.manage().window().minimize();
		
	}

}
