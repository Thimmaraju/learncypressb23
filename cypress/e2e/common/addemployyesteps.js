import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import addemployee from "../../pageObjects/PIM/addemployee.po"

When("User clicks on PIM", ()=>{

    cy.contains("PIM").click()
})

And("User clicks on Add employee submenu", ()=>{

    cy.get(".oxd-topbar-body>nav>ul>li:nth-child(3)").click()
})

And('User clicks on save button', ()=>{

    cy.get(addemployee.saveBtn()).click()
})

Then("User should get error message for firstname and lastnamefields", ()=>{

    cy.get(addemployee.requirederrorMessage()).eq(0).should("be.visible")
    cy.get(addemployee.requirederrorMessage()).eq(1).should("be.visible")
})

And("User enter firstname {string}", (fisrtname)=>{

    cy.get(addemployee.firstnmameInput()).type(fisrtname)
})

And("User enter lastname {string}", (lastname)=>{

    cy.get(addemployee.lastNameInput()).type(lastname)
})

Then("User get success message", ()=>{
   
    cy.contains("Successfully Saved").should("be.visible")

})

And("User enter own EmployeeiD", ()=>{

    let r = (Math.random() + 1).toString(36).substring(7);
    cy.get('div.oxd-grid-2.orangehrm-full-width-grid > div > div > div:nth-child(2) > input').type(r)
})