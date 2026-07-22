package WebdriverrComment;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.*;

public class BrowserComment {
	@Test
	public void ChromeBrowserTest() {
		ChromeDriver driver = new ChromeDriver();
		driver.get("https://practicetestautomation.com/practice/");
	}
}
