Cypress.Commands.add('loginTOTeamWorkspace', ({email, password, url }) => {
  // cy.server();
  cy.intercept('POST','**/users/session').as('usersSession');
  cy.intercept('GET','**/search?url=**').as('findWorkspace');
  cy.intercept('POST','**/service_categories').as('servCategory');
  cy.intercept('POST','**/workspaces/users/registration').as('usersRegistration');

  cy.visit('/');
  cy.get('[data-cy=login-to-your-account-title]').should('have.text', 'Log in to your account');
  cy.get('#url').type(url);
  cy.contains('[type=submit]', 'Continue').click();
  cy.wait('@findWorkspace');
  

  cy.get('[name=email]').type(email);
  cy.get('[name=password]').type(password);
  cy.contains('[type=submit]', 'Sign in').click({ force: true });
  cy.wait('@usersSession');
  
 });

 Cypress.Commands.add('loginTOPersonalWorkspace', ({email, password }) => {
  // cy.server();
  cy.intercept('POST','**/users/session').as('usersSession');
  cy.intercept('POST','**/service_categories').as('servCategory');
  cy.intercept('POST','**/workspaces/users/registration').as('usersRegistration');

  cy.visit('/');
  cy.get('[data-cy=login-to-your-account-title]').should('have.text', 'Log in to your account');
  cy.get('.ant-tabs-nav-list > :nth-child(2)').click();
    

  cy.get('[name=email]').type(email);
  cy.get('[name=password]').type(password);
  cy.contains('[type=submit]', 'Sign in').click({ force: true });
  cy.wait('@usersSession');
  
 });

