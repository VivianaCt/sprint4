const productResolver = require('./product_resolver');
const authResolver = require('./auth_resolver');
const facturaResolver = require('./factura_resolver');
const trolleyResolver = require('./trolley_resolver');
const lodash = require('lodash');

const resolvers = lodash.merge(productResolver, authResolver, facturaResolver, trolleyResolver);

module.exports = resolvers
