import PerformacePage from "../../pages/PerformancePage";
//import DashboardTestBase,{dashboarbInit} from "./../../base/DashboardTestBase";
 import ApiUtils, { loginDashboard } from "../../utils/ApiUtils";
 

const performacePage = new PerformacePage();


describe("Dashboard PerformacePage", () => {
    beforeEach(async() => {
        // Login to the dashboard
      const jsonObject = await loginDashboard("arthurp@doublecoconut.com", "123456");
  
      if (!window.localStorage) {
        throw new Error("localStorage is not defined");
      }
  
      // Set the access token in local storage
      await window.localStorage.setItem("authToken", jsonObject.accessToken);
  
      // Set the selected venue in local storage
      await window.localStorage.setItem("selectedVenue", "d99fb02b-a31b-418c-a396-36c5fad999ba");
  
      // Set the auth response in local storage
      await window.localStorage.setItem("authResponse", JSON.stringify(jsonObject));
  
      // Refresh the page
      await cy.reload();
      
      });
    
    it("verifyFunctionalityPerformacePage", async () => {
        await cy.visit("dashboard/creators");
        
  
      
    });
  });