const {gql} = require('apollo-server');

const facturaTypeDefs = gql `
    input CreateFactura {
        fecha: String!
        cliente: String!
        producto: String!
        cant_Products: Int!
        price : int!
    }

    type Compras {
        id: Int!
        nombre: String!
        descripcion: String!
        precio: Int!
        stock: Int!
    }

    type Factura {
        id_factura : String!
        fecha: String!
        cliente: String!
        producto: String!
        cant_Products: Int!
        price : int!
    }

    type Facturas {
        facturas : [Factura]!
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
