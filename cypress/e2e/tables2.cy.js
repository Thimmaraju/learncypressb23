
describe("suitename", () => {


    it("test cae 1", () => {

        cy.visit('https://the-internet.herokuapp.com/tables')


        cy.get('#table1 > tbody > tr').should("have.length", 6)

        cy.get("#table1 > thead>tr>th").should("have.length", 6)

        cy.get('#table1 > tbody >tr:nth-child(4) >td:nth-child(4)').then((txt) => {

            var textvalue = txt.text()
            cy.log(textvalue)

            //expect(textvalue).to.equal("$50.00")

        })


        cy.contains("Conway").parent().within(() => {

            cy.get("td").eq(5).find('a[href="#delete"]').click()

        })
        cy.get('#table1 > tbody >tr').each((rows) => {

            cy.wrap(rows).within((celldata) => {

                cy.log(celldata.text())

            })
        })



    })


})