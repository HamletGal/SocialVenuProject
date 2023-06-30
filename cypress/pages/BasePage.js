export  class BasePage{
  
    
    getUrl(url){
        return url;
    }
    
    open(){
      cy.visit(this.getUrl())
    }

    clickBrowserBackButton(){
      return cy.go("back");
    }

    eraseAllTextField(element){
      return cy.get(element).clear({force: true});
    }

    waitTextFieldShouldBeEmpty(element, condition, empty) {
      return cy.get(element).should(condition, empty);
    }

    waitElementToPresent(element){
      return cy.get(element).should('be.visible').should('not.be.disabled');
    }


    generateRandomNumber() {
      const randomNumber = Math.floor(Math.random() * 1000000000);
      return `${randomNumber}`.padStart(10, '0');
    }

    isElementPresent(element) {
      return cy.get(element).should('exist');
    }



}

