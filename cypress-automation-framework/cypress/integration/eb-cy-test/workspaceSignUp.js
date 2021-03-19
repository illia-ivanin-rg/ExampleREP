/// <reference types="cypress" />

describe("Add new category", () => {
  beforeEach(()=>{
    cy.visit('https://stagingapp.expertbox.io/signup');
    cy.get('#email').type('illia.ivanin+137@rubygaragee.org');
    cy.get('.auth__submit').click();
  })

    it("Sign Up Team Workspace", () => {
      cy.get(':nth-child(2) > .workspace-choice__card').click();
      cy.get('#password').type('12345678');
      cy.get('#acceptTerms').siblings('.main-checkbox__icon').click();
      cy.get('#workspaceUrl').type('cypresstest137');
      cy.contains('[type=submit]', 'Sign up').should('be.enabled').click({ force: true });
      cy.get('[data-cy=employee-onboarding-title]').should('have.text', 'Help us set up your account');
      cy.get('#firstName').type('Illia');
      cy.get('#lastName').type('Ivanin');
      cy.get('#position').type('CEO');
      cy.get('#about').type('I am CEO of this company! Hello everyone!');
      cy.get('.main-card__action').click();
      cy.get('.main-card__title').should('have.text','Location');
      cy.wait(100);
      cy.contains('[type=submit]', 'Next').should('have.css', 'background-color', 'rgb(56, 139, 255)').click();
      cy.get('#companyName').type('illiacompany');
      cy.get('.main-card__action').click();
      cy.get('.stepper-onboarding__point--active > [data-cy=onboarding-step-text]').should('have.text','Complete your working hours');
      cy.get('[data-cy=recurring-availability-title]').should('have.text','Regular availability');
      cy.url().should('include', '/company/availability/recurring');
    
    });

    it("Sign Up Personal Workspace", () => {
      cy.get(':nth-child(1) > .workspace-choice__card').click();
      cy.get('#password').type('12345678');
      cy.get('#acceptTerms').siblings('.main-checkbox__icon').click();
      cy.contains('[type=submit]', 'Sign up').should('be.enabled').click({ force: true });
      cy.get('[data-cy=employee-onboarding-title]').should('have.text', 'Help us set up your account');
      cy.get('#firstName').type('Illia');
      cy.get('#lastName').type('Ivanin');
      cy.get('#position').type('CEO');
      cy.get('#about').type('I am CEO of this company! Hello everyone!');
      cy.get('.main-card__action').click();
      cy.get('.main-card__title').should('have.text','Location');
      cy.wait(100);
      cy.contains('[type=submit]', 'Finish').should('have.css', 'background-color', 'rgb(56, 139, 255)').click(); 
      cy.get('.stepper-onboarding__point--active > [data-cy=onboarding-step-text]').should('have.text','Complete your working hours');
      cy.get('[data-cy=recurring-availability-title]').should('have.text','Regular availability');
      cy.url().should('include', '/company/availability/recurring');
    
    });
  })