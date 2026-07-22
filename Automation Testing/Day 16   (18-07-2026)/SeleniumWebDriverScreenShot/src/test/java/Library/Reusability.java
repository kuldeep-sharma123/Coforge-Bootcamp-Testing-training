package Library;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;

public class Reusability {
	static int i=0;
	
	public static void capturedscreenshot(ChromeDriver driver, String screenshotname) throws IOException{
		
		try {
			TakesScreenshot ts = (TakesScreenshot)driver;
			File source = ts.getScreenshotAs(OutputType.FILE);
			FileUtils.copyFile(source, new File("./ScreenShot/"+screenshotname+i+1+".png"));
			System.out.println("captured screenshot - by selenium web driver");
		} catch (WebDriverException e) {
			// TODO Auto-generated catch block
			System.out.println("Exception While taking screen shot "+ e.getMessage());
		} 
		
	}

}
