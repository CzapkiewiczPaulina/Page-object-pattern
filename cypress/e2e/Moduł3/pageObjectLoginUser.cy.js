import LoginPage from "./../pages/loginPage";
import HomePage from "../pages/homePage";

const loginPage = new LoginPage();
const homepage = new HomePage();

describe('Check Login', () => {
    beforeEach('go to page', () => {
        cy.visit('/');
    });

    it('succesfully login user 1 to the GoIT page', () => {
        cy.fixture('user1.json').then((user) => {
            const useremail = user.email;
            const password = user.password;

            loginPage.loginUser(useremail, password);


            cy.get('[id="go-to-the-course-homepage-widget"]')
                .scrollIntoView()
                .should('be.visible');
        });
    });
});

describe.only('user visit all tabls', () => {
    before('go to page and login', () => {
        cy.visit('/');
        cy.fixture('user1.json').then((user) => {
            const useremail = user.email;
            const password = user.password;

            loginPage.loginUser(useremail, password);
        });
    });

    it('user sucessfully visit all tabs', () => {
        homepage.selectMenuElement('Courses');
        cy.wait(2000);
        homepage.selectMenuElement('Duels');
        cy.wait(2000);
        homepage.selectMenuElement('Tournament');
        cy.wait(2000);
        homepage.selectMenuElement('Consultation');
        cy.wait(2000);
    });

    after(() => {
        homepage.menuComponent.logout();
        cy.wait(5000);
    });
});