const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');

const docummentSwagger = YAML.load('./src/infra/helpers/swagger.yaml');

const swagger = {
    serve: swaggerUi.serve,
    setup: swaggerUi.setup(docummentSwagger),
};

module.exports = swagger;