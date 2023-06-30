class PerformacePage{

    topBarTitle = "#chart-topbar-title";
    statisticBlockVideos = '#statistic-block-Videos';
    statisticBlockShares = '#statistic-block-Shares';
    statisticBlockCreators = '#statistic-block-Creators';
    calendarButton = "div > svg[data-testid='CalendarTodayIcon']";

    visit(){
        cy.visit("dashboard/creators");
    }

    getTitleText(){
        return cy.get(this.topBarTitle).text();
    }

    StatisticBlockVideosBtn(){
        return cy.get(this.statisticBlockVideos).should('be.visible').click();
    }

    StatisticBlockSharesBtn(){
        return cy.get(this.statisticBlockShares).should('be.visible').click();
    }

    StatisticBlockViewsBtn(){
        return cy.contains('Views').click({force:true});
    }

    StatisticBlockClicksBtn(){
        return cy.contains('Clicks').click({force:true});

    }

    StatisticBlockCreatorsBtn(){
        return cy.get(this.statisticBlockCreators).should('be.visible').click();
    }


    ClickCalendarButton(){
        return cy.get(this.calendarButton).click({force:true});
    }
  

}

export default PerformacePage;