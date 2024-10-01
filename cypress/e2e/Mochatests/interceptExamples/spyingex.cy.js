

import login from "../../pageObjects/loginpage.po"
describe("Verify Add employee functionality", () => {


  it("Verify Add Employee error message for Mandotory fields", () => {

    cy.intercept("GET", "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC").as("getEmployees")
    cy.intercept("GET", "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/employment-statuses?limit=0").as("EmpStatus")
    cy.intercept("GET", "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/job-titles?limit=0").as("jobtitle")
    cy.intercept("GET", "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/subunits").as("subunits")

    // cy.intercept("GET", "https://opensource-demo.orangehrmlive.com/raju" ).as("raju")

    cy.visit("/web/index.php/auth/login")

    cy.xpath(login.usernameInput).type(Cypress.env("username"))

    cy.get(login.passwordInput).type(Cypress.env("password"))

    cy.get("button[type='submit']").click()

    cy.get('a.oxd-main-menu-item.active').should("be.visible")
    cy.get('a[href="/web/index.php/pim/viewPimModule"]').click()
    // verify where this API called 
    // verify data which is coming from api

  
    cy.wait('@getEmployees').then(({ response }) => {
      expect(response.statusCode).to.eq(200)


    })

    cy.wait('@subunits').then(({ response }) => {
      expect(response.statusCode).to.eq(200)
      expect(response.body.data[1].name).to.equal("Administration")

    })

    // cy.wait('@raju').then(({ response }) => {
    //   expect(response.statusCode).to.eq(200)

    // })


  })


})