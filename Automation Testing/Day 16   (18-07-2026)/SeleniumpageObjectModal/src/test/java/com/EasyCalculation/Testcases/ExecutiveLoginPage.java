package com.EasyCalculation.Testcases;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.annotations.Test;

import com.EasyCalculation.pages.LoginEasycal;

import Helper.BrowserFactory;

public class ExecutiveLoginPage {

	@Test
	public void CheckValidUser() {
		WebDriver driver=BrowserFactory.BrowserOptions("chrome","https://www.login.hiox.com/login?referrer=easycalculation.com");
		LoginEasycal loginPageEasyCal= PageFactory.initElements(driver,LoginEasycal.class);
		LoginPageEasyCal.login_EasyCal("9740673180","raghubn@123");
	}
}
