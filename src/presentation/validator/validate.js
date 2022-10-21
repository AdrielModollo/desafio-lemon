const Yup = require('yup');

const validateCustomerConsumption = require('../../main/config/enum/costumer-consumption');
const validateModalityTarify = require('../../main/config/enum/modality-tarify');
const typeConnection = require('../../main/config/enum/type-connection');

const validateSchema = Yup.object({
    body: Yup.object({
        numeroDoDocumento: Yup.number().required(),
        tipoDeConexao: Yup.string().oneOf(Object.values(typeConnection)).required(),
        classeDeConsumo: Yup.string().oneOf(Object.values(validateCustomerConsumption), 'Classe de consumo não aceita').required(),
        modalidadeTarifaria: Yup.string().oneOf(Object.values(validateModalityTarify), 'Modalidade tarifária não aceita').required(),
        historicoDeConsumo: Yup.array(Yup.number()
            .integer()
            .max(9999, 'O valor máximo permitido é somente até 9999')
            .min(0), 'O valor mínimo permitido é 0')
            .min(3, 'O mínimo de valores informado deve ser 3.')
            .max(12, 'Pode conter somente até 12 valores.')
            .required()
    }),
});

module.exports = { validateSchema };