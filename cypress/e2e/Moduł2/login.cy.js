describe('User can login to GoIT page', () => {
    beforeEach('go to page', () => {
        cy.visit('https://www.edu.goit.global/account/login');
    });

    it('succesfully navigates to the GoIT page', () => {
        cy.wait(5000);
        cy.url().should('include', 'account/login');
    });


    it('successfully login to the GoIT page', () => {
        cy.loginUser('user888@gmail.com','1234567890');

        cy.url().should('include', 'homepage');
        cy.get('.next-1n2ne4o').should('have.text', 'Study without interruption and get achievements. You can do it!');
    });
});