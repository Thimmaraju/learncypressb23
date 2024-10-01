

///<reference types="cypress"/>

import data from "../fixtures/postbody.json"

describe('Automation - APIs', function () {

    it.skip('Cypress Test Case -GET', function () {

        cy.request("GET", "/api/users?page=1").then((response)=>{


            cy.writeFile("cypress/fixtures/getresponse.json", response)

            expect(response.status).to.equal(200)

            expect(response.body).to.have.property("per_page", 6)
            expect(response.body).to.have.property("total_pages", 2)
            expect(response.body.data[0].email).to.equal("george.bluth@reqres.in")
        })

    })

    it('Cypress Test Case -GET', function () {

        cy.request({
           url: "/api/users?page=1",
           method: "GET"
           
        }).then((response)=>{


            cy.writeFile("cypress/fixtures/getresponse.json", response)

            expect(response.status).to.equal(200)

            expect(response.body).to.have.property("per_page", 6)
            expect(response.body).to.have.property("total_pages", 2)
            expect(response.body.data[0].email).to.equal("george.bluth@reqres.in")
        })

    })

    it.only('Cypress Test Case -Orange HRM Get Employees', function () {

        cy.request({

            url: "/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC",
            method: "GET",
            headers:{

                "Cookie": Cypress.env("raju")
            }

        }).then((response)=>{

          expect(response.status).to.equal(200)
          cy.writeFile("cypress/fixtures/getresponseorangeHRM.json", response)

        })

    })

    it.only('Cypress Test Case -Orange HRM Get Employees', function () {

        cy.request({

            url: "/web/index.php/api/v2/pim/employees",
            method: "POST",
            headers:{

                "Cookie": Cypress.env("raju")
            },
            body: data

        }).then((response)=>{

          expect(response.status).to.equal(200)
          cy.writeFile("cypress/fixtures/postresponseorangeHRM.json", response)

        })

    })



})