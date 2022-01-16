describe("Test Suite for checkboxes", function () {
    it("Selecting checkboxes", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('[id="alertbtn"]').click()
        cy.get('[id="confirmbtn"]').click()
        //we have to trigger the alert from the cypress and then captur the text on the alert
        cy.on('window:alert',(str)=>{
          expect(str).to.equal('Hello , share this practice page and share your knowledge')

        })
        //for confrim window same as window:confrim
        cy.on('window:confirm',(str)=>{
           //mocha
           expect(str).to.equal('Hello , Are you sure you want to confirm?') 
        })
        //handing the child window using invoke function and jquery removeattr() function to remove the target attr so that 
        //it will open in the same window
   
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url().should('include','rahulshettyacademy')
        
        cy.go('back')
    })
})