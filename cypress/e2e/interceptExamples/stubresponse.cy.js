
import login from "../../pageObjects/loginpage.po"
context("Verify Add employee functionality", () => {

  beforeEach("Login", () => {

    cy.intercept("GET", "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC",
      {
        statusCode: 200,
        body: {
          "data": [

            {
              "empNumber": 7,
              "lastName": "user",
              "firstName": "manda",
              "middleName": "akhil",
              "employeeId": "muser",
              "terminationId": null,
              "jobTitle": {
                "id": 23,
                "title": "HR Manager",
                "isDeleted": true
              },
              "subunit": {
                "id": 13,
                "name": "Human Resources"
              },
              "empStatus": {
                "id": 3,
                "name": "Full-Time Permanent"
              },
              "supervisors": []
            },
            {
              "empNumber": 204,
              "lastName": "Nelson",
              "firstName": "Amber",
              "middleName": "",
              "employeeId": "0405",
              "terminationId": null,
              "jobTitle": {
                  "id": 28,
                  "title": "Automaton Tester",
                  "isDeleted": true
              },
              "subunit": {
                  "id": null,
                  "name": null
              },
              "empStatus": {
                  "id": 1,
                  "name": "Raju"
              },
              "supervisors": []
          }
  

          ],
          "meta": {
            "total": 30
          },
          "rels": []
        }
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
    cy.wait('@getEmployees')

    cy.get("div.oxd-table-body > div > div > div:nth-child(5) > div").should('contain.text', 'HR Manager (Deleted)')


  })


})