import 'cypress-iframe';


let username = "QAPVPRECO";
let password = "!QAZxsw2";
let numeroDocumento = "1053874144";

describe('Url', () => {
    beforeEach(function() {
        cy.visit('https://pre.transfiriendo.com:448/PortaliSoatSE/Webforms/Account/Views/Index.aspx');
    })

    it('Emisión de poliza en SE', () => {

        cy.get('#iuserName').type(username);
        cy.get('#ipassword').type(password);
        cy.get('#btn_login').click();
        cy.wait(3000);

        cy.get('#gestión_de_pólizas').click();
        cy.wait(1000);
        cy.get('[ng-show="show"] > #emisión > .ng-binding').click();
        cy.wait(1000);
        cy.get('#emision_nueva').click();

        cy.wait(3000);
        cy.frameLoaded('#formResponse');
        //cy.get('#ContentPlaceHolder1_pnlForm').click();
        //cy.switchToIframe('#formResponse').clear().click();
        //cy.xpath('//*[@id="ContentPlaceHolder1_pnlForm"]');
        //cy.get('#pnlPrincipal');
        //cy.get('#ContentPlaceHolder1_pnlForm');

        cy.wait(2000);
        cy.get('#ContentPlaceHolder1_txtDocumentNumber').click();
        cy.get('#ContentPlaceHolder1_txtDocumentNumber').type(numeroDocumento);

        //*[@id="ContentPlaceHolder1_pnlForm"]/div[3]/div

    })
})