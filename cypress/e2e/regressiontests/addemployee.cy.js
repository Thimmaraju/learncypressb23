

describe("Verify Add employee functionality", ()=>{

    it("Verify Add Employee error message for Mandotory fields",()=>{

        cy.visit("/web/index.php/auth/login")
    
        cy.get("input[name='username']").type(Cypress.env("username"))
    
        cy.get("input[type='password']").type(Cypress.env("password"))
    
        cy.get("button[type='submit']").click()
    
        cy.get('a.oxd-main-menu-item.active').should("be.visible")

        cy.get('a[href="/web/index.php/pim/viewPimModule"]').click()

        cy.contains('Add Employee').click()

        cy.get('button[type="submit"]').click()

        cy.get('span[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').eq(0).should("be.visible")
        cy.get('span[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').eq(1).should("be.visible")
        

    })

      const arr = ["Srinivas", "Ravi"]
      arr.forEach(element => {
        
        it(`Verify Add Employee With Mandotory details - ${element}`,()=>{

            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
            cy.get("input[name='username']").type("Admin")
        
            cy.get("input[type='password']").type("admin123")
        
            cy.get("button[type='submit']").click()
        
            cy.get('a.oxd-main-menu-item.active').should("be.visible")
    
            cy.get('a[href="/web/index.php/pim/viewPimModule"]').click({force:true})
    
            cy.contains('Add Employee').click()
    
            cy.get('input[name="firstName"]').type(element)
    
            cy.get('input[placeholder="Last Name"]').type("V")
    
            cy.get('button[type="submit"]').click()
    
            cy.contains("Successfully").should("be.visible")
    
    
    
        })
      });



})