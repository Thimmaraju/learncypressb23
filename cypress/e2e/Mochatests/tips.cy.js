describe('Working with elemts', () => {


  it('click related tips ', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {

      return false
    })

    cy.visit('https://cypress.io')

    cy.get('a[href="https://on.cypress.io/writing-your-first-test"]').last().click({ force: true })
  })

  it('click related tips --- 2', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {

      return false
    })

    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

    cy.get('div[class="product-action"]>button[type="button"]').click({ multiple: true })
  })


  it('check box', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {

      return false
    })

    cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')


    cy.get('input[name^="chk_altemail"]').check().should("be.checked").and('be.visible')

    //cy.get('input[name^="chk_altemail"]').should("be.checked")

    cy.wait(5000)

    cy.get('input[name^="chk_altemail"]').uncheck().should("not.be.checked")

  })

  it('Radio Button', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {

      return false
    })

    cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')

    cy.get('input[value="m"]').should("be.checked")

    cy.get('input[value="f"]').should("not.be.checked")

    cy.get('input[value="f"]').check().should("be.checked")

    cy.get('input[value="m"]').should("not.be.checked")


  })


  it('Drop Down', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {

      return false
    })

    cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')
    //Text

    cy.get('select[name*="DOB_Month"]').select("JUN").should("have.value", "06")

    cy.wait(5000)

    //value 

    cy.get('select[name*="DOB_Month"]').select("10").should("have.value", "10")

    cy.wait(5000)
    //index 

    cy.get('select[name*="DOB_Month"]').select(11).should("have.value", "11")

    cy.get('select[name*="DOB_Month"]>option').each((text)=>{

        var dropdownvalue = text.text()

        cy.log(dropdownvalue)
    })


    cy.get('select[name*="DOB_Month"]>option').its('length').then((len)=>{
     
      cy.log(len)

    })

      
  })



  it.only('Tabs', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {

      return false
    })

    cy.visit('https://www.cypress.io/')

    cy.get('a[href="https://on.cypress.io/installing-cypress"]').first().invoke("removeAttr", "target").click({force:true})

    cy.url().should("eq", "https://docs.cypress.io/guides/getting-started/installing-cypress")

    cy.url().should("include", "getting-started/installing-cypress")

    cy.go(-1)

    cy.wait(5000)
    cy.go(1 )

    cy.wait(5000)

    cy.reload()
    
      
  })



})