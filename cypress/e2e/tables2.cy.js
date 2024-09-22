
describe("suitename", () => {


    it("test cae 1", () => {

        cy.visit('https://the-internet.herokuapp.com/tables')


        cy.get('#table1 > tbody > tr').should("have.length", 4)

        cy.get("#table1 > thead>tr>th").should("have.length", 6)

        cy.get('#table1 > tbody >tr:nth-child(2) >td:nth-child(3)').then((txt) => {

            var textvalue = txt.text()
            cy.log(textvalue)

            expect(textvalue).to.equal("fbach@yahoo.com")

        })


        cy.contains("Doe").parent().within(() => {

            cy.get("td").eq(3).then((txt) => {

                var textvalue = txt.text()
                cy.log(textvalue)


            })
        })


        cy.get('#table1 > tbody >tr').each((rows) => {

            cy.wrap(rows).within((celldata) => {

                cy.log(celldata.text())

            })
        })



    })


})