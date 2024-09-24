const availablefixtures = [
    {
      "name": "dd/postbody1",
      "context": "diwakar"
    },
    {
      "name": "dd/postbody2",
      "context": "Mahesh"
    }
  ]
  
  
  
  describe("verify addemployee functionality", function () {
  
    availablefixtures.forEach((afixture) => {
      describe(afixture.context, () => {
        //Mostly used for Setup Part
        before(function () {
          cy.fixture(afixture.name).then(function (data) {
            this.data = data;
          })
        })
  
        it('Cypress Test Case - add employee', function () {

            cy.request({

                url: "/web/index.php/api/v2/pim/employees",
                method: "POST",
                headers:{
    
                    "Cookie": Cypress.env("raju")
                },
                body: this.data
    
            }).then((response)=>{
    
              expect(response.status).to.equal(200)
              cy.writeFile("cypress/fixtures/postresponseorangeHRM.json", response)
    
            })


        })
  
      })
    })
  })