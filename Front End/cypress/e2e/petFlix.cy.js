describe('Sistema da petFlix deve', () => {
    it('Exibir a home para escolher perfil', () => {
        cy.visit('http://localhost:5173/')
    })

    //perfil do dog
    
    it('clicar no perfil para cachorro', () => {
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
        cy.get('[width="950"]').click();
    })
    it('pausar caso aperte no play novamente', () => {
        cy.visit('http://localhost:5173/')
        cy.get('.dogProfile').click();
        cy.get('[alt="Movie 1"]').eq(0).click();
        cy.get('[width="950"]').click();
        cy.get('[width="950"]').click();
    })

    it('clicar na seta de voltar na perfil do cachorro', () => {
        cy.visit('http://localhost:5173/')
        cy.get('.dogProfile').click();
        cy.get('[alt="Movie 1"]').eq(0).click();
        cy.get('.back-button').click();
    })

    // //perfil do cat

    it('clicar no perfil para gato', () => {
        cy.visit('http://localhost:5173/')
        cy.get('.catProfile').click();
    })
    it('selecionar o primeiro filme', () => {
        cy.visit('http://localhost:5173/')
        cy.get('.catProfile').click();
        cy.get('[alt="Movie 1"]').eq(0).click();
    })
    it('apertar no play para reproduzir', () => {
        cy.visit('http://localhost:5173/')
        cy.get('.catProfile').click();
        cy.get('[alt="Movie 1"]').eq(0).click();
        cy.get('[width="950"]').click();
    })
    it('pausar caso aperte no play novamente', () => {
        cy.visit('http://localhost:5173/')
        cy.get('.catProfile').click();
        cy.get('[alt="Movie 1"]').eq(0).click();
        cy.get('[width="950"]').click();
        cy.get('[width="950"]').click();
    })


    // it('selecionar o segundo filme', () => {
    //     cy.visit('http://localhost:5173/')
    //     cy.get('.dogProfile').click();
    //     cy.get('[alt="Movie 2"]').eq(0).click();
    // })
    // it('selecionar o terceiro filme', () => {
    //     cy.visit('http://localhost:5173/')
    //     cy.get('.dogProfile').click();
    //     cy.get('[alt="Movie 3"]').eq(0).click();
    // })
    // it('selecionar o quarto filme', () => {
    //     cy.visit('http://localhost:5173/')
    //     cy.get('.dogProfile').click();
    //     cy.get('[alt="Movie 4"]').eq(0).click();
    // })
    // it('selecionar o quinto filme', () => {
    //     cy.visit('http://localhost:5173/')
    //     cy.get('.dogProfile').click();
    //     cy.get('[alt="Movie 5"]').eq(0).click();
    // })
    // it('selecionar o sexto filme', () => {
    //     cy.visit('http://localhost:5173/')
    //     cy.get('.dogProfile').click();
    //     cy.get('[alt="Movie 6"]').eq(0).click();
    // })
    // it('selecionar o sétimo filme', () => {
    //     cy.visit('http://localhost:5173/')
    //     cy.get('.dogProfile').click();
    //     cy.get('[alt="Movie 1"]').eq(1).click();
    // })
    // it('selecionar o oitavo filme', () => {
    //     cy.visit('http://localhost:5173/')
    //     cy.get('.dogProfile').click();
    //     cy.get('[alt="Movie 2"]').eq(1).click();
    // })
    // it('selecionar o nono filme', () => {
    //     cy.visit('http://localhost:5173/')
    //     cy.get('.dogProfile').click();
    //     cy.get('[alt="Movie 3"]').eq(1).click();
    // })
    // it('selecionar o decimo filme', () => {
    //     cy.visit('http://localhost:5173/')
    //     cy.get('.dogProfile').click();
    //     cy.get('[alt="Movie 4"]').eq(1).click();
    // })
    // it('selecionar o decimo primeiro filme', () => {
    //     cy.visit('http://localhost:5173/')
    //     cy.get('.dogProfile').click();
    //     cy.get('[alt="Movie 5"]').eq(1).click();
    // })
    // it('selecionar o decimo segundo filme', () => {
    //     cy.visit('http://localhost:5173/')
    //     cy.get('.dogProfile').click();
    //     cy.get('[alt="Movie 5"]').eq(1).click();
    // })

    
    // it('selecionar o segundo filme', () => {
    //     cy.visit('http://localhost:5173/')
    //     cy.get('.catProfile').click();
    //     cy.get('[alt="Movie 2"]').eq(0).click();
    // })
    // it('selecionar o terceiro filme', () => {
    //     cy.visit('http://localhost:5173/')
    //     cy.get('.catProfile').click();
    //     cy.get('[alt="Movie 3"]').eq(0).click();
    // })
    // it('selecionar o quarto filme', () => {
    //     cy.visit('http://localhost:5173/')
    //     cy.get('.catProfile').click();
    //     cy.get('[alt="Movie 4"]').eq(0).click();
    // })
    // it('selecionar o quinto filme', () => {
    //     cy.visit('http://localhost:5173/')
    //     cy.get('.catProfile').click();
    //     cy.get('[alt="Movie 5"]').eq(0).click();
    // })
    // it('selecionar o sexto filme', () => {
    //     cy.visit('http://localhost:5173/')
    //     cy.get('.catProfile').click();
    //     cy.get('[alt="Movie 6"]').eq(0).click();
    // })
    // it('selecionar o sétimo filme', () => {
    //     cy.visit('http://localhost:5173/')
    //     cy.get('.catProfile').click();
    //     cy.get('[alt="Movie 1"]').eq(1).click();
    // })
    // it('selecionar o oitavo filme', () => {
    //     cy.visit('http://localhost:5173/')
    //     cy.get('.catProfile').click();
    //     cy.get('[alt="Movie 2"]').eq(1).click();
    // })
    // it('selecionar o nono filme', () => {
    //     cy.visit('http://localhost:5173/')
    //     cy.get('.catProfile').click();
    //     cy.get('[alt="Movie 3"]').eq(1).click();
    // })
    // it('selecionar o decimo filme', () => {
    //     cy.visit('http://localhost:5173/')
    //     cy.get('.catProfile').click();
    //     cy.get('[alt="Movie 4"]').eq(1).click();
    // })
    // it('selecionar o decimo primeiro filme', () => {
    //     cy.visit('http://localhost:5173/')
    //     cy.get('.catProfile').click();
    //     cy.get('[alt="Movie 5"]').eq(1).click();
    // })
    // it('selecionar o decimo segundo filme', () => {
    //     cy.visit('http://localhost:5173/')
    //     cy.get('.catProfile').click();
    //     cy.get('[alt="Movie 5"]').eq(1).click();
    // })

    
})