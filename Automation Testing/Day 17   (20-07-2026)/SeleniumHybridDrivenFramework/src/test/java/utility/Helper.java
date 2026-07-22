package utility;

import java.io.File;
import java.io.IOException;
import java.sql.Date;
import java.text.DateFormat;
import java.text.SimpleDateFormat;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;

public class Helper {
	
	
	public static void capturedscreenshot(WebDriver driver) throws IOException{
		
		try {
			TakesScreenshot ts = (TakesScreenshot)driver;
			File source = ts.getScreenshotAs(OutputType.FILE);
			FileUtils.copyFile(source, new File("./ScreenShot/EasyCalculation"+".png"));
			System.out.println("captured screenshot - by selenium web driver");
		} catch (WebDriverException e) {
			// TODO Auto-generated catch block
			System.out.println("Exception While taking screen shot "+ e.getMessage());
		} 
		
	}
	public static String getCurrentDateTime() {
		DateFormat customFormat=new SimpleDateFormat("MM_DD_YYYY_HH_mm_ss");
		Date currentdate=new Date(0);
		return customFormat.format(currentdate);
	}

}
