// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="Cypress" />

describe('Exercícios', function() { //describe define uma suite de testes
    it('EX00', function() { //it define um caso de teste
        cy.visit('./src/index.html');
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
        cy.get('input[id="firstName"]').type('Daniel');
        cy.get('input[id="lastName"]').type('Thon');
        cy.get('input[id="email"]').type('any@thing.com');
        cy.get('textarea[id="open-text-area"]').type('help me');
        cy.get('button[type="submit"]').click();
        cy.get('[class="success"]').should('be.visible');
    });
    it('EX01 - delay 0', function() {
        cy.visit('./src/index.html');
        cy.get('input[id="firstName"]').type('Daniel');
        cy.get('input[id="lastName"]').type('Thon');
        cy.get('input[id="email"]').type('any@thing.com');
        cy.get('textarea[id="open-text-area"]').type('help me leon', { delay: 0 });
        cy.get('button[type="submit"]').click();
        cy.get('[class="success"]').should('be.visible');
    });
    it('EX02 - exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
        cy.visit('./src/index.html');
        cy.get('input[id="firstName"]').type('Daniel');
        cy.get('input[id="lastName"]').type('Thon');
        cy.get('input[id="email"]').type('any@thingISWRONG');
        cy.get('textarea[id="open-text-area"]').type('help me leon', { delay: 0 });
        cy.get('button[type="submit"]').click();
        cy.get('[class="error"]').should('be.visible');
    });
    it('EX03 - tentar inserir letras e símbolos no campo telefone', function() {
        cy.visit('./src/index.html');
        cy.get('input[id="phone"]').type('itCannotAcceptLettersNor$ym60]s');
        cy.get('input[id="phone"]').should('not.have.value');
    });
    it('EX04 - exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
        cy.visit('./src/index.html');
        cy.get('input[id="firstName"]').type('Daniel');
        cy.get('input[id="lastName"]').type('Thon');
        cy.get('input[id="email"]').type('any@thing.com');
        cy.get('textarea[id="open-text-area"]').type('help me leon', { delay: 0 });
        cy.get('input[type="checkbox"]').check(['phone']);
        cy.get('button[type="submit"]').click();
        cy.get('[class="error"]').should('be.visible');
    });
    it('EX05 - verificar digitação', function() {
        cy.visit('./src/index.html');
        cy.get('input[id="firstName"]').type('my name');
        cy.get('input[id="firstName"]').should('have.value', 'my name');
        cy.get('input[id="firstName"]').clear();
        cy.get('input[id="firstName"]').should('not.have.value');
    });
    it('EX06 - exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {
        cy.visit('./src/index.html');
        cy.get('button[type="submit"]').click();
        cy.get('[class="error"]').should('be.visible');
    });
    it('EX07 - envia o formuário com sucesso usando um comando customizado', function() {
        cy.visit('./src/index.html');
        cy.fillMandatoryFieldsAndSubmit()
    });
    it('EX08 - cy.contains', function() {
        cy.visit('./src/index.html');
        cy.contains('button', 'Enviar').click();
        cy.get('[class="error"]').should('be.visible');
    });
})