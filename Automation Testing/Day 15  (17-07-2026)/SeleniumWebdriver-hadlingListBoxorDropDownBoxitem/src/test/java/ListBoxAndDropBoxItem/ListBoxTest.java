package ListBoxAndDropBoxItem;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class ListBoxTest {

	WebDriver driver;
	String url="https://testautomationpractice.blogspot.com/";
	
	@BeforeTest
	public void setUp(){
		driver = new ChromeDriver();
		driver.get(url);
		driver.manage().window().maximize();
		
	}
	
	@Test
	public void DropDownList() throws InterruptedException {
		WebElement dropDown = driver.findElement(By.id("country"));
		Select country_list= new Select(dropDown);
		
		country_list.selectByVisibleText("India");
		Thread.sleep(2000);
		country_list.selectByVisibleText("Germany");
		Thread.sleep(2000);
		country_list.selectByIndex(5);
		Thread.sleep(2000);
		
		WebElement option = country_list.getFirstSelectedOption();
		String countryIndex=option.getText();
		System.out.println("Selected country is: "+countryIndex);
		
		List<WebElement> c_list = country_list.getOptions();
		int total_countries = c_list.size();
		System.out.println("Total countries in the list are: "+total_countries);
		
		for(WebElement country:c_list) {
			String countryName=country.getText();
			System.out.println("Country name is: "+countryName);
		}
	}
}
