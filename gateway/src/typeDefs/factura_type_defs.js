const {gql} = require('apollo-server');

const facturaTypeDefs = gql `
    input CreateFactura {
        nombre: String!
        descripcion: String!
        precio: Int!
        stock: Int!
    }

    type Compras {
        id: Int!
        nombre: String!
        descripcion: String!
        precio: Int!
        stock: Int!
    }

    extend type Query {
        getfacturaByUsername: Compras!
        getFactura: [Factura]!
    }

    extend type Mutation {
        createFactura(factura: CreateFactura!): Factura!
    }
`

module.exports = facturaTypeDefs;
