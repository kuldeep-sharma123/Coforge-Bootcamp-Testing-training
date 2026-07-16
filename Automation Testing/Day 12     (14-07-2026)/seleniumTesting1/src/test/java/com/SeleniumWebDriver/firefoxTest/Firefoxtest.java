package com.SeleniumWebDriver.firefoxTest;

import org.openqa.selenium.firefox.FirefoxDriver;

public class Firefoxtest {

	public static void main(String[] args) {
		FirefoxDriver driver = new FirefoxDriver();
		driver.get("https://www.selenium.dev/downloads/");
		driver.manage().window().maximize();

	}

}
