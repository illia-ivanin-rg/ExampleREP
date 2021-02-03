Cypress.Commands.add('loginTOTeamWorkspace', (email, passowrd, url) => {
  
  cy.get('[data-cy=login-to-your-account-title]').should('have.text', 'Log in to your account');
  cy.get('#url').type(url);
  cy.contains('[type=submit]', 'Continue').click();
  cy.wait('@findWorkspace');

  cy.get('[name=email]').type(email);
  cy.get('[name=password]').type(password);
  cy.contains('[type=submit]', 'Sign in').click({ force: true });
  cy.wait('@usersSession');
  
 });

