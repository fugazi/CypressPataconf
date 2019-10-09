describe('Caso de Prueba: Validar la página de LOGIN de ALMUNDO.COM', () => {

    it('Validar el acceso a la aplicación ALMUNDO', () => {
        cy.visit('https://almundo.com.co/')
        expect(true).to.equal(true)
        cy.wait(5000)
        cy.screenshot('image1')
    });
    
    it('Ingresar al Login para autenticarse con un usuario', () => {
        cy.get('.container-login > .login-container > .profile-default').click()
        cy.wait(5000)
        cy.screenshot('image2')
        cy.get('.account-btn-palette1-primary').click()
    });

    it('Realizamos validaciones (Assertions) al formulario de "Ingresa Tu Cuenta"', () => {
        cy.get('[type="email"]').should('be.visible')
        cy.contains('Email')
        cy.get('[type="password"]').should('be.visible')
        cy.contains('Contraseña')
        cy.get('#EMAIL_BUTTON_LOADING').should('be.visible')
        cy.get('#EMAIL_BUTTON_LOADING').should('have.class', 'account-btn-palette1-primary disabled')
        cy.get('#EMAIL_BUTTON_LOADING').should('have.css', 'background-color', 'rgb(221, 222, 222)')
        cy.get('#EMAIL_BUTTON_LOADING').should('have.css', 'border-color', 'rgba(0, 0, 0, 0)')
        cy.contains('INGRESAR')
        cy.get('.account-btn-palette2-floating').should('be.visible')
        cy.get('.account-btn-palette2-floating').should('have.text', 'OLVIDÉ MI CONTRASEÑA')
        cy.get('.account-btn-palette2-floating').should('have.class', 'account-btn-palette2-floating')
        cy.get('.content > :nth-child(4)').should('be.visible')
        cy.get('.content > :nth-child(4)').should('have.text', '¡Chau contraseñas! Ingresa con un sólo paso.')
        cy.get('.am-facebook-login').should('be.visible')
        cy.get('.am-google-login').should('be.visible')
        cy.get('.account-btn-palette2-secondary').should('be.visible')
        cy.get('.account-btn-palette2-secondary').should('have.text', 'REGISTRARME')
        cy.get('.account-btn-palette2-secondary').should('have.css', 'color', 'rgb(23, 158, 164)')
            .and('have.css', 'margin', '16px 0px 0px')
            .and ('have.css', 'padding', '12px 0px')
            .and ('have.css', 'display', 'block')
        cy.get('.account-btn-palette2-secondary').should('have.attr', 'href')
        cy.screenshot('image3')
        
    });

    it('Realizamos validaciones (Assertions) al formulario de "Crea Tu Cuenta"', () => {
        cy.get('.account-btn-palette2-secondary').click()
        cy.get('.content').contains('Crea tu cuenta')
        cy.get('[type="text"]').should('be.visible')
        cy.contains('Nombre')
        cy.get('[type="text"]').should('have.attr', 'maxlength').and('contain', '60')
        cy.get('[type="email"]').should('be.visible')
        cy.contains('Email')
        cy.get('[type="password"]').should('be.visible')
        cy.contains('Contraseña')
        cy.get('.input-text invalid').should('have.length', 0)
        cy.get('[type="text"]').type('Nombre_Completo_Invalido')
        cy.get('[type="email"]').type('Correo_Invalido')
        cy.get('[type="password"]').type('123')
        cy.get('.form-account > :nth-child(2) > .feedback').should('have.text', 'No debe contener números ni carácteres especiales.')
        cy.get(':nth-child(4) > .feedback').should('have.text', 'El email no es válido.')
        cy.get('.form-account > :nth-child(6)').should('have.text', 'Falta 5 carácter.')
        cy.get('input:invalid').should('have.length', 2)
        //cy.get('input[type]').clear()
        cy.screenshot('image4')
        
    });

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

});