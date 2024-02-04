import LoginPage from "./../pages/loginPage";
import HomePage from "../pages/homePage";

const loginPage = new LoginPage();
const homepage = new HomePage();

describe("User can login to GoIT page", () => {
  beforeEach("go to page", () => {
    cy.visit("https://www.edu.goit.global/account/login");
  });

  it("succesfully navigates to the GoIT page", () => {
    cy.fixture("user1.json").then((user) => {
      const useremail = user.email;
      const password = user.password;

      loginPage.loginUser(useremail, password);

      cy.get('[id="go-to-the-course-homepage-widget"]')
        .scrollIntoView()
        .should("be.visible");
    });

    it("successfully login to the GoIT page", () => {
      cy.loginUser("user888@gmail.com", "1234567890");
      cy.url().should("include", "homepage");
      cy.get(".profile-nav").should("be.visible");
      cy.get(".profile-nav").click();
      cy.contains("Log in").should("be.visible");
    });
  });
});
