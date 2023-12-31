import { BasePage } from "./BasePage";


class CreateCampaignPage extends BasePage{

    createCampaignSteps = [];
    goBackButton = "#go-back-button";
    saveCreateBtn = "#save-and-create-button";
    createACampaignTitle = "Create a Campaign";
    unsavedChangesModal = "Unsaved Changes";
    createCampaignStep4 = "#create_campaign_step_4";
    contactMethodSelectBtn = "Select...";
    phoneNumber = "Phone Number";
    rewardPhoneNumberInput = "#reward-phone-number-input";
    saveAndCreateButton = "#save-and-create-button"; 
    editSmsInvitationButton = "#edit-sms-invitation-button";

   

    getUrl(){
        return super.getUrl("new-campaign/campaign-objectives");
    }
    
    clickGoBackBtn(){
        cy.get(this.goBackButton).should("be.visible").click();
    }

    openAllIncentiveCampaignSteps() {
      
        this.createCampaignSteps.push(cy.get("#create_campaign_step_2"));
        this.createCampaignSteps.push(cy.get("#create_campaign_step_3"));
        this.createCampaignSteps.push(cy.get("#create_campaign_step_4"));
        this.createCampaignSteps.push(cy.get("#create_campaign_step_5"));
        this.createCampaignSteps.push(cy.get("#create_campaign_step_6"));
        
        this.createCampaignSteps.forEach(createCampaignStep => {
          cy.wait(2000)
          createCampaignStep.click({ force: true });
        });
      }

    clickCreateCampaignStep4(){
        cy.get(this.createCampaignStep4).should("be.visible").click();
    }

    clickSelectBtn(){
        cy.contains(this.contactMethodSelectBtn).should('be.visible').click({force:true});
    }

    clickPhoneNumber(){
        cy.contains(this.phoneNumber).should('be.visible').click({force:true});
    }

    setRewardPhoneNumber(){
        super.eraseAllTextField(this.rewardPhoneNumberInput);
        super.waitTextFieldShouldBeEmpty(this.rewardPhoneNumberInput,'have.value','');
        const phoneNumberText = super.generateRandomNumber();
        cy.get(this.rewardPhoneNumberInput).type(phoneNumberText);

    }

    clickSaveAndCreateButton(){
        super.waitElementToPresent(this.saveAndCreateButton);
        cy.get(this.saveAndCreateButton).click();
    }




}

export default CreateCampaignPage;

