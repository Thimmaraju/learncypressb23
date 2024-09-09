
describe('Verify Login functionality', function() {

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

    cy.get("input[name='username']", { timeout: 40000 }).type(creds.username)

    cy.get("input[type='password']").type(creds.password)

    cy.get("button[type='submit']").click()

    for(let item in menuitems){

      cy.contains(menuitems[item]).should("be.visible")
  }


  })

  it('Verify login with valid username and invalid password', () => {


  
    cy.visit("/web/index.php/auth/login")

    cy.get("input[name='username']").type("Admin")

    cy.get("input[type='password']").type("ergberhg")

    cy.get("button[type='submit']").click()

    cy.contains('Invalid credentials').should("be.visible")


  })

  it('Verify login with invalid username and valid password', () => {

    cy.visit("/web/index.php/auth/login")

    cy.get("input[name='username']").type("kjfjhje")

    cy.get("input[type='password']").type("admin123")

    cy.get("button[type='submit']").click()

    cy.contains('Invalid credentials').should("be.visible")


  })


  it('Verify login with invalid username and invalid password', () => {

    cy.visit("/web/index.php/auth/login")

    cy.get("input[name='username']").type("kjfjhje")

    cy.get("input[type='password']").type("kjehgfrhv")

    cy.get("button[type='submit']").click()

    cy.contains('Invalid credentials').should("be.visible")


  })




})