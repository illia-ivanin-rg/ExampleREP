/// <reference types="cypress" />

describe("Expert log out", () => {
  it("Expert Logs out from the workspace", () => {
    cy.visit("https://stagingapp.expertbox.io/");
    cy.get('#url').type('cypresstest');
    cy.get('.auth__actions > .main-btn').click();
    cy.get('#email').type('illia.ivanin@rubygarage.org');
    cy.get('#password').type('12345678');
    cy.get('.auth__submit').click();
    cy.get('[data-cy=header-account-name]').click();
    cy.get('[data-cy=account-workspace-logout] > .mr-8').click();
    cy.get('[data-cy=login-to-your-account-title]').should('have.text', 'Log in to your account');
    cy.url().should('include', '/login');
    cy.get('[data-cy=workspace-name]').should('have.text', 'cypress test');
  });
})