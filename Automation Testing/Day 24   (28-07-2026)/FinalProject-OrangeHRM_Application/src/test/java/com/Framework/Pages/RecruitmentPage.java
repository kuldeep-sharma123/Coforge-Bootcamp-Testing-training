
package com.Framework.Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.By;

public class RecruitmentPage {
    WebDriver driver;
    public RecruitmentPage(WebDriver driver) {
        this.driver = driver;
    }
    // Recruitment Menu
    @FindBy(how = How.XPATH, using = "//span[text()='Recruitment']")
    WebElement recruitment;

    // Add Button
    @FindBy(how = How.XPATH, using = "//button[normalize-space()='Add']")
    WebElement addButton;

    // Candidate Details
    @FindBy(how = How.NAME, using = "firstName")
    WebElement firstName;

    @FindBy(how = How.NAME, using = "middleName")
    WebElement middleName;

    @FindBy(how = How.NAME, using = "lastName")
    WebElement lastName;
    
 // Vacancy Dropdown
    @FindBy(how = How.XPATH, using = "//label[text()='Vacancy']/following::div[contains(@class,'oxd-select-text')][1]")
    WebElement vacancyDropdown;

    // Vacancy Option
    @FindBy(how = How.XPATH, using = "//div[@role='option']//span[text()='Automation Tester']")
    WebElement vacancyOption;

    @FindBy(how = How.XPATH, using = "(//input[@placeholder='Type here'])[1]")
    WebElement email;

    @FindBy(how = How.XPATH, using = "(//input[@placeholder='Type here'])[2]")
    WebElement contactNo;

    @FindBy(how = How.XPATH, using = "//input[@type='file']")
    WebElement resume;

    @FindBy(how = How.TAG_NAME, using = "textarea")
    WebElement notes;

    @FindBy(how = How.XPATH, using = "//button[@type='submit']")
    WebElement saveButton;

    // Click Recruitment
    public void clickRecruitment() {
        recruitment.click();
    }

    // Click Add Candidate
    public void clickAddButton() {
        addButton.click();
    }
    
    public void selectVacancy(String vacancyName) {

        vacancyDropdown.click();

        driver.findElement(By.xpath("//div[@role='option']//span[text()='" + vacancyName + "']")).click();
    }

    public void addCandidate(String fName,
                             String mName,
                             String lName,
                             String vacancy,
                             String mail,
                             String phone,
                             String resumePath,
                             String note) {

        firstName.sendKeys(fName);
        middleName.sendKeys(mName);
        lastName.sendKeys(lName);
        
        selectVacancy(vacancy); 

        email.sendKeys(mail);
        contactNo.sendKeys(phone);

        resume.sendKeys(resumePath);

        notes.sendKeys(note);

        saveButton.click();
    }
}