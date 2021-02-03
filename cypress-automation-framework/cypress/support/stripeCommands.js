Cypress.Commands.add('fillInCardDataWith', ({
  cardNumber, expDate, cvc, name, address, index, country, state, city,
 }) => {
   cy.get('iframe[name^="__privateStripeFrame"]').then((frame) => {
     cy.wrap(frame).eq(0).then(($iframe) => {
       const $body = $iframe.contents().find('body');
       cy.wrap($body).find('input[name=cardnumber]').type(cardNumber);
     });
     cy.wrap(frame).eq(1).then(($iframe) => {
       const $body = $iframe.contents().find('body');
       cy.wrap($body).find('input[name=exp-date]').type(expDate);
     });
     cy.wrap(frame).eq(2).then(($iframe) => {
       const $body = $iframe.contents().find('body');
       cy.wrap($body).find('input[name=cvc]').type(cvc);
     });
   });
 
   cy.get('#name').clear().type(name);
   cy.get('#address').clear().type(address);
   cy.get('#index').clear().type(index);
   cy.selectOption('country', country);
   cy.get('#state').clear().type(state);
   cy.get('#city').clear().type(city);
 });
 