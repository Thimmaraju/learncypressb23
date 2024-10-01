

describe('Automation - drag and drop', function () {

    it('Cypress Test Case ', function () {

        //cy.visit("https://the-internet.herokuapp.com/drag_and_drop")

        // cy.get('.sourceitem').drag('.targetitem')

       // cy.get('#column-a').drag("#column-b")

       Cypress.on("uncaught:exception", () => {

        return false;
      });

    //    cy.visit('https://www.globalsqa.com/demo-site/draganddrop/#google_vignette')

    //    cy.get('#gallery>li:nth-child(1)').drag('#trash')


    // cy.visit("https://demoqa.com/droppable")

    // cy.get('#draggable').drag("#droppable")

    // cy.visit("https://demoqa.com/droppable")

    // const dataTransfer = new DataTransfer();

    // cy.get('#draggable').trigger('dragstart', {

    //   dataTransfer
    // })

    // cy.get('#droppable').trigger('drop', {

    //   dataTransfer
    // })


     cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")

     //cy.get('#box1').drag("#box101", {force: true})
    
      
    const dataTransfer = new DataTransfer();

    cy.get('#box1').trigger('dragstart', {

      dataTransfer
    })

    cy.get('#box101').trigger('drop', {

      dataTransfer
    })

    })

})
  