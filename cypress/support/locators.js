const locators = {
    HOME_PAGE: {
        headerTitle: "#page-home > div h1",
        headerParagraph: "#page-home > div p",
        signInButton: "#page-home > div a",
    },
    REGISTER_PAGE: {
        inputs: [
            "#page-deliver input[name=fullName]",
            "#page-deliver input[name=cpf]",
            "#page-deliver input[name=email]",
            "#page-deliver input[name=whatsapp]",
            "#page-deliver input[name=postalcode]",
            "#page-deliver input[name=address-number]",
            "#page-deliver input[name=address-details]",
        ],
        zipCodeButton: "#page-deliver input[type=button]",
        deliveryMethod: [
            ".delivery-method",
            ".delivery-method > :nth-child(1) > span",
            ".delivery-method > :nth-child(2) > span",
            ".delivery-method > :nth-child(3) > span",
            ".delivery-method > :nth-child(1) > img",
            ".delivery-method > :nth-child(2) > img",
            ".delivery-method > :nth-child(3) > img"
        ],
        uploadDocument: "input[accept^='image'",
        documentImage: "#page-deliver > form > div > img",
        errorMessage: ".alert-error",
        registerButton: ".button-success",
        successModal: "body div.swal2-container.swal2-center.swal2-backdrop-show > div",
        successModalMessageFirst: "#swal2-title",
        successModalMessageSecond: "#swal2-html-container",
        closeModalButton: ".swal2-confirm.swal2-styled"
    },
    TEXTS: {
        header: "Seja um parceiro entregador pela Buger Eats",
        paragraph: "Em vez de oportunidades tradicionais de entrega de refeições em horários pouco flexíveis, seja seu próprio chefe.",
        homeButton: "Cadastre-se para fazer entregas",
        errorMessages: [
            "É necessário informar o nome",
            "É necessário informar o CPF",
            "É necessário informar o email",
            "É necessário informar o CEP",
            "É necessário informar o número do endereço",
            "Selecione o método de entrega",
            "Adicione uma foto da sua CNH",
        ],
        successModalMessages: [
            "Aí Sim...",
            "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato."
        ]
    }
}
export default locators