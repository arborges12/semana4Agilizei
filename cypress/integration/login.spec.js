/// <reference types="cypress" />

describe('Twitter Clone - Login', () => {
     //hooks
    //Execução antes de cada ou todos os testes -> beforEach /before
    //Execução depois de cada ou todos os testes -> afterEach / after  
beforeEach(() => {
    //cy.intercept
    //1. RoutMatcher - mapeamento, filtro da rota
    //2. RouteHandler (opcional) - controlar o que a rota vai retornar (mock)

        cy.intercept({
            method: 'GET',
            hostname:'res.cloudinary.com'
        },{
            statusCode: 200,
            fixture: 'logo'
        }).as('cloudnery')
    })    
    it('Ao autenticar com credenciaias válidas, deve ser direcionado para o feed', () => {
        cy.login()

        cy.visit('/');        

        cy.get('nav ul li').should('be.visible').and('have.length', 6)
    

        
    });    
});