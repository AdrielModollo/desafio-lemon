const requiredFields = {
    numeroDoDocumento: undefined,
    tipoDeConexao: undefined,
    classeDeConsumo: undefined,
    modalidadeTarifaria: undefined,
    historicoDeConsumo: undefined
};

const classConsumerNotAccept = {
    numeroDoDocumento: "14041737706",
    tipoDeConexao: "bifasica",
    classeDeConsumo: "comercial",
    modalidadeTarifaria: "convencional",
    historicoDeConsumo: [
        3878,
        9760,
        5976,
        2797,
        2481,
        5731,
        7538,
        4392,
        7859,
        4160,
        6941,
        4597
    ],
};


module.exports = {
    requiredFields,
    classConsumerNotAccept,
}