import login from "../../pageObjects/loginpage.po"
describe('Verify Login functionality', function() {

  beforeEach( ()=>{

    cy.log("Test Execution is Started")
      //cy.visit("/web/index.php/auth/login")
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

  it('Verify login with valid credentials', function() {


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
    cy.login("Admin", "admin123")

    for(let item in menuitems){

      cy.contains(menuitems[item]).should("be.visible")
  }


  })

  it('Verify login with valid username and invalid password', () => {


  
   cy.login("Admin", "rkfbuherb")

    cy.contains(login.loginerrorMessage()).should("be.visible")


  })

  it('Verify login with invalid username and valid password', () => {

     cy.login("kdsnfvjde", "admin123")

    cy.contains('Invalid credentials').should("be.visible")


  })


  it('Verify login with invalid username and invalid password', () => {

    cy.login("wbehf", "fiehn")
    cy.contains('Invalid credentials').should("be.visible")


  })




})