describe('search test', function() {
    it('searches for a keyword', function() {
        cy.visit('/')

        cy.get('form.SearchForm input.input')
        .type('*')
        
        cy.get('form.SearchForm button.Button').click()
    })
})