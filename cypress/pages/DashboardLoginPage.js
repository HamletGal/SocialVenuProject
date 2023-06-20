class DasboardLoginPage{

    visit(){
        cy.visit("login")
    }

    emailField(text){
        return cy.get('input[name="email"]').type(text,{ force:true });
    }

    passwordField(text){
        return cy.get('input[name="password"]').type(text,{ force:true });
    }

    pressSignInButton(){
        return cy.get('button[type="submit"]').click({ force:true });
    }

    allAccountsButton(){
        return 'p','All Accounts';
    }


}

export default DasboardLoginPage;