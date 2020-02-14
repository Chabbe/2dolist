describe('UI tests for todo app', () => {
    it('Should visit starting page för app', () => {

        cy.visit('http://localhost:9001/todolist')

        // cy.contains('Le magnifiqué 2DO-list!');

        // cy.url().should('include', '/todolist')


        // cy.contains('Ta bort').click(({
        //     multiple: true
        // }))

        // cy.get('input').type('Great spirit - Armin van Buuren').should('have.value', 'Great spirit - Armin van Buuren').get('button').click()

        cy.get('input').type('Charlie is ooon FIIIRE')

        cy.get('button').click()

        // cy.get('a').contains('Ta bort').click(({
        //     multiple: true
        // }))


        cy.get('a').contains('Ta bort').each(() => {
            cy.get('a').contains('Ta bort').first().click()
        })
    })
})