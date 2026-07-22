package com.EasyCalculation.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginEasycal {
	WebDriver driver;
	
	public LoginEasycal(WebDriver driver) {
		this.driver=driver;
	}
	@FindBy(id="log_email")
	WebElement email;
	
	@FindBy(id="log_password")
	WebElement password;
	
	@FindBy(xpath="//input[@name='log_submit']")
	WebElement loginbtn;
	
	public void login_EasyCal(String uname, String pass) {
		email.sendKeys(uname);
		password.sendKeys(pass);
		loginbtn.click();
	}
	

}
