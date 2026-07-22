package com.Framework.Pages;

import java.io.IOException;

import org.openqa.selenium.WebDriver;
import org.testng.ITestResult;
import org.testng.annotations.*;


import utility.BrowserFactory;
import utility.Helper;
import utility.ConfigDataProvider;
import utility.ExcelDataReader;

public class BaseClass {
	public WebDriver driver;
	public ExcelDataReader excel;
	public ConfigDataProvider config;
	
	@BeforeSuite
	public void SetUp() {
		excel=new ExcelDataReader();
		config= new ConfigDataProvider();
	}
	@BeforeSuite(dependsOnMethods="SetUp")
	public void BrowserTest() {
		driver=BrowserFactory.BrowserOptions(driver, config.getBrowser(),config.getAppURL());
	}
	@AfterClass
	public void tearDown() {
		BrowserFactory.quitBrowser(driver);
	}
	
	@AfterMethod
	public void tearDownMethod(ITestResult result) throws IOException {
		if(result.getStatus()== ITestResult.FAILURE) {
			Helper.capturedscreenshot(driver);
		}
	}
	

}
