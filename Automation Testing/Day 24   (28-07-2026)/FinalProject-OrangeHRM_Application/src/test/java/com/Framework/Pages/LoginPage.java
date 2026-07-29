package com.Framework.Pages;

import java.time.Duration;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LoginPage {

    WebDriver driver;
    WebDriverWait wait;

    public LoginPage(WebDriver driver) {
        this.driver = driver;
        wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    }

    @FindBy(how = How.NAME, using = "username")
    WebElement Username;

    @FindBy(how = How.NAME, using = "password")
    WebElement Password;

    @FindBy(how = How.XPATH, using = "//button[@type='submit']")
    WebElement BtnLogin;

    public void login_OrangeHRM(String uname, String pass) {

        wait.until(ExpectedConditions.visibilityOf(Username));

        Username.sendKeys(uname);
        Password.sendKeys(pass);
        BtnLogin.click();
    }
}