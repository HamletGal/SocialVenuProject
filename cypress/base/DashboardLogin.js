import DasboardLoginPage from "./../pages/DashboardLoginPage";

const dasboardLoginPage = new DasboardLoginPage();

class DashboardLogin{
    constructor(){
       
    }

    log(){
      dasboardLoginPage.visit();
      dasboardLoginPage.emailField(Cypress.config('email'));
      dasboardLoginPage.passwordField(Cypress.config('password'));
      dasboardLoginPage.pressSignInButton();
      cy.get('input[placeholder="Search account"]').type("test auto{enter}");  
      cy.contains('p','Test Automation Company').click({force:true})
       
    }
}

export default DashboardLogin