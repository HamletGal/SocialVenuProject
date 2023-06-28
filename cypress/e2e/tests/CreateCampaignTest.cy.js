import CampaignsMainPage from "../../pages/CampaignsMainPage";
import CreateCampaignPage from "../../pages/CreateCampaignPage";

const createCampaignPage = new CreateCampaignPage();
const campaignsMainPage = new CampaignsMainPage();

describe("",()=>{
    beforeEach(() => {
        cy.login();
    });
    
    it("verifyFunctionalityOfTheAppearTopBarInTheCreateCampaignFlow",() => {
        campaignsMainPage.open();
        campaignsMainPage.clickCreateNewCampaignBtn();
        cy.get(createCampaignPage.goBackButton).should("be.visible");
        cy.contains(createCampaignPage.createACampaignTitle).should('be.visible');
        cy.get(createCampaignPage.saveCreateBtn).should("be.visible");  
    })

    it("verifyFunctionalityOfReturnToCampaignListWithoutChange",() => {
        createCampaignPage.open();
        createCampaignPage.clickGoBackBtn();
        cy.get(campaignsMainPage.createNewCampaignBtn).should("be.visible"); 
    })

    it("verifyFunctionalityOfShowUnsavedChangesModal",() => {
        campaignsMainPage.open();
        campaignsMainPage.clickCreateNewCampaignBtn();
        createCampaignPage.clickBrowserBackButton(); 
        cy.contains(createCampaignPage.unsavedChangesModal).should('be.visible');
    })
})

