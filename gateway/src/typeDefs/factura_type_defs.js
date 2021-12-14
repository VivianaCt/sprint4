 const {gql} = require('apollo-server');

const facturaTypeDefs = gql `
    type Factura {
        id_factura : String!
        fecha: String!
        cliente: String!
        producto: String!
        cant_Products: Int!
        price : Int!
    }

    input CreateFactura {
        fecha: String!
        cliente: String!
        producto: String!
        cant_Products: Int!
        price : Int!
    }

    input FacturaUpdate{
        id_factura : String!
        fecha: String!
        cliente: String!
        producto: String!
        cant_Products: Int!
        price : Int!
    }


    extend type Query {
        getFacturaByUsername(username:String!): Factura! 
        getAllFacturas (username:String!)     : [Factura]!
        getFacturaById (facturaId: String!)   : Factura
    }

    extend type Mutation {
        createFactura(factura:CreateFactura!): Factura!
        updateFactura(factura:FacturaUpdate!): Factura!
        
    }
`;

module.exports = facturaTypeDefs


