class loginPage{

    usernameInput = "input[name='username']"
    passwordInput = "input[type='password']"

    loginBtn(){

        return "button[type='submit']"
    }

    loginerrorMessage(){

        return 'Invalid credentials'
    }

    loginwithcreds(username, password){

        cy.visit("/web/index.php/auth/login")

        cy.get(this.usernameInput).type(username)
    
        cy.get(this.passwordInput).type(password)
    
        cy.get(this.loginBtn()).click()
    
    }

}

const login = new loginPage()

export default login