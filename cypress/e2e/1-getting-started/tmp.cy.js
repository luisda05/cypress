describe("Emision Nueva", () => {
    it("tests Emision Nueva", () => {
        //cy.viewport(737, 597);

        cy.visit("https://pre.transfiriendo.com:448/PortaliSoatSE/Webforms/Account/Views/Index.aspx");

        cy.get("[id='iuserName']").click();

        cy.get("[id='iuserName']").type("QAPVPRECO");

        cy.get("[id='ipassword']").type("!QAZxsw2");
        cy.wait(4000);
        cy.get("[id='btn_login']").dblclick();
        cy.wait(6000);
        cy.location("href").should("eq", "https://pre.transfiriendo.com:448/PortaliSoatSE/Webforms/Account/Views/Default.aspx");
        cy.wait(6000);
        cy.get("[id='gestión_de_pólizas'] > span.ng-binding").click();

        cy.get("div > ul:nth-of-type(1) [id='emisión'] > span.ng-binding").click();

        cy.get("[id='menu'] ul:nth-of-type(1) ul:nth-of-type(3) ul:nth-of-type(2) span").click();
        cy.wait(10000);

        cy.get('#formResponse');
        cy.get("[id='ContentPlaceHolder1_txtDocumentNumber']").click();

        cy.wait(10000);


        cy.get("[id='ContentPlaceHolder1_txtDocumentNumber']").type("1053222111");

        cy.get("xpath///*[@id=\"ContentPlaceHolder1_pnlData\"]/div[1]/div[1]/div[8]/span[1]").click();

        cy.get("[id='ContentPlaceHolder1_txtPhone']").click();

        cy.get("[id='ContentPlaceHolder1_txtPhone']").click();

        cy.get("[id='ContentPlaceHolder1_txtPhone']").type("3148510845");

        cy.get("[id='ContentPlaceHolder1_txtEmail']").click();

        cy.get("[id='ContentPlaceHolder1_txtEmail']").type("lvalencia@transfiriendo.com");

        cy.get("xpath///*[@id=\"ContentPlaceHolder1_pnlData\"]/div[1]/div[1]/div[7]").click();

        cy.get("[id='divDialogEmail']").click();

        cy.get("[id='ContentPlaceHolder1_txtDialogEmail']").click();

        cy.get("[id='ContentPlaceHolder1_txtDialogEmail']").type("lvalencia@transfiriendo.com");

        cy.get("[id='divDialogEmail']").click();

        cy.get("button.ui-state-hover > span").click();

        cy.get("[id='ContentPlaceHolder1_radioContactInvoiced_0']").click();

        cy.get("[id='ContentPlaceHolder1_txtNumberPlate']").click();

        cy.get("[id='ContentPlaceHolder1_txtNumberPlate']").type("stq457");

        cy.get("xpath///*[@id=\"ContentPlaceHolder1_pnlData\"]/div[1]/div[2]/div[4]").click();

        cy.get("button.ui-state-hover > span").click();

        cy.get("[id='ContentPlaceHolder1_btnAddPaymentForm']").click();

        cy.get("[id='ContentPlaceHolder1_btnAccept']").click();

        cy.get("[id='AccordionPaneHeader6']").click();

        cy.get("[id='ContentPlaceHolder1_ddlNationalOperationCard']").click();

        cy.get("[id='ContentPlaceHolder1_ddlNationalOperationCard']").type("1");

        cy.get("[id='ContentPlaceHolder1_btnAccept']").click();
        cy.location("href").should("eq", "");

    });
});