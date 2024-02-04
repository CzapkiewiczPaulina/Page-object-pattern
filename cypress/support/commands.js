// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('loginUser', (email, password) => {
    cy.get('#user_email').type(email);
    cy.get('[name="password"]').type(password);
    cy.get('button[type="submit"]').trigger('click');
});