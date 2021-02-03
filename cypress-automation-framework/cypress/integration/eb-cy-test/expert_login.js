/// <reference types="cypress" />

describe("Expert log in", () => {
  it("Expert should be able  to log in to the Team Workspace ", () => {
    cy.visit("https://stagingapp.expertbox.io/");
    cy.get('#url').type('cypresstest');
    cy.get('.auth__actions > .main-btn').click();
    cy.get('#email').type('illia.ivanin@rubygarage.org');
    cy.get('#password').type('12345678');
    cy.get('.auth__submit').click();
    cy.get('[data-cy=appointments-title]').should('have.text', 'Appointments');
    cy.url().should('include', 'company/bookings');
  });
})