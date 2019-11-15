describe('upload test', function() {
    it('uploads a file', function() {
        cy.visit('/')

        cy.get('form.UploadForm input[name="name"]')
        .type('Ironmarch merged dataset')

        cy.get('form.UploadForm input[name="area"]')
        .type('Wereld')

        cy.get('form.UploadForm input[name="source"]')
        .type('Archive.org')

        cy.get('form.UploadForm select[name="file_type"]')
        .select('csv')

        cy.get('form.UploadForm input[name="date_obtained"]')
        .type('7 november 2019')

        cy.get('form.UploadForm input[name="tags"]')
        .type('ironmarch, extreemrechts, rechts, fascisme, nazi')

        const fileName = "merged.csv"
        cy.fixture(fileName).then(fileContent => {
            cy.get('form.UploadForm input[name="file"]')
            .upload({ fileContent, fileName, mimeType : 'text/csv' });    
        })

        cy.get('form.UploadForm button.Button').click()
    })
})