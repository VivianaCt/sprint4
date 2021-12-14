
const authResolver = require('./auth_resolver');
const facturaResolver = require('./factura_resolver');
const productResolver = require('./product_resolver');
const trolleyResolver= require('./trolley_resolver');

const lodash = require('lodash');

const resolvers = lodash.merge( authResolver, facturaResolver, productResolver, trolleyResolver);

module.exports = resolvers
