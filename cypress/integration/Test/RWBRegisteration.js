describe("Onboarding new user", function () {
    it("Step  1 out of 6 ", function () {
        cy.visit("https://members-staging.teamrwb.org/login")
        cy.get("button.RWBButton_button__aRkSC.RWBButton_secondary__2GsSe").click()
        cy.wait(2000)
        Cypress.on('uncaught:exception', () => false)
        cy.get(".Registration_contentContainer__2eMgZ").find('.TextInput_textInput__1ZPI7.formInput').as('mainlocator')
        cy.get('@mainlocator').eq(0).type('Nikhil Test ')
        cy.get('@mainlocator').eq(1).type('Automation ')
        cy.get('@mainlocator').eq(2).type('retrorwbtest+testauto1@gmail.com')
        cy.get('@mainlocator').eq(3).type('retrorwbtest+testauto1@gmail.com')
        cy.get('@mainlocator').eq(4).type('password')
        cy.get('@mainlocator').eq(5).type('password')
        cy.get('.RWBButton_button__aRkSC.RWBButton_primary__3ME7l').click()
  

    })
})