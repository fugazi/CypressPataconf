///<reference types="cypress" />
require('dotenv').config();

describe('Caso de Prueba: Crear tareas en la TODO App para validar su funcionamiento', () => {

    it('Validar el acceso a la TODO App', () => {
        cy.visit('http://todomvc-app-for-testing.surge.sh')
        expect(true).to.equal(true)
    });

    beforeEach(() => {
        cy.fixture('example.json').as('userData')
        cy.eyesOpen({
            appName: 'todoMVC',
            testName: 'Practicando con Applitools Eyes',
            browser: { width: 800, height: 600 },
          });        
    });

    it('Agregar nuevas tareas en la TODO App', () => {
        cy.get('@userData').then((_userData) => {
            cy.get('.new-todo').type('userData.name').type('{enter}')  
        });
        cy.get('.new-todo').type('Escribir ensayo para la universidad').type('{enter}')
        cy.get('.new-todo').type('Comprar comida para el gato').type('{enter}')
        cy.get('.new-todo').type('Realizar slides para la conferencia').type('{enter}')
        cy.get('.new-todo').type('Llamar al odontólogo para programar cita').type('{enter}')

        // Vamos a practicar con Applitools Eyes
        cy.eyesCheckWindow ();

    });

    it('Marcar tareas como completadas en la TODO App', () => {
        cy.get(':nth-child(3) > .view > .toggle').click()
        cy.get(':nth-child(1) > .view > .toggle').click()
        cy.contains('Clear completed')
        cy.get('.clear-completed').should('have.text', 'Clear completed')    
    });

    it('Realizar validaciones (Assertions) en la TODO App', () => {
        cy.get(':nth-child(2) > .view > .toggle').should('not.be.checked')
        cy.get(':nth-child(1) > a').should('be.visible')
        cy.get(':nth-child(2) > a').should('be.visible')
        cy.get(':nth-child(3) > a').should('be.visible')
        cy.get('label').should('have.css', 'padding')
        cy.get(':nth-child(2) > .view > label').should('have.text', 'Realizar slides para la conferencia')
        cy.get(':nth-child(2) > .view > label').should('not.be.checked')
        cy.get('.completed > .view > label').should('have.css', 'text-decoration-line', 'line-through')
        
    });

    afterEach(() => {
        cy.eyesClose();
    });
});