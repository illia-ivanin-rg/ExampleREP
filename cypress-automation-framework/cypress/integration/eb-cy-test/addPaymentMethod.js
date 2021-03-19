/// <reference types="cypress" />

describe("Finish Trial", () => {
  beforeEach(()=>{
    cy.loginTOTeamWorkspace({url:'cypresstest',email:'illia.ivanin@rubygarage.org', password:'12345678' })
  })
    
  it(" Company Owner or admin finishes trial by adding a valid bank card", () => {
    cy.get('.pb-0 > :nth-child(3) > .main-nav__item-link').click();
    cy.get('[data-cy=payment-information-button] > .main-btn__txt').click();
    cy.get('[data-cy=payment-method-title]').should('have.text', 'Payment method');
    cy.get('iframe[name^="__privateStripeFrame"]').then((frame) => {
     cy.wrap(frame).eq(0).then(($iframe) => {
       const $body = $iframe.contents().find('body');
       cy.wrap($body).find('input[name=cardnumber]').type('4242424242424242');
     });
     cy.wrap(frame).eq(1).then(($iframe) => {
       const $body = $iframe.contents().find('body');
       cy.wrap($body).find('input[name=exp-date]').type('0122');
     });
     cy.wrap(frame).eq(2).then(($iframe) => {
       const $body = $iframe.contents().find('body');
       cy.wrap($body).find('input[name=cvc]').type('111');
     })
    })
  });
})