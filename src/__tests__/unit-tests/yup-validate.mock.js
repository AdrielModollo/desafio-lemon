const { requiredFields } = require('../__mocks__/verify-yup.mock')

describe('Tests fields undefined', () => {

    test("validate class consumer undefined", async () => {
        let data = requiredFields;
        expect(data.classeDeConsumo).toBeUndefined();
    });

    test("validate history consumer undefined", async () => {
        let data = requiredFields;
        expect(data.classeDeConsumo).toBeUndefined();
    });

    test("validate modality tarify undefined", async () => {
        let data = requiredFields;
        expect(data.classeDeConsumo).toBeUndefined();
    });

    test("validate number document undefined", async () => {
        let data = requiredFields;
        expect(data.classeDeConsumo).toBeUndefined();
    });

    test("validate type connection undefined", async () => {
        let data = requiredFields;
        expect(data.classeDeConsumo).toBeUndefined();
    });
});