describe('Check Login', () => {
    beforeEach('go to page', () => {
        cy.visit('/');
    });

    it.only('succesfully login user 1 to the GoIT page', () => {
        cy.fixture('user1.json').then((user) => {
            const useremail = user.email;
            const password = user.password;

            cy.loginUser(useremail, password);

            cy.url().should('include', 'homepage');
            cy.get('[id="go-to-the-course-homepage-widget"]')
            .scrollIntoView()
            .should('be.visible');
        });
    });

    it('succesfully login user 2 to the GoIT page', () => {
        cy.fixture('user2.json').then((user) => {
            //arrange
            const useremail = user.email;
            const password = user.password;

            //action
            cy.loginUser(useremail, password);

            //assert
            cy.url().should('include', 'homepage');
        });
    });

    it('unsuccesfully login user 3 to the GoIT page', () => {
        cy.fixture('user3.json').then((user) => {
            const useremail = user.email;
            const password = user.password;

            cy.loginUser(useremail, password);

            cy.get('.login_error_toast').should('have.text','An incorrect username or password has been submitted');
        });
    });
  });