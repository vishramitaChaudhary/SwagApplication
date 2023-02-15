/// <reference types="cypress"/>
 
import LoginPageLocators from "../PageObject/LoginPageLocators";


describe('loginTest', () => {
      before(function (){
        cy.fixture("LoginPageData").then((userdata) => {
            this.data = userdata;
            console.log(this.data);

        });
      });

    it ('Print title',function(){

        var title = cy.title();
        console.log(title);
    })  

    it('Verify positive TC',function () {

        //const Homepage=new LoginPageLocators()

        cy.visit('https://www.saucedemo.com/');

        cy.Login(this.data.username, this.data.password)

       // Homepage.getUsername().type(this.data.usernamePositive)
       // Homepage.getPassword().type(this.data.password)
       // Homepage.getEnter().click()

    })

    it('Verify Negative TC',function () {

      //const Homepage=new LoginPageLocators()

      cy.visit('https://www.saucedemo.com/');
      cy.Login(this.data.usernameNegative, this.data.password)

      //Homepage.getUsername().type(this.data.usernameNegative)
      //Homepage.getPassword().type(this.data.password)
      //Homepage.getEnter().click()
      cy.get('[data-test="error"]').should('be.visible')

  })

})
