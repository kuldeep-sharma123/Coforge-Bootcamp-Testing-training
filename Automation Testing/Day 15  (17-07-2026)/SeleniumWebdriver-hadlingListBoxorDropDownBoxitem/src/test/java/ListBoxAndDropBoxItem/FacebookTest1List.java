package ListBoxAndDropBoxItem;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class FacebookTest1List {
	WebDriver driver;
	
	@Test
	public void FacebookTest() throws InterruptedException {
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://www.facebook.com/reg/?entry_point=login&next=");
		
		WebElement dropDown = driver.findElement(By.id("_R_1cl2p4jikacppb6amH1_"));
		Select day_list= new Select(dropDown);
		day_list.selectByVisibleText("15");
		Thread.sleep(2000);
		
		day_list.selectByIndex(10);
		Thread.sleep(2000);
		 System.out.println("Total number of days in the list are: "+day_list.getOptions().size());
		
		
	}
}
