import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import login from "../../pageObjects/loginpage.po"

Given("Based on the browser set viewport", ()=>{

    switch (Cypress.browser.name) {
        case "chrome":
          cy.viewport(1920, 1080)
          break;
        case "firefox":
          cy.viewport("iphone-3")
          break;
  
        case "edge":
          cy.viewport("ipad-2")
          break
  
      }
})


Given("User Launch the Application", ()=>{

    cy.visit("/web/index.php/auth/login")
})

When("User enter username {string} and password as {string}", (username, password)=>{
  
     cy.xpath(login.usernameInput).type(username)
     cy.get(login.passwordInput).type(password)

})

And("User clicks on login button", ()=>{

    cy.get('button[type="submit"]').click()
})

Then("User navigated to dashbaord page", ()=>{

    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
})

Then("User should get login error message", ()=>{

    cy.contains("Invalid credentials").should("be.visible")
})