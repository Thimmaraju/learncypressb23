

describe('Verify Add Job functionality', () => {


  it('Verify add job title with Mandatory details', () => {
   
    cy.visit("/web/index.php/auth/login")
    
    cy.get(`input[name="username"]`).type(Cypress.env("username"))

    cy.get("input[type='password']").type(Cypress.env("password"))

    cy.get("button[type='submit']").click()

    cy.get('a.oxd-main-menu-item.active').should("be.visible")

    cy.contains("PIM").click() // first matching 

   // cy.get('input[type="checkbox"]').check({force:true})

   // cy.get('input[type="checkbox"]').uncheck({force:true})

    cy.wait(3000)
    cy.get('input[type="checkbox"]').check(["1","2", "3", "4"], {force:true})
    cy.wait(3000)
    cy.get('input[type="checkbox"]').uncheck(["1", "4"], {force:true})

  })

})