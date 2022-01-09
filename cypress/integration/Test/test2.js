describe("First Test Suite", function () {
    it("Selecting the item based omn the text", function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.get('.products').as('productlocator')
        cy.get('@productlocator').find('.product').each(($el, index, $list) => {
            var item = $el.find('h4.product-name').text()
            if (item.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    })

})