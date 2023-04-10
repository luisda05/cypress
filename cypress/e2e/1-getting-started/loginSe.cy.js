let username = "ISOATSE";
let password = "!QAZxsw2";

describe('My First login test', () => {
    beforeEach(function() {
        cy.visit('https://pre.transfiriendo.com:448/PortaliSoatSE/Webforms/Account/Views/Index.aspx');
    })

    it('Login in Se with user admin', () => {

        cy.get('#iuserName').type(username);
        cy.get('#ipassword').type(password);
        cy.get('#btn_login').click();
    })
})