


import addjobtitledata from "../../fixtures/Admin/addjobtitle.json"

describe('Verify Add Job functionality', () => {


  it('Verify add job title with Mandatory details', () => {
   
   cy.login(Cypress.env("username"), Cypress.env("password"))

    cy.get('a.oxd-main-menu-item.active').should("be.visible")

    cy.contains("Admin").click() // first matching 

    cy.contains('Job').click()

    cy.contains('Job Titles').click()

    cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()

    let r = (Math.random() + 1).toString(36).substring(7);

    cy.get('input[class="oxd-input oxd-input--active"]').eq(1).type(addjobtitledata.jobtitle+r)

    cy.get('textarea[placeholder="Type description here"]').type(addjobtitledata.jobdesription)

    cy.get('button[type="submit"]').click()

    cy.contains("Successfully Saved").should("be.visible")




  })


})