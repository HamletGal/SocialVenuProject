import { BasePage } from "./BasePage";

class CampaignsMainPage extends BasePage{

    createNewCampaignBtn = "#create-new-campaign-button";
   


    getUrl(){
        return super.getUrl("reward-campaigns");
    }
    
    clickCreateNewCampaignBtn(){
        return cy.get(this.createNewCampaignBtn).should('be.visible').click();
    }

}

export default CampaignsMainPage;