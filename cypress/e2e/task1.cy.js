/// <reference types="cypress" />

describe('Get task test', () => {
    describe('Content, reserve book', () => {
        beforeEach(() => {
            cy.viewport('macbook-16');
            cy.visit('http://localhost:3000');
        });

        it('test layout exist button view', () => {
            cy.get('[data-test-id=button-menu-view-list]').should('be.exist').click();
            cy.get('[data-test-id=button-menu-view-window]').should('be.exist').click();
        });

        it('test layout booking page and existence of all fields', () => {
            cy.get('[data-test-id=button-reserve]').first().click()
            cy.get('[data-test-id=name]').should('exist');
            cy.get('[data-test-id=tel]').should('exist');
            cy.get('[data-test-id=email]').should('exist');
        });

        it('checking for valid name entry', () => {
            cy.get('[data-test-id=button-reserve]').first().click()
            cy.get('[data-test-id=name]').type('аб').should('have.value', 'аб');
            cy.contains('Неверный формат ввода имени');
            cy.get('[data-test-id=name]').type('вгдежзклмнопрст');
            cy.contains('Неверный формат ввода имени');
            cy.get('[data-test-id=name]').clear();
            cy.contains('Поле является обязательным');
            cy.get('[data-test-id=name]').type('abcde');
            cy.contains('Неверный формат ввода имени');
            cy.get(('[data-test-id="button-submit"]')).should('be.disabled');
            cy.get('[data-test-id=name]').clear();
            cy.get('[data-test-id=name]').type('абвгде');
            cy.should('not.contain.text', 'Неверный формат ввода имени');
            cy.get(('[data-test-id="button-submit"]')).should('be.disabled');
        })

        it('checking for valid tel entry', () => {
            cy.get('[data-test-id=button-reserve]').first().click()
            cy.get('[data-test-id=tel]').type('+3752212312312').should('have.value', '+3752212312312');
            cy.contains('Неверный формат ввода телефона');
            cy.get('[data-test-id=tel]').clear();
            cy.contains('Поле является обязательным');
            cy.get('[data-test-id=tel]').type('+37533123123123');
            cy.contains('Неверный формат ввода телефона');
            cy.get(('[data-test-id="button-submit"]')).should('be.disabled');
            cy.get('[data-test-id=tel]').clear();
            cy.get('[data-test-id=tel]').type('+3753312312312');
            cy.should('not.contain.text', 'Неверный формат ввода телефона');
            cy.get(('[data-test-id="button-submit"]')).should('be.disabled');
        })

        it('checking for valid email entry', () => {
            cy.get('[data-test-id=button-reserve]').first().click()
            cy.get('[data-test-id=email]').type('abc').should('have.value', 'abc');
            cy.contains('Неверный формат email');
            cy.get('[data-test-id=email]').clear();
            cy.get('[data-test-id=email]').type('abc@abc').should('have.value', 'abc@abc');
            cy.contains('Неверный формат email');
            cy.get('[data-test-id=email]').clear();
            cy.get('[data-test-id=email]').type('123@123.123');
            cy.contains('Неверный формат email');
            cy.get('[data-test-id=email]').clear();
            cy.get('[data-test-id=email]').type('abc.abc');
            cy.contains('Неверный формат email');
            cy.get('[data-test-id=email]').clear();
            cy.get(('[data-test-id="button-submit"]')).should('be.disabled');
            cy.get('[data-test-id=email]').type('abc@abc.abc');
            cy.should('not.contain.text', 'Неверный формат email');
            cy.get(('[data-test-id="button-submit"]')).should('be.disabled');
        })

        it('checking for valid data entry', () => {
            cy.get('[data-test-id=button-reserve]').first().click()
            cy.get('[data-test-id=name]').type('абвгде');
            cy.get('[data-test-id=tel]').type('+3753312312312');
            cy.get('[data-test-id=email]').type('abc@abc.abc');
            cy.should('not.contain.text', 'Неверный формат ввода имени');
            cy.should('not.contain.text', 'Неверный формат ввода телефона');
            cy.should('not.contain.text', 'Неверный формат email');
            cy.get(('[data-test-id="button-submit"]')).should('be.enabled').click();
        })
    });

    describe('Error', () => {
        beforeEach(() => {
            cy.intercept('http://localhost:3000', {
                statusCode: 404,
            }).as('get-products-error');
            cy.viewport('macbook-16');
        });

        it('books-error', () => {
            cy.visit(`http://localhost:3000`);
            cy.wait('@get-products-error');
            cy.get('[data-test-id=error]').should('be.exist');
            cy.contains('Ошибка получения данных');
        });
    });
});

