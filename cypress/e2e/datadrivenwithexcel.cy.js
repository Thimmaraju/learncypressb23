///<reference types="cypress"/>

import data from "../fixtures/ExceltoJson/user_data.json"
import dashboard from "../pages/dashboard.po"

describe('Automation - Working With Data driven testing json', function () {

  data.forEach((data) =>{

        
        it('Cypress Test Case - Understanding Data driven testing json', function () {
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
            cy.xpath(dashboard.usernameInput()).type(data.username);
            cy.xpath(dashboard.passwordInput()).type(data.password);
            cy.get(dashboard.loginBtn()).click();
            cy.contains(dashboard.loginerrormessage).should("be.visible")

          })

    })
    
})



  
        // it('Cypress Test Case - Understanding Data driven testing json', function () {
        //     cy.visit('https://the-internet.herokuapp.com/login'); 
        //     cy.get('#username').type(data.username);
        //     cy.get('#password').type(data.password);
        //     cy.get('button[type="submit"]').click();
        //     cy.get('.flash.error').should("be.visible")

        //   })

