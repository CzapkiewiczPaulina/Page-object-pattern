import MenuComponent from "../component/menuComponent.js";

class HomePage {
    menuComponent = new MenuComponent();

    get coursesTab() {
        return cy.get('.next-bx9hu9').contains('Courses');
    }

    get duelsTab() {
        return cy.get('.next-bx9hu9').contains('Duels');
    }

    get tournamentTab() {
        return cy.get('.next-bx9hu9').contains('Tournament');
    }

    get consultationTab() {
        return cy.get('.next-bx9hu9').contains('Consultations');
    }

    selectMenuElement(tabName) {
        switch (tabName) {
            case 'Courses':
                this.coursesTab.click();
                break;
            case 'Duels':
                this.duelsTab.click();
                break;
            case 'Tournament':
                this.tournamentTab.click();
                break;
            case 'Consultation':
                this.consultationTab.click();
                break;
            default:
                console.error('Unknown name Tab')
        }
    }
}

export default HomePage