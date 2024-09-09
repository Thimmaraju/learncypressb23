describe('Verify Login functionality', () => {


    it.skip('Verify login with valid credentials', () => {
      cy.viewport(1920,1080)
        
      cy.visit("/web/index.php/auth/login")
      
      cy.get("input[name='username99']",{timeout:40000}).type("Admin")
  
      cy.get("input[type='password']").type("admin123")
  
      cy.get("button[type='submit']").click()
  
      cy.get('a.oxd-main-menu-item.active').should("be.visible")
  
  
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
  
  
    it.skip('Verify login with invalid username and invalid password', () => {
        
      cy.visit("/web/index.php/auth/login")
      
      cy.get("input[name='username']").type("kjfjhje")
  
      cy.get("input[type='password']").type("kjehgfrhv")
  
      cy.get("button[type='submit']").click()
  
      cy.contains('Invalid credentials').should("be.visible")
      
  
    })
  
  
    
  
  })