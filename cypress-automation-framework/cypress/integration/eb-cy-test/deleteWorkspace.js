/// <reference types="cypress" />
describe("Delete Workspaces", () => {
        
  it("Delete Team Workspace", () => {
    cy.loginTOTeamWorkspace({url:'cypresstest137',email:'illia.ivanin+137@rubygaragee.org', password:'12345678' })
    cy.wait(100)
    cy.getCookie('currentWorkspaceCode').then(({ value }) => {
      cy.visit(`/${value}/company/profile`);
    });
    cy.get('[data-cy=company-profile-title]').should('have.text', 'Company profile');
    cy.get('[data-cy=delete-company-button]').should('be.disabled');
    cy.get('[data-cy=cancel-subscription-button]').click();//  maybe needs .click({ force: true });
    cy.get('.main-modal__title').should('have.text','Cancel subscription plan');
    cy.get('.main-btn--danger').click();
    cy.get('[data-cy=delete-company-button]').click();
    cy.contains('.main-checkbox', 'Delete company account & workspace').click();
    cy.contains('.main-checkbox', 'Delete clients & team members').click();
    cy.contains('.main-checkbox', 'Delete services & past appointments').click();
    cy.get('#password').type('12345678');
    cy.get('.d-flex > .main-btn--danger').click();
    cy.url().should('include', '/login');    
  });


  it("Delete Personal Workspace", () => {
    cy.loginTOPersonalWorkspace({ email:'illia.ivanin+137@rubygaragee.org', password:'12345678' })
    cy.wait(100)
    cy.getCookie('currentWorkspaceCode').then(({ value }) => {
      cy.visit(`/${value}/employee/account_settings/security`);
    });
    cy.get('.d-flex > .main-btn--flat > .main-btn__txt').click();//  maybe needs .click({ force: true });
    cy.get('.main-modal__title').should('have.text','Cancel subscription plan');
    cy.get('.main-btn--danger').click();
    cy.contains('.d-flex > .main-card__action', 'Delete account').click(); 
    cy.contains('.main-checkbox', 'Delete workspace & account').click();
    cy.contains('.main-checkbox', 'Delete clients list').click();
    cy.contains('.main-checkbox', 'Delete services & past appointments').click();
    cy.get('.main-modal__body > .main-input > .relative > #password').type('12345678');
    cy.get('.main-modal__footer > .d-flex > .main-btn--danger').click();
    cy.url().should('include', '/login');
  });
})