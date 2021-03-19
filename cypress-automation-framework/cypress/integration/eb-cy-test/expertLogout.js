/// <reference types="cypress" />

describe("Expert log out", () => {
  beforeEach(()=>{
    cy.loginTOTeamWorkspace({url:'cypresstest',email:'illia.ivanin@rubygarage.org', password:'12345678' })
  })
  it("Expert Logs out from the workspace", () => {
    cy.get('[data-cy=header-account-name]').click();
    cy.get('[data-cy=account-workspace-logout] > .mr-8').click();
    cy.get('[data-cy=login-to-your-account-title]').should('have.text', 'Log in to your account');
    cy.url().should('include', '/login');
    cy.get('[data-cy=workspace-name]').should('have.text', 'cypress test');
  });
})