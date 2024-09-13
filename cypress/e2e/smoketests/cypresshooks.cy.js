


describe("Test Suite Name here ", ()=>{

    
    afterEach( ()=>{

        cy.log(" After Each Test")
   })
    beforeEach( ()=>{

         cy.log(" Before Each Test")
    })

   
    after( ()=>{

        cy.log(" After all Tests")
   })

   before( ()=>{

    cy.log(" Before all Tests")
})





    it("test case title 1 ", ()=>{


        cy.log("1st test body")

    })

    it("test case title 2 ", ()=>{


        cy.log("2nd test body")

    })

    it("test case title 3 ", ()=>{


        cy.log("3rd test body")

    })

    it("test case title 4 ", ()=>{


        cy.log("4th test body")

    })
})