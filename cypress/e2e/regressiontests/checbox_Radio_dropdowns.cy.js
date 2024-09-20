
describe('Verify Working with Elements ', () => {


    it('Verify checkbox, radio button, dropdown', () => {

        cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')

        cy.get('input[name^="chk_altemail"]').click().should("be.checked")
        //cy.get('input[name^="chk_altemail"]').should("be.checked")

        cy.wait(4000)
        cy.get('input[name^="chk_altemail"]').uncheck().should("not.be.checked")

        //Radio

        cy.get('input[value="m"]').should("be.checked")
        cy.get('input[value="f"]').should("not.be.checked")

        cy.get('input[value="f"]').check()

        cy.get('input[value="f"]').should("be.checked")
        cy.get('input[value="m"]').should("not.be.checked")

        //Dropdowns 

        //3 ways 

        //text
        cy.get('select[name^="DOB_Month"]').select("APR").should("have.value", "04")

        //or

        //value 
        cy.get('select[name^="DOB_Month"]').select("08").should("have.value", "08")

        //index 

        cy.get('select[name^="DOB_Month"]').select(3)


    })

})  