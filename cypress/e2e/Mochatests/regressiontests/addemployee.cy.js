
import login from "../../pageObjects/loginpage.po"

import dashboard from "../../pageObjects/dashboardpage.po"

import addemployee from "../../pageObjects/PIM/addemployee.po"

context("Verify Add employee functionality", () => {

  beforeEach( "Login", ()=>{
    cy.visit("/web/index.php/auth/login")

    cy.get(login.usernameInput).type(Cypress.env("username"))

    cy.get(login.passwordInput).type(Cypress.env("password"))

    cy.get(login.loginBtn()).click()

    cy.contains(dashboard.dashBoardMenu()).should("be.visible")
    
})

afterEach( ()=>{

  cy.log("Test Execution is Completed")
  
})


  it("Verify Add Employee error message for Mandotory fields", () => {



    cy.contains(dashboard.pimMenu()).click()

    cy.contains(addemployee.addEmployeeSubMenu()).click()

    cy.get(addemployee.saveBtn()).click()

    cy.get(addemployee.requirederrorMessage()).eq(0).should("be.visible")
    cy.get(addemployee.requirederrorMessage()).eq(1).should("be.visible")


  })

  const arr = ["Srinivas", "Ravi"]
  arr.forEach(element => {

    specify(`Verify Add Employee With Mandotory details - ${element}`, () => {

          cy.contains(dashboard.pimMenu()).click({ force: true })

          addemployee.addEmployeeMethod(element, "R")



    })
  });



})