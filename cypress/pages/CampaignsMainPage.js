import { BasePage } from "./BasePage";

class CampaignsMainPage extends BasePage{

    createNewCampaignBtn = "#create-new-campaign-button";
       
    clickCreateNewCampaignBtn(){
        return cy.get(this.createNewCampaignBtn).should('be.visible').click();
    }

    getUrl(){
        return super.getUrl("reward-campaigns");
    }

}

export default CampaignsMainPage;