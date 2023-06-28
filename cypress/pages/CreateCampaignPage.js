import { BasePage } from "./BasePage";

class CreateCampaignPage extends BasePage{

    
    goBackButton = "#go-back-button";
    saveCreateBtn = "#save-and-create-button";
    createACampaignTitle = "Create a Campaign";
    unsavedChangesModal = "Unsaved Changes";


    getUrl(){
        return super.getUrl("new-campaign/campaign-objectives");
    }
    
    clickGoBackBtn(){
        return cy.get(this.goBackButton).should("be.visible").click();
    }
}

export default CreateCampaignPage;