import login from "../../pageObjects/loginpage.po"
describe('Verify Login functionality', function() {

  beforeEach( ()=>{

    cy.log("Test Execution is Started")
    cy.visit("/web/index.php/auth/login")
})


afterEach( ()=>{

  cy.log("Test Execution is Completed")
  
})

  const creds = {

    username: "Admin",
    password: "admin123"
  }

  
  const menuitems = {

    menu1: "Admin",
    menu2 : "PIM",
    menu3 : "Leave",
    menu4: "Time",
    menu5 : "Recruitment"
}

  it.only('Verify login with valid credentials', function() {


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
    cy.visit("/web/index.php/auth/login")

    cy.get(login.usernameInput, { timeout: 40000 }).type(creds.username)

    cy.get(login.passwordInput).type(creds.password)

    cy.get(login.loginBtn()).click()

    for(let item in menuitems){

      cy.contains(menuitems[item]).should("be.visible")
  }


  })

  it('Verify login with valid username and invalid password', () => {


  
    cy.visit("/web/index.php/auth/login")

    cy.get(login.usernameInput).type("Admin")

    cy.get(login.passwordInput).type("ergberhg")

    cy.get(login.loginBtn()).click()

    cy.contains(login.loginerrorMessage()).should("be.visible")


  })

  it('Verify login with invalid username and valid password', () => {

    cy.visit("/web/index.php/auth/login")

    cy.get("input[name='username']").type("kjfjhje")

    cy.get("input[type='password']").type("admin123")

    cy.get("button[type='submit']").click()

    cy.contains('Invalid credentials').should("be.visible")


  })


  it('Verify login with invalid username and invalid password', () => {

    login.loginwithcreds("ejrwbfew","guyfhew")
    cy.contains('Invalid credentials').should("be.visible")


  })




})