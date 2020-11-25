describe("Automation practise assignment", function () {
    beforeEach(() => {
        //runs clear cookies before every test
        cy.clearCookies();
        cy.visit("/index.php");
        cy.get(".login")
            .should("be.visible")
            .click();
    })

    it("Should run", function () {

        //validate unique element like already registered (helps to see you are on right page)
        cy.get("#login_form")
            .should("be.visible")
            .click();

        //enter email id
        cy.get("#email")
            .should("be.visible")
            .type("marya.induri@gmail.com");

        //enter password
        cy.get("#passwd")
            .should("be.visible")
        .type("password1");

        //click on signin
        cy.get("#SubmitLogin")
            .should("be.visible")
            .and("be.enabled")
        .click();

        //page validation after sign in "MY ACCOUNT"
        cy.get("h1[class='page-heading']")
            .should("be.visible")
            .and("have.text","My account");

        //Go to search button
        cy.get("#search_query_top")
            .should("be.visible")
            .and("be.empty")
            .type("Faded Short Sleeve T-shirts");

        //go to submit button
        cy.get("button[name='submit_search']")
            .should("be.visible")
            .click();

        //also validate the product container to make sure all relevant items displayed after search
        cy.get("div[class='product-container']")
            .should("be.visible");
    })

    afterEach(() => {

        cy.end();
    })

})