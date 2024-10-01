
import login from "../../pageObjects/loginpage.po"
context("Verify Add employee functionality", () => {

    beforeEach("Login", () => {

        cy.intercept({
            method: "GET",
            url: "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC"
        },
        (req) => {
               req.query.limit=5
               req.query.sortOrder='ASC' 
               req.query.sortField="employee.firstName"
            }
        ).as("getEmployees")
        cy.visit("/web/index.php/auth/login")

        cy.xpath(login.usernameInput).type(Cypress.env("username"))

        cy.get(login.passwordInput).type(Cypress.env("password"))

        cy.get("button[type='submit']").click()

        cy.get('a.oxd-main-menu-item.active').should("be.visible")

    })

    afterEach(() => {

        cy.log("Test Execution is Completed")

    })


    it("Verify Add Employee error message for Mandotory fields", () => {

        cy.get('a[href="/web/index.php/pim/viewPimModule"]').click()
        // verify where this API called 
        // verify subbed response
        cy.wait('@getEmployees').its('response.statusCode').should('eq', 200)

        //cy.get("div.oxd-table-body > div > div > div:nth-child(5) > div").should('contain.text', 'HR Manager (Deleted)')


    })


})