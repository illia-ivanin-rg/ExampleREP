/// <reference types="Cypress" />

describe("Test Contact Us from via WebrdiceUni",() => {
  it("Should be able to submit a successful submission via contact us form",() => {
    cy.visit ('http://webdriveruniversity.com/Contact-Us/contactus.html');
    cy.get('[name="first_name"]').type("Illia");
    cy.get('[name="last_name"]').type("Ivanin");
    cy.get('[name="email"]').type("ivanin8888@gmail.com");
    cy.get('textarea.feedback-input').type("commnet here!!!!!!!!!!");
    cy.get('[type="Submit"]').click();


  })

  it("Should  not be able to submit a successful submission via contact us form as all filed are required",() => {
    cy.visit ('http://webdriveruniversity.com/Contact-Us/contactus.html');
    cy.get('[name="first_name"]').type("Ivan");
    cy.get('[name="last_name"]').type("Ivanins");
    cy.get('textarea.feedback-input').type("commnet here!!!!!!!!!!");
    cy.get('[type="submit"]').click();
  })

  it("Reset the contact us form",() => {
    cy.visit ('http://webdriveruniversity.com/Contact-Us/contactus.html');
    cy.get('[name="first_name"]').type("Ivan");
    cy.get('[name="last_name"]').type("Ivaninss");
    cy.get('[name="email"]').type("ivanin8888@gmail.com");
    cy.get('textarea.feedback-input').type("commnet here!!!!!!!!!!");
    cy.get('[type="reset"]').click();
  })
})


