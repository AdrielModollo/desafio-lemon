module.exports = {
    async checkConsumptionHistory(req, res) {
        const received = req.body;

        const typeConsumer = {
            monofasica: 400,
            bifasica: 500,
            trifasica: 750,
        };

        const totalSum = received.historicoDeConsumo.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

        const avg = totalSum / received.historicoDeConsumo.length;

        const typeConnection = avg > typeConsumer[received.tipoDeConexao];

        if (typeConnection === false) {
            return res.json('Consumo muito baixo para tipo de conexão')
        }

        const economiaAnualDeCO2 = (totalSum / 1000) * 84;

        return res.json({
            elegivel: typeConnection,
            economiaAnualDeCO2: economiaAnualDeCO2
        })
    }
}