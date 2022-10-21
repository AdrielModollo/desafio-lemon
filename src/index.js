const cors = require('cors')
const express = require('express')
const routes = require('./main/routes/route')
const { globalErrorsMiddleware } = require('./main/middlewares/global-middlewares')
const swaggerUi = require('./infra/http/swagger')

const app = express();

app
    .use(express.json())
    .use(routes)
    .use('/api-docs', swaggerUi.serve, swaggerUi.setup)
    .use(globalErrorsMiddleware)
    .use(cors)

app.listen(3333);