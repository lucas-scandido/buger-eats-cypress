const locators = {
    HOME_PAGE: {
        pageTitle: "#page-home > div h1",
        pageDescription: "#page-home > div p",
        signInButton: "#page-home > div a",
    },
    DELIVER_PAGE: {
        inputs: (field) => `#page-deliver input[name=${field}]`,
        zipCodeButton: "#page-deliver input[type=button]",
        deliveryMethod: ".delivery-method",
        deliveryMethodText: (index) => `.delivery-method > :nth-child(${index}) > span`,
        deliveryMethodImg: (index) => `.delivery-method > :nth-child(${index}) > img`,
        uploadDocument: "input[accept^='image'",
        documentImage: "#page-deliver > form > div > img",
        documentAlertText: ".alert-warning",
        registerButton: ".button-success",
        errorMessage: ".alert-error",
        successModal: ".swal2-popup",
        successCheckMark: "div.swal2-success-ring",
        successModalFirstMessage: "#swal2-title",
        successModalSecondMessage: "#swal2-html-container",
        closeModalButton: "button.swal2-confirm"
    }
}
export default locators