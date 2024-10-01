
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


Given("I open Google page", ()=>{

    cy.visit("https://google.com")
})



Then("I see {string} in the title", (title)=>{

    cy.title().should("eq", title)
})