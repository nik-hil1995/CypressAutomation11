describe("First Test Suite", function () {
    it("Selecting the item based omn the text", function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.get('.products').as('productlocator')
        cy.get('@productlocator').find('.product').eq(2).contains('ADD TO CART').click()
        cy.get('.cart-icon > img').click()
        cy.contains('')


    })

})