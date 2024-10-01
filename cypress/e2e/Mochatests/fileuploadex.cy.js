describe('Verify file upload', () => {


    it('Verify file uploading - selectFile', () => {

        cy.visit("https://cgi-lib.berkeley.edu/ex/fup.html")
        cy.get('input[name="upfile"]').selectFile("D:/LearncypressB23/cypress/fixtures/B23 Cypress.txt")
        cy.get('input[type="submit"]').click()

    })

    it('Verify file uploading - attachFile', () => {

        cy.visit("https://cgi-lib.berkeley.edu/ex/fup.html")
        cy.get('input[name="upfile"]').attachFile(["B23 Cypress.txt"])
        cy.get('input[type="submit"]').click()

    })

    it.only("downloadfile examaple", ()=>{

        cy.downloadFile("https://etimg.etb2bimg.com/thumb/msid-109493902,imgsize-30370,width-1200,height=765,overlay-etbrandequity/marketing/hafele-welcomes-sachin-tendulkar-as-brand-ambassador.jpg", "cypress/downloads", "sachin.jpg")

        cy.readFile("cypress/downloads/sachin.jpg").should("exist")
    })

})