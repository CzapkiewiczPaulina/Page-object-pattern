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
    });
  });

  it("successfully login to the GoIT page", () => {
    cy.loginUser("testowyqa@qa.team", "QA!automation-1");
    cy.url().should("include", "homepage");
    cy.get(".profile-nav").should("be.visible");
    cy.get(".profile-nav").click();
    cy.contains("Log out").should("be.visible").click();
    cy.contains("Log in").should("be.visible");
  });
});
