describe("Test Suite for checkboxes", function () {
    it("Selecting checkboxes", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        //and can be used to concatinate the assertions 
        //now unchecking the checkbox
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    // checking mutiple check boxes check method can take the value as input
       cy.get('input[type="checkbox"]').check(['option2','option3'])
       //static dropdown
       cy.get('#dropdown-class-example').select('option1').should('have.value','option1')//assertion
       //dynamic dropdown
       cy.get('input#autocomplete').type('ind')// selecting the element
       cy.get('.ui-menu-item div').each(($el, index, $list) => {
          if($el.text()==='India'){
              $el.click()
          }

      })
      cy.get('input#autocomplete').should('have.value','India')
      //show and hide
      cy.get('#displayed-text').should('be.visible')
      cy.get('#hide-textbox').click()
      cy.get('#displayed-text').should('not.be.visible')
      cy.get('#show-textbox').click()
      //radio button
      cy.get('input[value="radio1"]').check().should('be.checked').and('have.value','radio1')
      cy.get('input[value="radio2"]').should('not.be.checked')

    })
})