describe('User can visit to GoIT page', () => {

  it('succesfully navigates to the GoIT page', () => {
    cy.visit('https://www.edu.goit.global/account/login');

    cy.wait(5000);
    cy.url().should('include','account/login');

    cy.visit('https://www.edu.goit.global/account/login');
  });
});