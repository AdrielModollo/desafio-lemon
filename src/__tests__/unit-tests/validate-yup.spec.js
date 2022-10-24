const { requiredFields, classConsumerAccept } = require('../__mocks__/verify-yup.mock')
const Yup = require('yup');

describe('undefined fields tests', () => {
    test("validate class consumer undefined", async () => {
        let data = requiredFields;
        expect(data.classeDeConsumo).toBeUndefined();
    });

    test("validate history consumer undefined", async () => {
        let data = requiredFields;
        expect(data.historicoDeConsumo).toBeUndefined();
    });

    test("validate modality tarify undefined", async () => {
        let data = requiredFields;
        expect(data.modalidadeTarifaria).toBeUndefined();
    });

    test("validate number document undefined", async () => {
        let data = requiredFields;
        expect(data.numeroDoDocumento).toBeUndefined();
    });

    test("validate type connection undefined", async () => {
        let data = requiredFields;
        expect(data.tipoDeConexao).toBeUndefined();
    });
});

describe('valid field tests', () => {
    let data = classConsumerAccept;

    test("validate class consumer valid", async () => {
        const validateFieldsValid = Yup.mixed().oneOf(["comercial", "residencial", "industrial", "poder", "público", "rural"]);

        const result = await validateFieldsValid.isValid(data.classeDeConsumo)

        expect(result).toBeTruthy();
    });

    test("validate type connection valid", async () => {
        const validateFieldsValid = Yup.mixed().oneOf(["monofasica", "bifasica", "trifasica"]);

        const result = await validateFieldsValid.isValid(data.tipoDeConexao)

        expect(result).toBeTruthy();
    });


    test("validate type connection valid", async () => {
        const validateFieldsValid = Yup.mixed().oneOf(["azul", "branca", "verde", "convencional"]);

        const result = await validateFieldsValid.isValid(data.modalidadeTarifaria)

        expect(result).toBeTruthy();
    });
});

describe('invalid field tests', () => {
    let data = classConsumerAccept;

    test("invalid class consumer", async () => {
        const invalidFieldsValid = Yup.mixed().oneOf(["comercial", "residencial", "industrial", "poder", "público", "rural"]);

        const result = await invalidFieldsValid.isValid(data.classeDeConsumo = 'teste')

        expect(result).toBeFalsy();
    });

    test("invalid type connection", async () => {
        const invalidFieldsValid = Yup.mixed().oneOf(["monofasica", "bifasica", "trifasica"]);

        const result = await invalidFieldsValid.isValid(data.tipoDeConexao = 'teste')

        expect(result).toBeFalsy();
    });


    test("invalid modality tarify", async () => {
        const invalidFieldsValid = Yup.mixed().oneOf(["azul", "branca", "verde", "convencional"]);

        const result = await invalidFieldsValid.isValid(data.modalidadeTarifaria = 'teste')

        expect(result).toBeFalsy();
    });
});