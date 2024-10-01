describe('Automation - Working With Iframe', function () {

    it('Cypress Test Case - Understanding Iframe and how to work with Iframe', function () {
  
      cy.visit('https://www.wikipedia.org/');

    
      cy.get('a[data-jsl10n="portal.app-links.url"]').then((text) =>{
  
        var textvalue = text.text()
        
        cy.log(textvalue)
      
      })

      cy.get('span[data-jsl10n="footer-donate"]').then((text) =>{
  
        var donatelink = text.text()
        
        cy.log(donatelink)

        expect(donatelink).to.equal("You can support our work with a donation.")
      
      })

    })

})