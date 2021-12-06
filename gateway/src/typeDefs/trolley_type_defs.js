const {gql} = require('apollo-server');

const trolleyTypeDefs = gql `
    input CreateTrolley {
        id= Int!
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

module.exports = trolleyTypeDefs;
