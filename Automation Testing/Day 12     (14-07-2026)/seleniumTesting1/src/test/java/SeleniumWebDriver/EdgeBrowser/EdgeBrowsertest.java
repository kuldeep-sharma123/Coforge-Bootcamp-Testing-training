package SeleniumWebDriver.EdgeBrowser;

import org.openqa.selenium.edge.EdgeDriver;

public class EdgeBrowsertest {
	public static void main(String[] args) {
		EdgeDriver driver = new EdgeDriver();
		driver.get("https://www.selenium.dev/downloads/");
		driver.manage().window().maximize();
	}

}
