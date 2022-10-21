const express = require('express');
const autheticateService = require('../../domain/services/autheticateService');
const { validate } = require('../../presentation/validator/index')
const { validateSchema } = require('../../presentation/validator/validate')


const routes = express.Router();

routes.post('/elegibility', validate(validateSchema), autheticateService.checkConsumptionHistory)

module.exports = routes;