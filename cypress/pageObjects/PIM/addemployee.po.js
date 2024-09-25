class addEmployeePage{

     addEmployeeSubMenu(){

        return "Add Employee"
        
     }

     firstnmameInput(){

        return 'input[name="firstName"]'
     }

     lastNameInput(){

        return 'input[name="lastName"]'
     }

     saveBtn(){

        return 'button[type="submit"]'
     }

     successMessage(){

          return "Successfully Saved"
     }


     requirederrorMessage(){

        return 'span[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]'

     }

     addEmployeeMethod(value1, value2){

 //       cy.contains(this.addEmployeeSubMenu()).click()

        cy.get(this.firstnmameInput()).type(value1)
  
        cy.get(this.lastNameInput()).type(value2)
  
        cy.get(this.saveBtn()).click()
  
        cy.contains(this.successMessage()).should("be.visible")
     }

}

const addemployee = new addEmployeePage()

export default addemployee