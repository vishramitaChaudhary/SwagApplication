export class LoginPageLocators {

    getUsername()
    {
        return cy.get('[data-test="username"]')
    }

    getPassword()
    {
        return cy.get('#password')
    }
    getEnter()
    {
        return cy.get('[data-test="login-button"]')
    }

    



}