describe('Sistema da petFlix deve', () => {
    it('Exibir a home para escolher perfil', () => {
        cy.visit('http://localhost:5173/')
    })
    it('clicar no profile do dog', () => {
        cy.visit('http://localhost:5173/')
        cy.get('.dogProfile').click();
    })
    it('selecionar o primeiro filme', () => {
        cy.visit('http://localhost:5173/')
        cy.get('.dogProfile').click();
        cy.get('[alt="Movie 1"]').eq(0).click();
    })
    it('apertar no play para reproduzir', () => {
        cy.visit('http://localhost:5173/')
        cy.get('.dogProfile').click();
        cy.get('[alt="Movie 1"]').eq(0).click();
        cy.get('[width="500"]').click();
    })
    it('pausar caso aperte no play novamente', () => {
        cy.visit('http://localhost:5173/')
        cy.get('.dogProfile').click();
        cy.get('[alt="Movie 1"]').eq(0).click();
        cy.get('[width="500"]').click();
        cy.get('[width="500"]').click();
    })
})