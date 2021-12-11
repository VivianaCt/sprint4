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

    type CreateFactura {
        id_factura: String
        fecha: String!
        cliente: String!
        producto: String!
        cant_Products: Int!
        price : Int!
    }

    type FacturaUpdate{
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
        createFactura(factura:String!): Factura!
        updateFactura(factura:String!): Factura!
        
    }
`;

module.exports = facturaTypeDefs


//createFactura(factura:CreateFactura!): Factura!
//updateFactura(factura:FacturaUpdate!): Factura!