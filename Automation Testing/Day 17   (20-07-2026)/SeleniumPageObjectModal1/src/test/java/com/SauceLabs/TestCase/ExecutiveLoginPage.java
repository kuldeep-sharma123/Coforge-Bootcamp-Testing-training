package com.SauceLabs.TestCase;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.annotations.Test;

import com.EasyCalculation.pages.LoginEasycal;
import Helper.BrowserFactory;


public class ExecutiveLoginPage {
	
		@Test
		public void CheckValidUser() throws InterruptedException {
			WebDriver driver=BrowserFactory.BrowserOptions("chrome","https://accounts.saucelabs.com/am/XUI/#login/");
			LoginEasycal loginPageEasyCal= PageFactory.initElements(driver,SauceLabs.class);
			Thread.sleep(5000);
			loginPageEasyCal.login_EasyCal("9740673180","raghubn@123");
			driver.findElement(By.xpath("//input[@name='log_submit']")).click();
			Thread.sleep(5000);
			driver.quit();
		}
	}


}
