
package com.Framework.Testcases;

import org.openqa.selenium.support.PageFactory;
import org.testng.annotations.Test;

import com.Framework.Pages.BaseClass;
import com.Framework.Pages.LoginPage;
import com.Framework.Pages.RecruitmentPage;

public class RecruitmentPageTest extends BaseClass {

    @Test
    public void addCandidate() throws InterruptedException {

        LoginPage login = PageFactory.initElements(driver, LoginPage.class);

        login.login_OrangeHRM(
                excel.getStringData("LoginHRM", 0, 0),
                excel.getStringData("LoginHRM", 0, 1));

        Thread.sleep(3000);

        RecruitmentPage recruit = PageFactory.initElements(driver, RecruitmentPage.class);

        recruit.clickRecruitment();

        Thread.sleep(2000);

        recruit.clickAddButton();

        Thread.sleep(2000);

        recruit.addCandidate(
                "Kuldeep",
                "Kumar",
                "Sharma",
                "Payroll Administrator",
                "kuldeep@gmail.com",
                "9876543210",
                "D:\\Coforge Seleninium automation testiong\\SeleniumHybridDrivenFramework-OrangeHRM_Application\\TestData\\index wt.pdf",
                "Automation Testing Candidate");

        Thread.sleep(5000);
    }
}