class PerformacePage{

    calendarButton = "div > svg[data-testid='CalendarTodayIcon']";
    

    visit(){
        cy.visit("dashboard/creators");
    }

    getTitleText(){
        return cy.get("#chart-topbar-title").text();
    }

    StatisticBlockVideosBtn(){
        return cy.get('#statistic-block-Videos').should('be.visible').click();
    }

    StatisticBlockSharesBtn(){
        return cy.get('#statistic-block-Shares').should('be.visible').click();
    }

    StatisticBlockViewsBtn(){
        return cy.contains('Views').click({force:true});
    }

    StatisticBlockClicksBtn(){
        return cy.contains('Clicks').click({force:true});

    }

    StatisticBlockCreatorsBtn(){
        return cy.get('#statistic-block-Creators').should('be.visible').click();
    }


    ClickCalendarButton(){
        return cy.get(this.calendarButton).click({force:true});
    }
  

}

export default PerformacePage;