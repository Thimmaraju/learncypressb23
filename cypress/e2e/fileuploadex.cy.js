describe('Verify file upload', () => {


    it('Verify file uploading - selectFile', () => {

        cy.visit("https://cgi-lib.berkeley.edu/ex/fup.html")
        cy.get('input[name="upfile"]').selectFile("D:/LearncypressB23/cypress/fixtures/B23 Cypress.txt")
        cy.get('input[type="submit"]').click()

    })

    it.only('Verify file uploading - attachFile', () => {

        cy.visit("https://cgi-lib.berkeley.edu/ex/fup.html")
        cy.get('input[name="upfile"]').attachFile(["B23 Cypress.txt"])
        cy.get('input[type="submit"]').click()

    })

})