const {gql} = require('apollo-server');

const productTypeDefs =  gql `
    input CreateProducto {
        nombre: String!
        descripcion: String!
        precio: Int!
        stock: Int!        
    }

    type Stock {
        id: Int!
        nombre: String!
        descripcion: String!
        precio: Int!
        stock: Int!
    }

    extend type Query {
        getproductoByUsername: Stock!
        getProducto: [Producto]!
    }

    extend type Mutation {
        createProducto(producto: CreateProducto!): Producto!
    }


`

module.exports = productoTypeDefs;
