const authenticateService = require('../../services/authenticateService');

module.exports = (req, res, next) => {
    try {
        const response = authenticateService.checkConsumptionHistory(req.body);

        return res.status(200).json(response);
    } catch (e) {
        next(e);
    }
};