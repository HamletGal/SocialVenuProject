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
}

