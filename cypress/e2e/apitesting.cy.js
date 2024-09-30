///<reference types="cypress"/>

describe('Automation - API testing', function () {

    it('Cypress Test Case - GET', function () {

        cy.request("GET", "https://reqres.in/api/users?page=2").then((response)=>{
  
            expect(response.status).to.equal(200)

            expect(response.body).to.have.property("page", 2)

            expect(response.body.data[0].id).to.equal(7)

            expect(response.body.data[0].email).to.equal("michael.lawson@reqres.in")

            expect(response.body.data[2].email).to.equal("tobias.funke@reqres.in")
            cy.writeFile("cypress/fixtures/response.txt", response)
        })

    })


    it("GET - real time", ()=>{

        cy.request({

            method:"GET",
            url:"/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC",
            headers:{
             
                "cookie": Cypress.env("cookivalue")

            }
        }).then((response)=>{
  
            expect(response.status).to.equal(200)

            cy.writeFile("cypress/fixtures/orangeHrmGetEmployees.txt", response)
        })


    })
   
   const  arr = [
    {"firstName":"Boomika","middleName":"","lastName":"Kuamr","empPicture":null,"employeeId":"dfvkj"},
    {"firstName":"Pavan","middleName":"","lastName":"Kuamr","empPicture":null,"employeeId":"jebgfrh"}]

    arr.forEach(element => {
        
        it(`POSt - real time -${element.firstName}`, ()=>{

            let r = (Math.random() + 1).toString(36).substring(7);
    
            cy.request({
    
                method:"POST",
                url:"/web/index.php/api/v2/pim/employees",
                headers:{
                 
                    "cookie":Cypress.env("cookivalue")
    
                },
                body: element
            }).then((response)=>{
      
                expect(response.status).to.equal(200)
    
                cy.writeFile("cypress/fixtures/postresponse.txt", response)
            })
    
    
        })
    });
   



})