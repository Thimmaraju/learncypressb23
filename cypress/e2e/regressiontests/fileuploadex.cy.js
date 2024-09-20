///<reference types="cypress"/>

describe('Automation - File Upload Example', function () {

    it('Cypress Test Case - Understanding upload file- Attachfile', function () {
  
      cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html');

     cy.get('input[name="upfile"]').attachFile('B22 Automation classes notes .txt');
      
      cy.wait(3000)
      cy.xpath('//input[@type="submit"]').click();
    
      cy.contains("The file's contents are:").should("be.visible")
    })


    
    it.only('Cypress Test Case - Understanding upload file - Select file ', function () {
  
      cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html');

     cy.xpath('//input[@name="upfile"]',{timeout: 40000}).selectFile('D:/learncypressb22/cypress/fixtures/B22 Automation classes notes .txt');
    

      cy.wait(3000)
      cy.xpath('//input[@type="submit"]').click();
   
    
      cy.contains("The file's contents are:").should("be.visible")
    })
   
    //Import - Uploading file 

    it.only('Cypress Test Case - Understanding download file ', function () {
      let r = (Math.random() + 1).toString(36).substring(7);
      cy.downloadFile("https://istqb-main-web-prod.s3.amazonaws.com/media/documents/ISTQB_CTFL_Syllabus-v4.0.pdf", "cypress/downloads", "istqbsyllabus"+r+".pdf")
      cy.readFile("cypress/downloads/istqbsyllabus"+r+".pdf").should('exist')
    })

    it.only('Cypress Test Case - Understanding download file ', function () {
      
      cy.downloadFile("https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/RTS2K95P_1200x768.png?VersionId=GTfAEWfulzN4zPrzfMsalQlCc_ZXX.Jl&size=690:388","cypress/downloads", "sachin.jpg")
      cy.readFile('cypress/downloads/sachin.jpg').should('exist')
    })

    it.only('Cypress Test Case - Understanding download file ', function () {
      
      cy.downloadFile("https://cdn.britannica.com/54/75854-050-E27E66C0/Eiffel-Tower-Paris.jpg","cypress/downloads", "tower.jpg")
      cy.readFile('cypress/downloads/tower.jpg').should('exist')
    })


    it.only('Cypress Test Case - Understanding download file ', function () {
      
      cy.downloadFile("https://istqb-main-web-prod.s3.amazonaws.com/media/documents/ISTQB_CTFL_Syllabus-v4.0.pdf","cypress/downloads", "syllabus.pdf")
      cy.readFile('cypress/downloads/syllabus.pdf').should('exist')
    })
  })