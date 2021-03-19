/// <reference types="cypress" />
describe("Add new category", () => {
  beforeEach(()=>{
    cy.loginTOTeamWorkspace({url:'cypresstest',email:'illia.ivanin@rubygarage.org', password:'12345678' })
    cy.wait(100)
    // cy.visit('https://stagingapp.expertbox.io/334f0a/company/service_categories');
    cy.visit('**/company/service_categories');
    cy.title().should('eq', 'Categories');
    cy.get('[data-cy=service-categories-title]').should('have.text', 'Categories');
    cy.get('[data-cy=add-category-button]').click();
    cy.get('.main-modal__title').should('have.text', 'Add category');
  })
      
  it("Creating a  new category", () => {
    cy.get('#name').type('New2'); //add a faker here to randomize the category name 
    cy.get('.main-modal__footer > [type="submit"]').click();
  });

  it("Creating a category with alredy used name", () => {
    cy.get('#name').type('New2');
    cy.get('.main-modal__footer > [type="submit"]').click();
    cy.wait('@servCategory').its('response.statusCode').should('eq', 422)
  });

  it("Creating a category with custom color", () => {
    cy.get('#name').type('New3');
    cy.get(':nth-child(5) > .category-color > .category-color__dot').click();
    cy.get('.main-modal__footer > [type="submit"]').click();  
  });

  it("Cancel category creation", () => {
    cy.get('.main-btn--flat > .main-btn__txt').click();
    cy.get('[data-cy=service-categories-title]').should('have.text', 'Categories');
    cy.url().should('include', 'company/service_categories');
  });
})