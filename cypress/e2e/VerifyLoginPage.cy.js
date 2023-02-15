/// <reference types="cypress"/>
 
import LoginPageLocators from "../pages/LoginPageLocators";


describe('loginTest', () => {
      before(function (){
        cy.fixture("loginTestData.json").then((data) => {
            this.data = data;
            console.log(data);

        });
      });

    it('Verify positive loginPage',function () {

        //const Homepage=new LoginPageLocators()

        cy.visit('https://www.saucedemo.com/');
       
        var title = cy.title();
        console.log(title);

        cy.Login(this.data.usernamePositive, this.data.password)

       // Homepage.getUsername().type(this.data.usernamePositive)
       // Homepage.getPassword().type(this.data.password)
       // Homepage.getEnter().click()

    })

    it('Verify Negative loginPage',function () {

      const Homepage=new LoginPageLocators()

      cy.visit('https://www.saucedemo.com/');
      cy.Login(this.data.usernameNegative, this.data.password)

      //Homepage.getUsername().type(this.data.usernameNegative)
      //Homepage.getPassword().type(this.data.password)
      //Homepage.getEnter().click()
      cy.get('[data-test="error"]').should('be.visible')

  })

})
