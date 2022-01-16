describe("Test Suite for checkboxes", function () {
    it("Selecting checkboxes", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
       const textVal=$el.text()
       if(textVal.includes('Python')){
           cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
              const priceText= price.text()
              expect(priceText).to.equal('25')

           })
       }
    })

})
})